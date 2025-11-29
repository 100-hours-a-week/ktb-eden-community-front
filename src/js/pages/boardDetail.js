import { getRequest, postRequest,deleteRequest,patchRequest} from "../api/api.js";
import { requireLogin } from "../utils/auth.js";
import { formatDate } from "../utils/dateUtil.js";
import { getUserIdFromToken } from "../utils/jwtUtil.js";
import { openModal } from "../utils/uiUtil.js";
import { API } from "../api/apiEndpoints.js";

const myUserId = getUserIdFromToken();
const urlParams = new URLSearchParams(location.search);
const boardId = urlParams.get("id");

const titleEl = document.querySelector(".board-title");
const authorEl = document.querySelector(".author-name");
const authorProfileEl = document.querySelector(".board-header .author-img");
const dateEl = document.querySelector(".board-date");
const boardImgEl = document.querySelector(".board-image");
const contentEl = document.querySelector(".board-text");
const likeEl = document.getElementById("like-count");
const likeBtn = document.querySelector(".like-icon");
const commentCountEl = document.getElementById("comment-count");
const viewEl = document.getElementById("view-count");

const commentList = document.getElementById("comment-list");
const commentInput = document.getElementById("comment-input");
const commentSubmit = document.getElementById("comment-submit");
const paginationContainer = document.querySelector(".comment-pagination");

const ownerActions = document.querySelector(".action-btns.only-owner");
const ownerActionComment = document.querySelector(".comment-actions.only-owner");

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
    const res = await getRequest(`${API.BOARDS.DETAIL(boardId)}?page=${currentPage}&size=${size}`, true);

    if (!res.data || !res.data.board) return;

    const b = res.data.board;
    const commentsPage = res.data.comments;
    let movedToLastPageOne = false;

    titleEl.textContent = b.title;
    authorEl.textContent = b.author_nickname;
    authorProfileEl.src = b.author_profile_image ?? "../assets/default-profile.png";
    dateEl.textContent = formatDate(b.updated_date);
    if (b.image) {
      boardImgEl.src = b.image;
      boardImgEl.alt = "게시글 이미지";
      boardImgEl.classList.remove("hidden");
    } else {
      boardImgEl.classList.add("hidden");
      boardImgEl.removeAttribute("alt");
      boardImgEl.removeAttribute("src");
    }
    contentEl.textContent = b.content;

    likeEl.textContent = b.like_count;
    commentCountEl.textContent = b.comment_count;
    viewEl.textContent = b.view_count;

    isLiked = b.liked_by_me === true;
    updateLikeButtonUI(false);

    const isMine = myUserId === Number(b.author_id);

    if(isMine) {
      ownerActions.classList.remove("hidden");
    }

    totalPages = commentsPage.total_pages;

    if (!movedToLastPageOne && currentPage === 0 && commentsPage.total_pages > 1) {
      movedToLastPageOne = true;
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

commentList.addEventListener("click", (e) => {
  const actionBtn = e.target.closest(".comment-actions button");
  if (!actionBtn) return;

  const commentId = actionBtn.dataset.id;
  const isEdit = actionBtn.classList.contains("edit-btn");
  const isDelete = actionBtn.classList.contains("delete-btn");

  // 댓글 수정
  if (isEdit) {
    editingCommentId = commentId;

    const commentEl = actionBtn.closest(".comment-item");
    const content = commentEl.querySelector(".comment-content").textContent;

    commentInput.value = content;

    commentSubmit.textContent = "댓글 수정";
    commentSubmit.classList.add("editing");

    commentInput.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => commentInput.focus(), 200);

    return;
  }

  // 댓글 삭제 (모달)
  if (isDelete) {
    openModal({
      title: "댓글을 삭제하시겠습니까?",
      message: "삭제한 내용은 복구할 수 없습니다.",
      onConfirm: async () => {
        try {
          await deleteRequest(API.BOARDS.COMMENTS(boardId, commentId), true);
          commentCountEl.textContent = Number(commentCountEl.textContent) - 1;
          loadCommentPage(currentPage);
        } catch (err) {
          console.error("댓글 삭제 실패:", err);
        }
      }
    });
  }
});

/**
 * 댓글 렌더링
 */
function renderComments(comments) {
  const fragment = document.createDocumentFragment();
  commentList.innerHTML = "";

  const commentsHtml = comments.map(
    (c) => {
      const isMine = myUserId === Number(c.author_id);
      return  `
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
                <div class="comment-actions only-owner">
                  <button class="edit-btn" data-id="${c.id}">수정</button>
                  <button class="delete-btn" data-id="${c.id}">삭제</button>
                </div>
              ` : ""}
            </div>

            <p class="comment-content">${c.content}</p>
          </article>
        `
    })
    .join("");

  const temp = document.createElement("div");
  temp.innerHTML = commentsHtml;

  while (temp.firstChild) {
    fragment.appendChild(temp.firstChild);
  }
  commentList.appendChild(fragment);
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
    const res = await getRequest(`${API.BOARDS.COMMENTS(boardId)}?page=${page}&size=${size}`);

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
  try {
    if(!requireLogin()) return;
    const content = commentInput.value.trim();
    if (!content) return alert("댓글을 입력하세요!");
    if (editingCommentId) {
      await patchRequest(API.BOARDS.COMMENTS(boardId, editingCommentId), { content }, true);

      editingCommentId = null;
      commentSubmit.textContent = "댓글 등록";
      commentSubmit.classList.remove("editing");
      commentInput.value = "";

      loadCommentPage(currentPage);
      return;
    }

    await postRequest(API.BOARDS.COMMENTS(boardId), {boardId, content}, true);
    commentCountEl.textContent = Number(commentCountEl.textContent) + 1;

    commentInput.value = "";
    const res = await getRequest(`${API.BOARDS.COMMENTS(boardId)}?page=0&size=${size}`);
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
 * 게시글 수정, 삭제 버튼
 */
ownerActions.addEventListener("click", (e) => {
  // 수정
  if(e.target.classList.contains("edit-btn")) {
    location.href = `./boardUpdate.html?id=${boardId}`;
    return;
  }

  // 삭제(모달)
  if(e.target.classList.contains("delete-btn")) {
    openModal({
      title: "게시글을 삭제하시겠습니까?",
      message: "삭제한 내용은 복구할 수 없습니다.",
      onConfirm: async () => {
        try {
          await deleteRequest(API.BOARDS.DETAIL(boardId), true);
          location.href = "./boardList.html";
        } catch (err) {
          console.error("게시글 삭제 실패:", err);
        }
      }
    });
  }
})

/**
 * 좋아요 버튼 UI 수정
 */
function updateLikeButtonUI(animate = false) {
  const like_icon = document.getElementById("like-icon");
  if (isLiked) {
    like_icon.src = "../assets/laptop.png"

    if (animate) {
      like_icon.classList.add("launch");
      setTimeout(() => {
        like_icon.classList.remove("launch");
      }, 900);
    }
  } else {
    like_icon.src = "../assets/flame.png";
  }
}

/**
 * 좋아요 기능 토글
 */
likeBtn.addEventListener("click", async () => {
  try {
    if(!requireLogin()) return;
    if (!isLiked) {
      await postRequest(API.BOARDS.LIKE(boardId), {}, true);
      likeEl.textContent = Number(likeEl.textContent) + 1;
      isLiked = true;
      updateLikeButtonUI(true);
    } else {
      await deleteRequest(API.BOARDS.LIKE(boardId), true);
      likeEl.textContent = Number(likeEl.textContent) - 1;
      isLiked = false;
      updateLikeButtonUI(false);
    }
  } catch (err) {
    console.error("좋아요 처리 실패:", err);
  }
});

loadBoardDetail();