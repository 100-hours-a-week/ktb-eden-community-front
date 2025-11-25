import { getRequest, patchRequest } from "../api/api.js";
import { uploadBoardImage } from "../api/upload.js";

const urlParams = new URLSearchParams(location.search);
const boardId = urlParams.get("id");
const API_URL = `/boards/${boardId}`;

const form = document.getElementById("board-form");

const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const imageInput = document.getElementById("image");

const titleHelper = titleInput.parentElement.querySelector(".helper-text");
const contentHelper = contentInput.parentElement.querySelector(".helper-text");

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
 * helper-text 초기화
 */
function clearErrors() {
  if (titleHelper) titleHelper.textContent = "";
  if (contentHelper) contentHelper.textContent = "";
}

/**
 * 기존 게시글 로드
 */
async function loadBoard() {
  try {
    const res = await getRequest(API_URL, true);

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

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (!title) {
    titleHelper.textContent = "제목을 입력해주세요.";
    return;
  }
  if (!content) {
    contentHelper.textContent = "내용을 입력해주세요.";
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

    const res = await patchRequest(API_URL, body, true);

    if (res.message === "board_update_success") {
      alert("게시글이 수정되었습니다!");
      location.href = `./boardDetail.html?id=${boardId}`;
    } else {
      alert("게시글 수정에 실패했습니다.");
    }

  } catch (err) {
    console.error("게시글 수정 실패:", err);
    alert("수정 중 오류가 발생했습니다.");
  }
});

// 페이지 로딩 시 기존 게시글 정보 표시
loadBoard();