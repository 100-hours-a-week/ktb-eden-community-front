import { openModal } from "./uiUtil.js";

export function requireLogin() {
  const token = localStorage.getItem("accessToken");

  if (!token || token === null) {
    openModal({
      title: "로그인이 필요한 기능입니다.",
      message: "로그인 하러 가시겠습니까?",
      onConfirm: async () => {
        location.href = "./login.html"
      }
    })
    return false;
  }
  return true;
}