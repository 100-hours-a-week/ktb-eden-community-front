import { postRequest } from "../api/api.js";
import { uploadProfileImage } from "../api/upload.js";

const API_URL = "/auth/signup";

const signupBtn = document.getElementById("signup-btn");
const backBtn = document.getElementById("back-btn");
const toLoginBtn = document.getElementById("signup-move-login");

const emailInput = document.getElementById("email");
const pwInput = document.getElementById("password");
const pwConfirmInput = document.getElementById("passwordConfirm");
const nicknameInput = document.getElementById("nickname");
const profileInput = document.getElementById("profile");
const profilePreview = document.getElementById("profile-preview");

let selectedImageFile = null;

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

    const msg = err.message;

    switch (msg) {
      case "email_duplicate":
        return showError(emailInput, "중복된 이메일입니다.");

      case "email_invalid":
        return showError(emailInput, "올바른 이메일 주소 형식을 입력해주세요.(예:example@example.com)");

      case "nickname_duplicate":
        return showError(nicknameInput, "이미 사용 중인 닉네임입니다.");
      
      case "nickname_max_10":
        return showError(nicknameInput, "닉네임은 최대 10자 까지 작성 가능합니다. ")

      case "nickname_no_space":
        return showError(nicknameInput, "띄어쓰기를 없애주세요")

      case "password_invalid":
        return showError(pwInput, "비밀번호 형식이 올바르지 않습니다.");

      case "password_mismatch":
        return showError(pwConfirmInput, "비밀번호가 다릅니다.");

      case "password_rule_violation":
        return showError(pwInput, "비밀번호 규칙을 만족하지 않습니다. (영문대문자+영문소문자+숫자+특수문자 포함)");

      default:
        alert("예기치 못한 오류가 발생했습니다.");
    }
  }
});