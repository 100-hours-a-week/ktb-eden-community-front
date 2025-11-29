import { postRequest } from "../api/api.js";
import { spawnPetsFree } from "../common/pets.js";

const API_URL = "/auth/login";
import { showError, clearAllHelperErrors } from "../errors/errorHandlers.js";
import { errorCodeMap } from "../errors/errorMessages.js";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const helperText = document.getElementById("helper-text");
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const loginGifPause = document.getElementById("login-gif-pause");
const loginVid = document.getElementById("login-vid");


/**
 * 로그인 요청
 */
loginBtn.addEventListener("click", async () => {
  clearAllHelperErrors();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    showError(helperText, errorCodeMap.AU007);
    return;
  }

  try {
    const res = await postRequest(API_URL, { email, password });
    if (res.message === "login_success") {
      loginGifPause.classList.add("hidden");
      loginVid.classList.remove("hidden");

      loginVid.playbackRate = 2.0;
      loginVid.currentTime = 0;
      loginVid.play();

      localStorage.setItem("accessToken", res.data.token_dto.access_token);
      setTimeout(() => {
        location.href = "./boardList.html";
      }, 1200);
    }
  } catch (err) {
    showError(helperText, errorCodeMap.AU007);
  }
});

document.querySelector(".oauth-kakao").addEventListener("click", () => {
  alert("카카오 로그인 준비중");
});

// 게시글 리스트 이동(비회원)
const homeLogo = document.querySelector("header h1");
if (homeLogo) {
  homeLogo.style.cursor = "pointer";
  homeLogo.addEventListener("click", () => {
    location.href = "./boardList.html";
  });
}


/**
 * 회원가입 페이지 이동
 */
signupBtn.addEventListener("click", () => {
  location.href = "./signup.html";
});

document.addEventListener("DOMContentLoaded", () => {
  spawnPetsFree(".pet-container", 5);
});