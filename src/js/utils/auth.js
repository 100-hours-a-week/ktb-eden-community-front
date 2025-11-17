export function requireLogin() {
  const token = localStorage.getItem("accessToken");

  if (!token || token === null) {
    alert("로그인이 필요한 기능입니다.");
    location.href = "./login.html";
    return false;
  }

  return true;
}