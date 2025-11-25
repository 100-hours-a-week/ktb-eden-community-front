const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".sidebar-toggle");
const overlay = document.querySelector(".sidebar-overlay");

toggleBtn.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("open");

  // 모바일일 때만 오버레이 보이도록
  if (window.innerWidth < 768) {
    overlay.classList.toggle("show", isOpen);
  }
});

// 모바일에서만 오버레이 클릭 시 닫기
overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
});

// 창 크기 변경 시 처리
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    overlay.classList.remove("show");
  }
});
