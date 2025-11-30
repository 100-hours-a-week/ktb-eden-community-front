import { deleteRequest, getRequest, patchRequest } from "../api/api.js";
import { openModal, showToast } from "../utils/uiUtil.js";
import { uploadProfileImage } from "../api/upload.js";
import { errorCodeMap } from "../errors/errorMessages.js";
import { API } from "../api/apiEndpoints.js";
import { handleServerError, showError } from "../errors/errorHandlers.js";

const profilePreview = document.getElementById("profile-preview");
const profileUpload = document.getElementById("profile-upload");
const nicknameInput = document.getElementById("nickname");
const emailDisplay = document.querySelector(".email-display");
const helperText = document.querySelector(".helper-text");

const updateBtn = document.getElementById("update-preview");
const saveBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("delete-btn");

let selectedImageFile = null;

const errorInputMap = {
  AU003: nicknameInput, // 닉네임 중복
  AU014: nicknameInput, // 닉네임 비어있음
  AU017: nicknameInput, // 공백 포함
  AU018: nicknameInput, // 길이 제한
};

/**
 * 사용자 정보 로드
 */
async function loadUserInfo() {
  try {
    const res = await getRequest(API.USERS.ME, true);
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
    await patchRequest(API.USERS.ME, body, true, false);
    showToast("수정 완료되었습니다!");
  } catch (err) {
    const code = err.code || err.message;
    handleServerError(code, errorInputMap, showError);
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
    showError(nicknameInput, errorCodeMap.AU014);
    return false;
  }
  if (nickname.includes(" ")) {
    showError(nicknameInput, errorCodeMap.AU017);
    return false;
  }
  if (nickname.length > 10) {
    showError(nicknameInput, errorCodeMap.AU018);
    return false;
  }
  showError(nicknameInput, "");
  return true;
}

/**
 * 실시간 닉네임 검사
 */
nicknameInput.addEventListener("input", () => {
  validateNickname(nicknameInput.value.trim());
});