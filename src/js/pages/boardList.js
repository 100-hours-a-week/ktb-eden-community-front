import { getRequest } from "../api/api.js";
import { formatDate } from "../utils/dateUtil.js";
import { requireLogin } from "../utils/auth.js";

const API_URL = "/boards"

const boardListContainer = document.querySelector(".board-list");

const createBtn = document.querySelector(".create-btn");
    createBtn.addEventListener("click", () => {
      if(!requireLogin()) return;
      location.href = "./boardCreate.html";
});

let cursorId = null;
let isLoading = false;
let hasNext = true;

document.addEventListener("DOMContentLoaded", () => {
    boardListContainer.innerHTML = "";
    loadMoreBoards()
});

/**
 * 게시글 리스트 DOM 추가
 */
function appendBoardItems(boards) {
  boards.forEach((board) => {
    const item = `
      <article class="board-item" data-id="${board.id}">
        <h2 class="board-title">${board.title}</h2>

        <div class="board-meta">
          <span>좋아요 ${board.like_count}</span>
          <span>댓글 ${board.comment_count}</span>
          <span>조회수 ${board.view_count}</span>
          <span class="board-date">${formatDate(board.created_date)}</span>
        </div>

        <div class="board-author">
          <img src="${board.author_profile_image ?? "../assets/default-profile.png"}" class="author-img">
          <span class="author-name">${board.author_nickname}</span>
        </div>
      </article>
    `;
    boardListContainer.insertAdjacentHTML("beforeend", item);
  });
}

// 게시글 상세 이동
boardListContainer.addEventListener("click", (e) => {
  const item = e.target.closest(".board-item");
  if (!item) return;

  const boardId = item.dataset.id;
  location.href = `./boardDetail.html?id=${boardId}`;
});

/**
 * 게시글 불러오기 (무한스크롤)
 */
async function loadMoreBoards() {
  if (isLoading) return;
  isLoading = true;

  try {
    const params = cursorId ? `?cursorId=${cursorId}` : "";
    const res = await getRequest(`${API_URL}${params}`, true);

    if (res.message !== "board_list_success") {
      console.error("게시글 로드 실패:", res);
      return;
    }

    const boards = res.data.content;
    hasNext = res.data.has_next;
    cursorId = res.data.next_cursor_id;
    console.log(res);

    appendBoardItems(boards);

    if (!hasNext) {
      observer.unobserve(observerTarget);
      observerTarget.innerHTML = `
        <div class="end-message">📌 마지막 게시글입니다.</div>
        `;
    }

  } catch (err) {
    console.error("게시글 목록 로드 오류:", err);
  }

  isLoading = false;
}


/**
 * 무한스크롤 옵저버
 */
const observerTarget = document.createElement("div");
observerTarget.classList.add("scroll-observer");
boardListContainer.after(observerTarget);

/**
 * 무한스크롤
 */
const observer = new IntersectionObserver(async ([entry]) => {
  if (entry.isIntersecting && hasNext && !isLoading) {
    await loadMoreBoards();
  }
}, { threshold: 0.8 });

observer.observe(observerTarget);
