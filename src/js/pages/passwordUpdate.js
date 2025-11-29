import { patchRequest } from "../api/api.js";
import { showToast } from "../utils/uiUtil.js";
const API_URL = `/users/password`;
import { errorCodeMap, passwordRegex } from "../errors/errorMessages.js";
import { showError, clearAllHelperErrors } from "../errors/errorHandlers.js";


const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("password-confirm");

const helperPassword = document.getElementById("password-helper");
const helperConfirm = document.getElementById("password-confirm-helper");

const editBtn = document.getElementById("edit-btn");


/**
 * 비밀번호 변경 요청
 */

editBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  clearAllHelperErrors();

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

    if (serverCode && errorCodeMap[serverCode]) {
      helperPassword.textContent = errorCodeMap[serverCode];
    } else {
      helperPassword.textContent = "비밀번호 변경 중 오류가 발생했습니다";
    }
  }
});


/**
 * 비밀번호 기본 검증
 */

function validatePassword(new_password) {
  if (!new_password) {
    showError(passwordInput, errorCodeMap.AU012);
    return false;
  }

  if (!passwordRegex.test(new_password)) {
    showError(passwordInput, errorCodeMap.AU016);
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
    showError(passwordConfirmInput, errorCodeMap.AU013);
    return false;
  }

  if (new_password !== confirm) {
    showError(passwordConfirmInput, errorCodeMap.AU002);
    return false;
  }

  helperConfirm.textContent = "";
  return true;
}