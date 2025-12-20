import { getRequest, patchRequest } from "../api/api.js";
import { uploadBoardImage } from "../api/upload.js";
import { API } from "../api/apiEndpoints.js";
import { showError, clearAllHelperErrors } from "../errors/errorHandlers.js";
import { errorCodeMap } from "../errors/errorMessages.js";

const urlParams = new URLSearchParams(location.search);
const boardId = urlParams.get("id");

const form = document.getElementById("board-form");

const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const imageInput = document.getElementById("image");

let previewImg = document.querySelector("#image-preview");
if (!previewImg) {
  previewImg = document.createElement("img");
  previewImg.id = "image-preview";
  previewImg.style.width = "300px";
  previewImg.style.maxHeight = "300px";
  previewImg.style.objectFit = "contain";
  previewImg.style.marginTop = "10px";
  imageInput.insertAdjacentElement("afterend", previewImg);
}

let currentImageUrl = null;
let selectedImageFile = null;


/**
 * 기존 게시글 로드
 */
async function loadBoard() {
  try {
    const res = await getRequest(API.BOARDS.DETAIL(boardId), true);

    if (!res.data || !res.data.board) {
      alert("게시글 정보를 불러올 수 없습니다.");
      return;
    }

    const b = res.data.board;

    titleInput.value = b.title;
    contentInput.value = b.content;
    currentImageUrl = b.image;
    if (currentImageUrl) {
      previewImg.src = currentImageUrl;
      previewImg.style.display = "block";
    } else {
      previewImg.style.display = "none";
    }


  } catch (err) {
    console.error("게시글 불러오기 실패:", err);
    alert("게시글 정보를 가져오는 데 실패했습니다.");
  }
}

/**
 * 이미지 파일 선택 시 미리보기
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


/**
 * 게시글 수정 제출
 */
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  clearAllHelperErrors();

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (!title) {
    showError(titleInput, errorCodeMap.B003);
    return;
  }
  if (!content) {
    showError(contentInput, errorCodeMap.B004);
    return;
  }

  let imageUrlToSend = currentImageUrl;

  if (selectedImageFile) {
    const uploadedUrl = await uploadBoardImage(selectedImageFile);
    if (uploadedUrl) imageUrlToSend = uploadedUrl;
  }

  try {
    const body = {
      title,
      content,
      image: imageUrlToSend,
    };

    const res = await patchRequest(API.BOARDS.DETAIL(boardId), body, true);

    if (res.message === "board_update_success") {
      alert("게시글이 수정되었습니다!");
      location.href = `./boardDetail.html?id=${boardId}`;
    } else {
      alert("게시글 수정에 실패했습니다.");
    }

  } catch (err) {
    const serverCode = err.message;
    if (serverCode && errorCodeMap[serverCode]) {
      showError(titleInput, errorCodeMap[serverCode]); 
      return;
    }
    alert("수정 중 오류가 발생했습니다.");
  }
});

// 페이지 로딩 시 기존 게시글 정보 표시
loadBoard();