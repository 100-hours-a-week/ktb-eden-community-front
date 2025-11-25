export function openModal({ title, message, onConfirm, input = false, defaultValue = "",  }) {
  const modal = document.getElementById("modal");
  const titleEl = document.getElementById("modal-title");
  const descEl = document.getElementById("modal-desc");
  const cancelBtn = document.getElementById("modal-cancel");
  const confirmBtn = document.getElementById("modal-confirm");

  titleEl.textContent = title;
  descEl.textContent = message;

  let inputEl = modal.querySelector(".modal-input");
  if (inputEl) inputEl.remove();

  // 입력창 필요할 때만 추가
  if (input) {
    inputEl = document.createElement("input");
    inputEl.className = "modal-input";
    inputEl.type = "text";
    inputEl.value = defaultValue;

    descEl.insertAdjacentElement("afterend", inputEl);
  }

  modal.classList.add("show");

  function close() {
    modal.classList.remove("show");
    confirmBtn.removeEventListener("click", confirmHandler);
  }

  cancelBtn.onclick = close;

  function confirmHandler() {
    const value = input ? inputEl.value.trim() : null;
    onConfirm(value);
    close();
  }

  confirmBtn.addEventListener("click", confirmHandler);
}


export function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast-message show";
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}