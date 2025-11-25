import { postRequest } from "../api/api.js";
import { uploadProfileImage } from "../api/upload.js";
import { errorMessageMap, emailRegex, passwordRegex } from "../errors/errorMessages.js";
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
function showError(input, message, color = "red") {
  const helper = input.parentElement.querySelector(".helper-text");
  if (helper) {
    helper.textContent = message;
    helper.style.color = color;
  }
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


  if (!email) return showError(emailInput, errorMessageMap.email_required);
  if (!password) return showError(pwInput, errorMessageMap.password_required);
  if (!confirm) return showError(pwConfirmInput, errorMessageMap.password_mismatch);
  if (!nickname) return showError(nicknameInput, errorMessageMap.nickname_required);

  if (password !== confirm) {
    return showError(pwConfirmInput, errorMessageMap.password_mismatch);
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
  handleServerError(err.message, errorInputMap, showError);
}
});

function updateHelper(input, message, color = "red") {
  const helper = input.parentElement.querySelector(".helper-text");
  if (!helper) return;
  helper.textContent = message;
  helper.style.color = color;
}

emailInput.addEventListener("input", () => {
  const value = emailInput.value.trim();

  if (!value) {
    return updateHelper(emailInput, errorMessageMap.email_required, "gray");
  }

  if (!emailRegex.test(value)) {
    return updateHelper(emailInput, errorMessageMap.email_invalid, "red");
  }

  updateHelper(emailInput, "사용 가능한 이메일입니다.", "green");
});


pwInput.addEventListener("input", () => {
  const pw = pwInput.value.trim();

  if (!pw) {
    return updateHelper(pwInput, errorMessageMap.password_required, "gray");
  }

  if (!passwordRegex.test(pw)) {
    return updateHelper(pwInput, errorMessageMap.password_rule_violation, "red");
  }

  updateHelper(pwInput, "사용 가능한 비밀번호입니다.", "green");
});

nicknameInput.addEventListener("input", () => {
  const value = nicknameInput.value.trim();

  if (!value) {
    return updateHelper(
      nicknameInput,
      errorMessageMap.nickname_required,
      "gray"
    );
  }

  if (value.includes(" ")) {
    return updateHelper(
      nicknameInput,
      errorMessageMap.nickname_no_space,
      "red"
    );
  }

  if (value.length > 10) {
    return updateHelper(
      nicknameInput,
      errorMessageMap.nickname_max_10,
      "red"
    );
  }
  updateHelper(nicknameInput, "사용 가능한 닉네임입니다.", "green");
});


document.addEventListener("DOMContentLoaded", () => {
  spawnPetsFree(".pet-container", 5);
});