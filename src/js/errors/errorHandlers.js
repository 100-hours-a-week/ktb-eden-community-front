import { errorCodeMap } from "./errorMessages.js";

export function handleServerError(code, errorInputMap, showError) {
  const message = errorCodeMap[code] || "서버 오류가 발생했습니다.";
  const input = errorInputMap[code];

  if (input) showError(input, message);
  else alert(message);
}

export function showError(input, message) {
  const helper = input?.parentElement?.querySelector(".helper-text");
  if (helper) helper.textContent = message;
}

export function clearAllHelperErrors() {
  document.querySelectorAll(".helper-text").forEach(h => {
    h.textContent = "";
  });
}