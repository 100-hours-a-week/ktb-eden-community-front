import { postRequest } from "../api/api.js";
import { uploadProfileImage } from "../api/upload.js";
import { errorCodeMap, emailRegex, passwordRegex } from "../errors/errorMessages.js";
import { clearAllHelperErrors, showError } from "../errors/errorHandlers.js";
import { getInputByErrorCode } from "../utils/errorInputSelector.js";
import { API } from "../api/apiEndpoints.js";

const signupBtn = document.getElementById("signup-btn");
const toLoginBtn = document.getElementById("signup-move-login");

const emailInput = document.getElementById("email");
const pwInput = document.getElementById("password");
const pwConfirmInput = document.getElementById("passwordConfirm");
const nicknameInput = document.getElementById("nickname");
const profileInput = document.getElementById("profile");
const profilePreview = document.getElementById("profile-preview");

let selectedImageFile = null;

const inputs = {
  email: emailInput,
  password: pwInput,
  passwordConfirm: pwConfirmInput,
  nickname: nicknameInput,
};

function handleSignupError(err) {
  const code = err.code;
  const input = getInputByErrorCode(code, inputs);
  if (input) showError(input, errorCodeMap[code]);
  else alert("오류가 발생했습니다.");
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
  clearAllHelperErrors();

  const email = emailInput.value.trim();
  const password = pwInput.value.trim();
  const confirm = pwConfirmInput.value.trim();
  const nickname = nicknameInput.value.trim();


  if (!email) return showError(emailInput, errorCodeMap.AU011);
  if (!password) return showError(pwInput, errorCodeMap.AU012);
  if (!confirm) return showError(pwConfirmInput, errorCodeMap.AU013);
  if (!nickname) return showError(nicknameInput, errorCodeMap.AU014);

  if (password !== confirm) {
    return showError(pwConfirmInput, errorCodeMap.AU002);
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
    const res = await postRequest(API.AUTH.SIGNUP, requestBody);

    if (res.message === "register_success") {
      alert("회원가입 성공!");
      location.href = "./login.html";
    }

  } catch (err) {
    handleSignupError(err);
  }
});

emailInput.addEventListener("input", () => {
  const value = emailInput.value.trim();
  if (!value) return showError(emailInput, errorCodeMap.AU011);
  if (!emailRegex.test(value)) return showError(emailInput,errorCodeMap.AU010);
  showError(emailInput, "");
});


pwInput.addEventListener("input", () => {
  const pw = pwInput.value.trim();
  if (!pw) return showError(pwInput, errorCodeMap.AU012);
  if (!passwordRegex.test(pw)) return showError(pwInput, errorCodeMap.AU016);
  showError(pwInput, "");
});

nicknameInput.addEventListener("input", () => {
  const value = nicknameInput.value.trim();
  if (!value) return showError(nicknameInput, errorCodeMap.AU014);
  if (value.includes(" ")) return showError(nicknameInput, errorCodeMap.AU017);
  if (value.length > 10) return showError(nicknameInput, errorCodeMap.AU018);
  showError(nicknameInput, "");
});