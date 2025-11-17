import { patchRequest } from "../api/api.js";

const API_URL = `/users/password`;


const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("password-confirm");

const helperPassword = document.getElementById("password-helper");
const helperConfirm = document.getElementById("password-confirm-helper");

const editBtn = document.getElementById("edit-btn");

/**
 * 서버 에러 코드 → 사용자 친화적 메시지로 매핑
 */
const errorMessageMap = {
  password_required: "비밀번호를 입력해주세요.",
  password_mismatch: "비밀번호가 일치하지 않습니다.",
  password_same_as_old: "이전 비밀번호와 동일합니다.",
  password_rule_violation:
    "대문자, 소문자, 숫자, 특수문자 각각 최소 1개 포함, 8~20자로 입력해주세요.",
};


/**
 * 비밀번호 변경 요청
 */

editBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const new_password = passwordInput.value.trim();
  const new_password_confirm = passwordConfirmInput.value.trim();

  // 🔹 1차 클라이언트 검증
  const validPw = validatePassword(new_password);
  const validPwConfirm = validatePasswordConfirm(new_password, new_password_confirm);

  if (!validPw || !validPwConfirm) return;

  try {
    await patchRequest(
      API_URL,
      { new_password, new_password_confirm },
      true
    );

    showToast("비밀번호가 성공적으로 변경되었습니다! 다시 로그인 해주세요");

    setTimeout(() => {
      location.href = "./login.html";
    }, 1500);

  } catch (err) {
    const serverCode = err.message;

    if (serverCode && errorMessageMap[serverCode]) {
      helperPassword.textContent = errorMessageMap[serverCode];
      return;
    }

    helperPassword.textContent = "서버 오류가 발생했습니다.";
  }
});

/**
 * 토스트 메시지 표시
 */
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast-message show";
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}


/**
 * 비밀번호 기본 검증
 */

function validatePassword(new_password) {
  if (!new_password) {
    helperPassword.textContent = "비밀번호를 입력해주세요.";
    return false;
  }

  if (new_password.length < 8 || new_password.length > 20) {
    helperPassword.textContent = "8~20자로 입력해주세요.";
    return false;
  }

  helperPassword.textContent = "";
  return true;
}

/**
 * 비밀번호 확인 검증
 */
function validatePasswordConfirm(new_password, confirm) {
  if (!confirm) {
    helperConfirm.textContent = "비밀번호를 한번 더 입력해주세요.";
    return false;
  }

  if (new_password !== confirm) {
    helperConfirm.textContent = "비밀번호와 다릅니다.";
    return false;
  }

  helperConfirm.textContent = "";
  return true;
}