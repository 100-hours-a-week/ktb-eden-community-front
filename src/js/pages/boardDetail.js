import { getRequest, postRequest,deleteRequest,patchRequest} from "../api/api.js";
import { formatDate } from "../utils/dateUtil.js";
import { getUserIdFromToken } from "../utils/jwtUtil.js";
import { openModal } from "../utils/modal.js";

const myUserId = getUserIdFromToken();
const urlParams = new URLSearchParams(location.search);
const boardId = urlParams.get("id");

const API_URL = `/boards/${boardId}`

const titleEl = document.querySelector(".board-title");
const authorEl = document.querySelector(".author-name");
const authorProfileEl = document.querySelector(".board-header .author-img");
const dateEl = document.querySelector(".board-date");
const boardImgEl = document.querySelector(".board-image");
const contentEl = document.querySelector(".board-text");
const likeEl = document.getElementById("like-count");
const likeBtn = document.querySelector(".like-btn");
const commentCountEl = document.getElementById("comment-count");
const viewEl = document.getElementById("view-count");

const commentList = document.getElementById("comment-list");
const commentInput = document.getElementById("comment-input");
const commentSubmit = document.getElementById("comment-submit");
const commentEditBtn = document.getElementById("comment-submit");
const paginationContainer = document.querySelector(".comment-pagination");

const boardEditBtn = document.querySelector(".board-header .edit-btn");
const boardDeleteBtn = document.querySelector(".board-header .delete-btn");

let editingCommentId = null;
let isLiked = false;

let currentPage = 0;
let totalPages = 1;
const size = 10;

/**
 * 게시글 상세 불러오기
 */
async function loadBoardDetail() {
  try {
    const res = await getRequest(`/boards/${boardId}?page=${currentPage}&size=${size}`, true);

    if (!res.data || !res.data.board) return;

    const b = res.data.board;
    const commentsPage = res.data.comments;

    titleEl.textContent = b.title;
    authorEl.textContent = b.author_nickname;
    authorProfileEl.src = b.author_profile_image ?? "../assets/default-profile.png";
    dateEl.textContent = formatDate(b.updated_date);
    boardImgEl.src = b.image ?? "../assets/dummy-image.png";
    contentEl.textContent = b.content;

    likeEl.textContent = b.like_count;
    commentCountEl.textContent = b.comment_count;
    viewEl.textContent = b.view_count;

    isLiked = b.liked_by_me === true;
    updateLikeButtonUI();

    const isMine = myUserId === Number(b.author_id);
    boardEditBtn.style.display = isMine ? "inline-block" : "none";
    boardDeleteBtn.style.display = isMine ? "inline-block" : "none";

    totalPages = commentsPage.total_pages;

    if (currentPage === 0 && commentsPage.total_pages > 1) {
        currentPage = commentsPage.total_pages - 1;
        return loadCommentPage(currentPage);
    }
    currentPage = commentsPage.page;
    renderComments(commentsPage.content);
    renderPagination(totalPages, currentPage);
  } catch (err) {
    console.error("게시글 상세 불러오기 실패:", err);
  }
}

/**
 * 댓글 렌더링
 */
function renderComments(comments) {
  commentList.innerHTML = "";
  comments.forEach((c) => {
    const isMine = myUserId === Number(c.author_id);

    const item = `
      <article class="comment-item">
        <div class="comment-header">
          <div class="author-info">
            <img src="${c.author_profile_image}" class="author-img">
            <div class="author-text">
              <span class="author-name">${c.author_nickname}</span>
              <span class="comment-date">${formatDate(c.updated_date)}</span>
            </div>
          </div>

          ${isMine ? `
            <div class="comment-actions show">
              <button class="edit-btn" data-id="${c.id}">수정</button>
              <button class="delete-btn" data-id="${c.id}">삭제</button>
            </div>
          ` : ""}
        </div>

        <p class="comment-content">${c.content}</p>
      </article>
    `;

    commentList.insertAdjacentHTML("beforeend", item);
  });
}

/**
 * 페이지네이션 렌더링
 */
function renderPagination(totalPages, activePage) {
  paginationContainer.innerHTML = "";

  for (let i = 0; i < totalPages; i++) {
    const btn = document.createElement("button");
    btn.className = "page-btn";
    btn.textContent = i + 1;

    if (i === activePage) btn.classList.add("active");

    btn.addEventListener("click", () => loadCommentPage(i));
    paginationContainer.appendChild(btn);
  }
}

/**
 * 특정 페이지 댓글 요청
 */
async function loadCommentPage(page) {
  try {
    const res = await getRequest(`/boards/${boardId}/comments?page=${page}&size=${size}`);

    console.log(res);

    const commentsPage = res.data;

    currentPage = commentsPage.page;
    totalPages = commentsPage.total_pages;

    renderComments(commentsPage.content);
    renderPagination(totalPages, currentPage);

  } catch (err) {
    console.error("댓글 페이지 로드 실패:", err);
  }
}

/**
 * 댓글 작성, 수정 모드 작성
 */
commentSubmit.addEventListener("click", async () => {
  const content = commentInput.value.trim();
  if (!content) return alert("댓글을 입력하세요!");

  try {

    if (editingCommentId) {
      await patchRequest(API_URL + `/comments/${editingCommentId}`, { content }, true);

      editingCommentId = null;
      commentSubmit.textContent = "댓글 등록";
      commentSubmit.classList.remove("editing");
      commentInput.value = "";

      loadCommentPage(currentPage);
      return;
    }

    await postRequest(API_URL + `/comments`, {boardId, content}, true);
    commentCountEl.textContent = Number(commentCountEl.textContent) + 1;

    commentInput.value = "";
    const res = await getRequest(`/boards/${boardId}/comments?page=0&size=${size}`);
    const lastPage = res.data.total_pages - 1;

    currentPage = lastPage;
    await loadCommentPage(lastPage);

    setTimeout(() => {
      const lastComment = document.querySelector(".comment-item:last-child");
      if (lastComment) {
        lastComment.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 50);

  } catch (err) {
    console.error("댓글 등록 실패:", err);
  }
});

/**
 * 댓글 삭제(모달)
 */
commentList.addEventListener("click", (e) => {
  const btn = e.target.closest(".delete-btn");
  if (!btn) return;

  const commentId = btn.dataset.id;

  openModal({
    title: "댓글을 삭제하시겠습니까?",
    message: "삭제한 내용은 복구할 수 없습니다.",
    onConfirm: async () => {
      try {
        await deleteRequest(API_URL + `/comments/${commentId}`, true);
        commentCountEl.textContent = Number(commentCountEl.textContent) - 1;
        loadCommentPage(currentPage);
      } catch (err) {
        console.error("댓글 삭제 실패:", err);
      }
    }
  });
});

/**
 * 게시글 수정 버튼
 */
boardEditBtn.addEventListener("click", () => {
  location.href = `./boardUpdate.html?id=${boardId}`;
});

/**
 * 게시글 삭제 버튼(모달)
 */
boardDeleteBtn.addEventListener("click", () => {
  openModal({
    title: "게시글을 삭제하시겠습니까?",
    message: "삭제한 내용은 복구할 수 없습니다.",
    onConfirm: async () => {
      try {
        await deleteRequest(API_URL, true);
        location.href = "./boardList.html";
      } catch (err) {
        console.error("게시글 삭제 실패:", err);
      }
    }
  });
});

/**
 * 댓글 수정
 */
commentList.addEventListener("click", (e) => {
  const btn = e.target.closest(".edit-btn");
  if (!btn) return;

  const commentId = btn.dataset.id;
  editingCommentId = commentId;

  const commentEl = btn.closest(".comment-item");
  const content = commentEl.querySelector(".comment-content").textContent;

  commentInput.value = content;

  commentSubmit.textContent = "댓글 수정";
  commentSubmit.classList.add("editing");

  commentInput.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(() => commentInput.focus(), 200);

});

/**
 * 좋아요 버튼 UI 수정
 */
function updateLikeButtonUI() {
  if (isLiked) {
    likeBtn.style.backgroundColor = "#ACA0EB";
  } else {
    likeBtn.style.backgroundColor = "#D9D9D9";
  }
}

/**
 * 좋아요 기능 토글
 */
likeBtn.addEventListener("click", async () => {
  try {
    if (!isLiked) {
      await postRequest(`/boards/${boardId}/like`, {}, true);
      likeEl.textContent = Number(likeEl.textContent) + 1;
      isLiked = true;
    } else {
      await deleteRequest(`/boards/${boardId}/like`, true);
      likeEl.textContent = Number(likeEl.textContent) - 1;
      isLiked = false;
    }

    updateLikeButtonUI();
  } catch (err) {
    console.error("좋아요 처리 실패:", err);
  }
});

loadBoardDetail();