import { deleteRequest, getRequest, patchRequest } from "../api/api.js";
import { getUserIdFromToken } from "../utils/jwtUtil.js";
import { openModal } from "../utils/modal.js";
import { uploadProfileImage } from "../api/upload.js";

const API_URL = "/users";

const profilePreview = document.getElementById("profile-preview");
const profileUpload = document.getElementById("profile-upload");
const nicknameInput = document.getElementById("nickname");
const emailDisplay = document.querySelector(".email-display");
const helperText = document.querySelector(".helper-text");

const updateBtn = document.getElementById("update-preview");
const saveBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("delete-btn");

let selectedImageFile = null;

/**
 * 사용자 정보 로드
 */
async function loadUserInfo() {
  try {
    const res = await getRequest(API_URL, true);
    const user = res.data;

    emailDisplay.textContent = user.email;
    nicknameInput.value = user.nickname;


    if (user.profile_image) {
      profilePreview.src = user.profile_image;
    } else {
      profilePreview.src = "../assets/default-profile.png";
    }
  } catch (err) {
    console.error("사용자 정보 불러오기 실패:", err);
  }
}
loadUserInfo();


/**
 * 프로필 이미지 선택 시 미리보기 적용
 */
profileUpload.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  selectedImageFile = file;

  const reader = new FileReader();
  reader.onload = function (event) {
    profilePreview.src = event.target.result;
  };
  reader.readAsDataURL(file);
});

// 클릭하면 업로드창 열기
profilePreview.addEventListener("click", () => profileUpload.click());


/**
 * 프로필 수정 요청
 */
updateBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const nickname = nicknameInput.value.trim();
  if (!validateNickname(nickname)) return;

  let imagePath;
  if(selectedImageFile) {
    imagePath = await uploadProfileImage(selectedImageFile);
  }

  const body = {nickname, profile_image: imagePath};

  try {
    await patchRequest(API_URL, body, true, false);
    showToast("수정 완료되었습니다!");
  } catch (err) {
    handleError(err);
  }
});


/**
 * 회원 탈퇴 요청
 */
deleteBtn.addEventListener("click", () => {
  openModal({
    title: "회원 탈퇴하시겠습니까?",
    message: "탈퇴 후 계정 복구는 불가능합니다.",
    onConfirm: async () => {
      try {
        const res = await deleteRequest("/users", true);

        if (res.message === "user_deleted_success") {
          alert("회원 탈퇴가 완료되었습니다.");
          localStorage.removeItem("accessToken");
          location.href = "./login.html";
        }

      } catch (err) {
        alert("회원탈퇴 중 오류가 발생했습니다.");
      }
  }});
});


/**
 * 닉네임 검증
 */
function validateNickname(nickname) {
  if (!nickname) {
    helperText.textContent = "닉네임을 입력해주세요.";
    return false;
  }

  if (nickname.length > 10) {
    helperText.textContent = "최대 10자까지 작성 가능합니다.";
    return false;
  }

  helperText.textContent = "";
  return true;
}

/**
 * 서버 에러코드 → 메시지 매핑
 */
const errorMessageMap = {
  nickname_duplicate: "중복된 닉네임입니다.",
  nickname_required: "닉네임을 입력해주세요.",
  nickname_too_long: "최대 10자까지 작성 가능합니다.",
  user_not_found: "존재하지 않는 회원입니다.",
};


/**
 * 에러 출력 처리
 */
function handleError(err) {
  const serverCode = err.message;
  if (errorMessageMap[serverCode]) {
    helperText.textContent = errorMessageMap[serverCode];
  } else {
    helperText.textContent = "오류가 발생했습니다.";
  }
}

/**
 * 토스트 메시지 표시
 */
function showToast(message) {
  let toast = document.createElement("div");
  toast.className = "toast-message show";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

