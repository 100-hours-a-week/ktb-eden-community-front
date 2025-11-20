import { errorMessageMap } from "./errorMessages.js";

export function handleServerError(code, errorInputMap, showError) {
  const message = errorMessageMap[code] || "서버 오류가 발생했습니다.";
  const input = errorInputMap[code];

  if (input) showError(input, message);
  else alert(message);
}