import { postRequest } from "../api/api.js";
import { uploadProfileImage } from "../api/upload.js";
import { handleServerError } from "../errors/errorHandlers.js";
import { spawnPetsFree } from "../common/pets.js";

const API_URL = "/auth/signup";

const signupBtn = document.getElementById("signup-btn");
const toLoginBtn = document.getElementById("signup-move-login");

const emailInput = document.getElementById("email");
const pwInput = document.getElementById("password");
const pwConfirmInput = document.getElementById("passwordConfirm");
const nicknameInput = document.getElementById("nickname");
const profileInput = document.getElementById("profile");
const profilePreview = document.getElementById("profile-preview");

let selectedImageFile = null;

const errorInputMap = {
  email_duplicate: emailInput,
  email_invalid: emailInput,
  nickname_duplicate: nicknameInput,
  nickname_max_10: nicknameInput,
  nickname_no_space: nicknameInput,
  password_invalid: pwInput,
  password_rule_violation: pwInput,
  password_mismatch: pwConfirmInput,
  password_required: pwInput,
};

/**
 * 입력 필드의 에러 메시지 표시
 */
function showError(input, message) {
  const helper = input.parentElement.querySelector(".helper-text");
  if (helper) helper.textContent = message;
}

/**
 * 모든 에러 메시지 초기화
 */
function clearErrors() {
  document.querySelectorAll(".helper-text").forEach((h) => (h.textContent = ""));
}

/**
 * 로그인 화면 이동
 */
toLoginBtn.addEventListener("click", () => (location.href = "./login.html"));

/**
 * 프로필 이미지 선택 시 미리보기 표시
 */
profileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  
  selectedImageFile = file;

  const reader = new FileReader();
  reader.onload = function (event) {
    profilePreview.src = event.target.result;
    profilePreview.hidden = false;
  };
  reader.readAsDataURL(file);
})

/**
 * 회원가입 요청
 */
signupBtn.addEventListener("click", async () => {
  clearErrors();

  const email = emailInput.value.trim();
  const password = pwInput.value.trim();
  const confirm = pwConfirmInput.value.trim();
  const nickname = nicknameInput.value.trim();


  if (!email) return showError(emailInput, "이메일을 입력해주세요.");
  if (!password) return showError(pwInput, "비밀번호를 입력해주세요.");
  if (!confirm) return showError(pwConfirmInput, "비밀번호를 한번더 입력해주세요.");
  if (!nickname) return showError(nicknameInput, "닉네임을 입력해주세요.");

  if (password !== confirm) {
    return showError(pwConfirmInput, "비밀번호가 일치하지 않습니다.");
  }

  let imagePath = null;

  if (selectedImageFile) {
    imagePath = await uploadProfileImage(selectedImageFile);
  }

  const profileImage = imagePath || "https://picsum.photos/seed/default/200/200";

  const requestBody = {
    email,
    password,
    password_confirm: confirm,
    nickname,
    profile_image: profileImage,
  };

  try {
    const res = await postRequest(API_URL, requestBody);

    if (res.message === "register_success") {
      alert("회원가입 성공!");
      location.href = "./login.html";
    }

  } catch (err) {
  const serverCode = err.message;
  handleServerError(serverCode);
}

document.addEventListener("DOMContentLoaded", () => {
  spawnPetsFree(".pet-container", 5);
});