// 임시

// DM 아이템 클릭 → Room으로 이동
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".dm-item");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const nameEl = item.querySelector(".dm-name");
      if (!nameEl) return;

      const nickname = nameEl.textContent.trim();

      location.href = `./messageRoom.html?user=${encodeURIComponent(nickname)}`;
    });
  });
});
