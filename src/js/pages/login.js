import { postRequest } from "../api/api.js";
import { spawnPetsFree } from "../common/pets.js";

const API_URL = "/auth/login";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const helperText = document.getElementById("helper-text");
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");

/**
 * 하단 에러 표시
 */
function showError(input, message) {
  const helper = input.parentElement.querySelector(".helper-text");
  if (helper) helper.textContent = message;
}

/**
 * helper-text 초기화
 */
function clearErrors() {
  document.querySelectorAll(".helper-text").forEach((h) => (h.textContent = ""));
}

/**
 * 로그인 요청
 */
loginBtn.addEventListener("click", async () => {
  clearErrors();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    helperText.textContent = "이메일과 비밀번호를 모두 입력해주세요.";
    return;
  }

  try {
    const res = await postRequest(API_URL, { email, password });
    if (res.message === "login_success") {
      alert("로그인 성공!");
      localStorage.setItem("accessToken", res.data.token_dto.access_token);
      return (location.href = "./boardList.html");
    }
  } catch (err) {
    helperText.textContent = "이메일 또는 비밀번호가 잘못되었습니다.";
  }
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