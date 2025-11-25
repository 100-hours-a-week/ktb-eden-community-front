import { postRequest } from "../api/api.js";
import { uploadBoardImage } from "../api/upload.js";
import { errorMessageMap } from "../errors/errorMessages.js";
const API_URL = "/boards";


/**
 * 입력 필드의 에러 메시지 표시
 */
function showError(input, message) {
  const helper = input.parentElement.querySelector(".helper-text");
  if (helper) helper.textContent = message;
}

/**
 * 모든 에러 메시지 초기화
 */
function clearErrors() {
  document.querySelectorAll(".helper-text").forEach((h) => (h.textContent = ""));
}

document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("back-btn");
  const form = document.getElementById("board-form");

  const titleInput = document.getElementById("title");
  const contentInput = document.getElementById("content");
  const imageInput = document.getElementById("image");
  let previewImg = document.querySelector("#image-preview");

  // 미리보기
  if (!previewImg) {
    previewImg = document.createElement("img");
    previewImg.id = "image-preview";
    previewImg.style.width = "300px";
    previewImg.style.maxHeight = "300px";
    previewImg.style.objectFit = "contain";
    previewImg.style.marginTop = "10px";
    previewImg.style.display = "none";

    imageInput.insertAdjacentElement("afterend", previewImg);
  }

  let selectedImageFile = null;

  /**
   * 이미지 선택 시 미리보기
   */
  imageInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    selectedImageFile = file;

    const reader = new FileReader();
    reader.onload = function (event) {
      previewImg.src = event.target.result;
      previewImg.style.display = "block";
    };
    reader.readAsDataURL(file);
  });


  // 폼 제출
  form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (!title) return showError(titleInput, errorMessageMap.title_required);
  if (!content) return showError(contentInput, errorMessageMap.content_required);

  let imageUrl = null;

  // 이미지 선택 시 먼저 업로드
  if (imageInput.files.length > 0) {
    const file = imageInput.files[0];
    imageUrl = await uploadBoardImage(file);

    if (!imageUrl) {
      return alert("이미지 업로드 실패. 다시 시도해주세요.");
    }
  }

  const body = {
      title,
      content,
      image: imageUrl
    };

  try {
      const res = await postRequest(API_URL, body, true);
      console.log(res);

      if (res.message === "board_created_success") {
        location.href = "./boardList.html";
      }
    } catch (err) {
      console.error("게시글 등록 실패:", err);
      alert("작성 중 오류가 발생했습니다.");
    }
  });
});

