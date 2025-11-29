import { getRequest, postRequest } from "../api/api.js";
import { requireLogin } from "../utils/auth.js";
import { spawnPetsFree, spawnOnePet, removeOnePet} from "./pets.js";
import { API } from "../api/apiEndpoints.js";

loadHeader();
injectGlobalModal();
injectSidebar();

// 임시 mock 알림객체
const mockNotifications = [
  { message: "💬 누군가 댓글을 남겼어요!", boardId: 43 },
  { message: "👥 새로운 팔로워가 생겼습니다!", userId: 30 },
  { message: "🚀 좋아요 10개를 돌파했어요!", boardId: 42 },
];

// 공통 헤더 로드
async function loadHeader() {
  const headerContainer = document.getElementById("header");
  const token = localStorage.getItem("accessToken");
  if (!headerContainer) return;

  const res = await fetch("../components/header.html");
  let html = await res.text();
  headerContainer.innerHTML = html;
  
  initHeaderEvents();
  if (token) {
    setTimeout(() => {
      loadUserProfile();
      loadMockNotifications(); // 기능구현 까지 임시
    }, 50);
  }
}

/**
 * 프로필
 */
async function loadUserProfile() {
  try {
    const res = await getRequest(API.USERS.ME, true);
    const user = res.data;

    const headerProfile = document.getElementById("header-profile");
    const headerProfileNickname = document.querySelector(".header-profile-nickname");

    if (user.profile_image) {
      headerProfile.src = user.profile_image;
    }
    headerProfileNickname.textContent = user.nickname;
  } catch (e) {
  }
}

/**
 * 🔔 알림 로드 (백엔드 없는 프론트 전용 Mock)
 */
function loadMockNotifications() {
  const menu = document.querySelector(".notification-menu");
  if (!menu) return;

  menu.innerHTML = ""; 

  mockNotifications.forEach((n) => {
    const li = document.createElement("li");
    li.textContent = n.message;

    li.addEventListener("click", (e) => {
      e.stopPropagation();

      if (n.boardId) {
        location.href = `./boardDetail.html?id=${n.boardId}#comments`;
      } else if (n.userId) {
        location.href = `./myPage.html?id=${n.userId}`;
      }
    });

    menu.appendChild(li);
  });
}

// 알림 로딩
// async function loadNotifications() {
//   try {
//     const res = await getRequest("/notifications/preview", true);

//     const menu = document.querySelector(".notification-menu");
//     menu.innerHTML = "";

//     if (res.data.length === 0) {
//       menu.innerHTML = `<li class="empty">알림이 없습니다.</li>`;
//       return;
//     }

//     res.data.forEach(noti => {
//       menu.insertAdjacentHTML(
//         "beforeend",
//         `<li>${noti.message}</li>`
//       );
//     });

//   } catch (err) {
//     console.error("알림 로드 실패:", err);
//   }
// }


/**
 * 헤더 내부 기능
 */
function initHeaderEvents() {

  // 회원정보 수정
  const profileUpdateLink = document.querySelector(".profile-menu li:nth-child(1) a");
  if (profileUpdateLink) {
    profileUpdateLink.addEventListener("click", (e) => {
      if (!requireLogin()) {
        e.preventDefault();
        return;
      }
    });
  }

  // 비밀번호 변경
  const passwordUpdateLink = document.querySelector(".profile-menu li:nth-child(2) a");
  if (passwordUpdateLink) {
    passwordUpdateLink.addEventListener("click", (e) => {
      if (!requireLogin()) {
        e.preventDefault();
        return;
      }
    });
  }

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
      await postRequest(API.AUTH.LOGOUT, null, false);
      localStorage.removeItem("accessToken");
      alert("로그아웃 되었습니다.");
      location.href = "./login.html";
    });
  }

  // 메시지
  const messageBtn = document.getElementById("message-btn");
  if (messageBtn) {
    messageBtn.addEventListener("click", () => {
      if (!requireLogin()) return;
      location.href = "./messageList.html";
    });
  }

  // 펫 토글
  const petToggleBtn = document.getElementById("pet-toggle");
  const petContainer = document.querySelector(".pet-container");
  const plusBtn = document.getElementById("pet-plus");
  const minusBtn = document.getElementById("pet-minus");
  const petSpawnSize = 5;

  if (!petContainer) {
    if (plusBtn) plusBtn.style.display = "none";
    if (minusBtn) minusBtn.style.display = "none";
    if (petToggleBtn) petToggleBtn.closest(".ios-toggle-wrapper").style.display = "none";
  }
  else {
    if (petToggleBtn && petContainer) {
      const savedPetState = localStorage.getItem("pet_toggle") || "on";

      if (savedPetState === "on") {
        petToggleBtn.checked = true;
        petContainer.classList.remove("visible");
        if (petContainer.children.length === 0) {
          spawnPetsFree(".pet-container", petSpawnSize);
        }
      } else {
        petToggleBtn.checked = false;
        petContainer.classList.add("visible");
        petContainer.innerHTML = "";
      }

      petToggleBtn.addEventListener("change", () => {
        if (petToggleBtn.checked) {
          petContainer.classList.remove("visible");
          spawnPetsFree(".pet-container", petSpawnSize);
          localStorage.setItem("pet_toggle", "on");
        } else {
          petContainer.classList.add("visible");
          petContainer.innerHTML = "";
          localStorage.setItem("pet_toggle", "off");
        }
      });
      // + 버튼: 한 마리 추가
      plusBtn.addEventListener("click", () => {
        if (!petToggleBtn.checked) return;
        spawnOnePet(".pet-container");
      });
    
      // – 버튼: 한 마리 제거
      minusBtn.addEventListener("click", () => {
        if (!petToggleBtn.checked) return;
        removeOnePet(".pet-container");
      });
      
    }
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

  if (window.location.pathname.includes("signup.html")) {
      const title = document.querySelector("header h1");
      if (title) {
          title.textContent = "비 회원으로 보기";
      }
      const headerRight = document.querySelector(".header-right");
      if (headerRight) headerRight.style.display = "none";
  }
}

// 모달
async function injectGlobalModal() {
  if (document.getElementById("modal")) return;

  const res = await fetch("../components/modal.html");
  const html = await res.text();

  document.body.insertAdjacentHTML("beforeend", html);
}

// 사이드바
async function injectSidebar() {
  if (document.getElementById("sidebar-injected")) return;

  const res = await fetch("../components/sidebar.html");
  const html = await res.text();

  const wrapper = document.createElement("div");
  wrapper.id = "sidebar-injected";
  wrapper.innerHTML = html;
  document.body.appendChild(wrapper);

  initSidebarEvents();
}

// 사이드바 열고닫기
function initSidebarEvents() {
  const sidebar = document.querySelector(".sidebar");
  const toggleBtn = document.querySelector(".sidebar-toggle");
  const overlay = document.querySelector(".sidebar-overlay");

  if (!sidebar || !toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("open");
    if (window.innerWidth < 768) {
      overlay.classList.toggle("show", isOpen);
    }
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      overlay.classList.remove("show");
    }
  });
}

// 뒤로가기 리로드
window.addEventListener("pageshow", function(event) {
  if (event.persisted || performance.getEntriesByType("navigation")[0].type === "back_forward") {
    location.reload();
  }
});