import { getRequest, postRequest } from "../api/api.js";
import { requireLogin } from "../utils/auth.js";

loadHeader();
injectGlobalModal();

// 공통 헤더 로드
async function loadHeader() {
  const headerContainer = document.getElementById("header");
  const token = localStorage.getItem("accessToken");
  if (!headerContainer) return;

  const res = await fetch("../components/header.html");
  const html = await res.text();
  headerContainer.innerHTML = html;

  initHeaderEvents();
  if (token) {
    setTimeout(() => {
      loadUserProfile();
    }, 50);
  }
}

/**
 * 프로필
 */
async function loadUserProfile() {
  if (!requireLogin()) return;
  try {
    const res = await getRequest("/users", true);
    const user = res.data;

    const headerProfile = document.getElementById("header-profile");

    if (user.profile_image) {
      headerProfile.src = user.profile_image;
    }
  } catch (e) {
  }
}

/**
 * 헤더 내부 기능
 */
function initHeaderEvents() {

  // 게시글 리스트
  const homeLogo = document.querySelector("header h1");
  if (homeLogo) {
    homeLogo.style.cursor = "pointer";
    homeLogo.addEventListener("click", () => {
      location.href = "./boardList.html";
    });
  }

  // 로그아웃 기능
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      if (!requireLogin()) return;
      await postRequest("/auth/logout", null, false);
      localStorage.removeItem("accessToken");
      alert("로그아웃 되었습니다.");
      location.href = "./login.html";
    });
  }

  // 뒤로가기
  const backBtn = document.getElementById("back-btn");
  if (backBtn) {

    const currentPage = location.pathname;
    if (currentPage.includes("boardList.html")) {
      backBtn.style.display = "none";
    } else {
      backBtn.addEventListener("click", () => history.back());
    }
  }
}

// 모달
async function injectGlobalModal() {
  if (document.getElementById("modal")) return;

  const res = await fetch("../components/modal.html");
  const html = await res.text();

  document.body.insertAdjacentHTML("beforeend", html);
}