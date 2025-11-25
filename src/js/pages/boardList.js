import { getRequest } from "../api/api.js";
import { formatDate } from "../utils/dateUtil.js";
import { requireLogin } from "../utils/auth.js";

const API_URL = "/boards"

const boardListContainer = document.querySelector(".board-list");
const categoryTitleEl = document.getElementById("category-name");

const urlParams = new URLSearchParams(location.search);
const category = urlParams.get("category") || "all";

let cursorId = null;
let isLoading = false;
let hasNext = true;


const categoryMap = {
  all: "📋 전체 게시판",
  popular: "🔥 인기 게시글",
  random: "😁 아무글",
  it: "👨🏻‍💻 IT",
  career: "🐣 취준생",
  fitness: "💪 운동",
  food: "🍕 쩝쩝박사",
  following: "👀 구독 게시글",
  liked: "🚀 좋아요 한 게시글",
  notice: "📢 공지사항",
  event: "🎉 이벤트",
  qna: "❓ Q&A",
};

categoryTitleEl.textContent = categoryMap[category] ?? "📋 전체 게시판";

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
  let html = "";
  boards.forEach((board) => {
    const popularClass = board.view_count > 100 ? "popular" : ""; 
    html += `
      <article class="board-item ${popularClass}" data-id="${board.id}">
        <h2 class="board-title">${board.title}</h2>
        
        <div class="content">
          <span>${board.content}</span>
        </div>
        
        <div class="board-meta">
          <span>좋아요 ${board.like_count}</span>
          <span>댓글 ${board.comment_count}</span>
          <span>조회수 ${board.view_count}</span>
        </div>
        
        <div class="board-author">
          <img src="${board.author_profile_image ?? "../assets/default-profile.png"}" class="author-img">
          <span class="author-name">${board.author_nickname}</span>
          <span class="board-date">${formatDate(board.created_date)}</span>
        </div>
      </article>
    `;
  });
  boardListContainer.insertAdjacentHTML("beforeend", html);
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

  const categoryParam = `category=${category}`;

  try {
    const baseUrl = cursorId
      ? `${API_URL}?${categoryParam}&cursorId=${cursorId}&pageSize=15`
      : `${API_URL}?${categoryParam}&pageSize=15`;
    const res = await getRequest(baseUrl, true);

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
