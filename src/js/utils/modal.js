export function openModal({ title, message, onConfirm }) {
  const modal = document.getElementById("modal");
  const titleEl = document.getElementById("modal-title");
  const descEl = document.getElementById("modal-desc");
  const cancelBtn = document.getElementById("modal-cancel");
  const confirmBtn = document.getElementById("modal-confirm");

  titleEl.textContent = title;
  descEl.textContent = message;

  modal.style.display = "flex";

  function close() {
    modal.style.display = "none";
    confirmBtn.removeEventListener("click", confirmHandler);
  }

  cancelBtn.onclick = close;

  function confirmHandler() {
    onConfirm();
    close();
  }

  confirmBtn.addEventListener("click", confirmHandler);
}
