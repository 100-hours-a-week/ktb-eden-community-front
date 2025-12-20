const API_BASE_URL = "http://localhost:8080/api/v1";


/** AccessToken 조회 */
function useAuth() {
  return localStorage.getItem("accessToken");
}

/** 공통적으로 Authorization 헤더 적용 */
function applyAuth(headers, includeAuth) {
  if (includeAuth) {
    const token = useAuth();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }
}


/**
 * GET
 */
export async function getRequest(endpoint, includeAuth = false) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const options = {
    method: "GET",
    headers: {},
    credentials: "include"
  };
  applyAuth(options.headers, includeAuth);

  try {
    let res = await fetch(url, options);

    if (res.status === 401) {
      const newToken = await refreshAccessToken();
      if (!newToken) throw new Error("token_refresh_failed");

      options.headers["Authorization"] = `Bearer ${newToken}`;
      res = await fetch(url, options);
    }

    if (!res.ok) {
      const errData = await res.json();
      throw new Error(errData.message || `GET ${endpoint} 실패`);
    }
    return await res.json();
  } catch (err) {
    console.error(`[GET ${endpoint}] 오류:`, err);
    throw err;
  }
}

/**
 * POST (FormData or JSON 자동 처리)
 */
export async function postRequest(endpoint, data, includeAuth = false) {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = {};

  let body = data;
  if (!(data instanceof FormData)) {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify(data);
  }

  applyAuth(headers, includeAuth);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers,
      body,
      credentials: "include"
    });

    if (res.status === 401) {
      const newToken = await refreshAccessToken();
      if (!newToken) throw new Error("token_refresh_failed");

      headers["Authorization"] = `Bearer ${newToken}`;

      res = await fetch(url, {
        method: "POST",
        headers,
        body,
        credentials: "include",
      });
    }

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message || "request_failed");
    }

    return result;
  } catch (err) {
    console.error("POST 요청 오류:", err);
    throw err;
  }
}

/**
 * PATCH
 */
export async function patchRequest(endpoint, data, includeAuth = false) {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = {};

  let body = data;
  if (!(data instanceof FormData)) {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify(data);
  }

  applyAuth(headers, includeAuth);

  try {
    const res = await fetch(url, {
      method: "PATCH",
      headers,
      body,
      credentials: "include"
    });


    if (res.status === 401) {
      const newToken = await refreshAccessToken();
      if (!newToken) throw new Error("token_refresh_failed");

      headers["Authorization"] = `Bearer ${newToken}`;

      res = await fetch(url, {
        method: "PATCH",
        headers,
        body,
        credentials: "include",
      });
    }

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message || "patch_failed");
    }

    return result;
  } catch (err) {
    console.error(`[PATCH ${endpoint}] 오류:`, err);
    throw err;
  }
}

/**
 * DELETE
 */
export async function deleteRequest(endpoint, includeAuth = false) {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = {};

  applyAuth(headers, includeAuth);

  try {
    const res = await fetch(url, {
      method: "DELETE",
      headers,
      credentials: "include"
    });
    
    if (res.status === 401) {
      const newToken = await refreshAccessToken();
      if (!newToken) throw new Error("token_refresh_failed");

      headers["Authorization"] = `Bearer ${newToken}`;

      res = await fetch(url, {
        method: "DELETE",
        headers,
        credentials: "include",
      });
    }

    const result = await res.json();

    if (!res.ok) {
      const errData = await res.json();
      throw new Error(errData.message || "delete_failed");
    }

    return result;
  } catch (err) {
    console.error(`[DELETE ${endpoint}] 오류:`, err);
    throw err;
  }
}

async function refreshAccessToken() {
  try {
    const res = await fetch(API_BASE_URL + "/auth/refresh", {
      method: "POST",
      credentials: "include",
    });

    const result = await res.json();

    if (!res.ok) throw new Error(result.message);

    localStorage.setItem("accessToken", result.data.access_token);
    return result.data.access_token;
  } catch (err) {
    console.error("토큰 갱신 실패", err);
    return null;
  }
}