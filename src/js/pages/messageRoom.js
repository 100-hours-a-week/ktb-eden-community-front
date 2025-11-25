// 임시

// URL 파라미터에서 user 가져오기
const params = new URLSearchParams(location.search);
const targetUser = params.get("user");

if (targetUser) {
  const nameArea = document.querySelector(".dm-room-name");
  if (nameArea) {
    nameArea.textContent = targetUser;
  }
}