import { API_BASE_URL } from "../../config.js";
import { API } from "./apiEndpoints.js";


/**
 * API 요청
 */
export async function request(method, endpoint, { includeAuth = false, body = null, headers = {} } = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const { finalBody, updateHeaders } = prepareBody(body, headers);

  const options = {
    method,
    headers: updateHeaders,
    body: finalBody,
    credentials: "include",
  };

  applyAuth(options.headers, includeAuth);
  
  try {
    let hasRetried = false;
    let res = await fetch(url, options);
    let jsonData = null;

    // 토큰 재발급 및 1회 재시도
    if (includeAuth && res.status === 401 && !hasRetried) {
      hasRetried = true;
      const newToken = await refreshAccessToken();
      if (!newToken) throw new Error("token_refresh_failed");

      applyAuth(options.headers, includeAuth);
      res = await fetch(url, options); 
    }
    // JSON 한번만 파싱
    if(res.status !== 204) {
      jsonData = await res.json().catch(() => null);
    }
    // 에러처리
    if (!res.ok) {
      const msg =
        jsonData?.message ||
        jsonData?.error ||
        jsonData?.detail ||
        `${method} ${endpoint} 실패`;

      throw new Error(msg);
    }
    return jsonData;
  } catch (err) {
    console.error(`[${method} ${endpoint}] 오류:`, err);
    throw err;
  }
}
  
/**
 * AT 조회
 */
function useAuth() {
  return localStorage.getItem("accessToken");
}


/**
 * Authorization 헤더 적용
 */
function applyAuth(headers, includeAuth) {
  if (includeAuth) {
    const token = useAuth();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }
}

/**
 * 토큰 재발급
 */
async function refreshAccessToken() {
  try {
    const token = useAuth();
    const headers = {};
    if (token) headers["Authorization"] = `Bearer ${token}`;
    const res = await fetch(API_BASE_URL + API.AUTH.REFRESH, {
      method: "POST",
      credentials: "include",
      headers: {
        "Authorization": token ? `Bearer ${token}` : ""
      }
    });

    const result = await res.json();
    console.log(result);

    if (!res.ok) throw new Error(result.message);

    localStorage.setItem("accessToken", result.data.access_token);
    return result.data.access_token;
  } catch (err) {
    console.error("토큰 갱신 실패", err);
    redirectToLogin();
    return null;
  }
}

/**
 * body, header 전처리
 */
function prepareBody(body, headers) {
    let finalBody = body;
    let updateHeaders = {...headers};
    if (body === null) {
        return {finalBody: null, updateHeaders};
    }
    if (body instanceof FormData) {
        return { finalBody, updateHeaders };
    }
    updateHeaders["Content-Type"] = "application/json";
    finalBody = JSON.stringify(body);

    return { finalBody , updateHeaders };
}

function redirectToLogin() {
  if (useAuth()) {
    localStorage.removeItem("accessToken");
    window.location.href = "/src/pulbic/login.html";  
  }
}