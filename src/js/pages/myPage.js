import { deleteRequest, getRequest, patchRequest } from "../api/api.js";
import { openModal, showToast } from "../utils/uiUtil.js";
import { API } from "../api/apiEndpoints.js";


const profileImage = document.getElementById("profile-img");
const nicknameInput = document.getElementById("nickname");
const helperText = document.querySelector(".helper-text");

const deleteBtn = document.getElementById("delete-btn");
const editBtn = document.getElementById("edit-intro-btn");

let selectedImageFile = null;

/**
 * 사용자 정보 로드
 */
async function loadUserInfo() {
  try {
    const res = await getRequest(API.USERS.ME, true);
    const user = res.data;

    nicknameInput.value = user.nickname;


    if (user.profile_image) {
      profileImage.src = user.profile_image;
    } else {
      profileImage.src = "../assets/default-profile.png";
    }
  } catch (err) {
    console.error("사용자 정보 불러오기 실패:", err);
  }
}

/**
 * 한줄소개 수정 (미구현)
 */
editBtn.addEventListener("click", async (e) => {
  openModal({
    title: "한줄소개 수정",
    message: "새로운 소개를 입력하세요",
    input: true,
    defaultValue: "안녕하세요 :) 반갑습니다!",
    onConfirm: async (value) => {
      if (!value) return showToast("값을 입력하세요");

      try {
        await patchRequest("/user/intro", { intro: value }, true);
        nicknameInput.value = value;
        showToast("한줄소개가 수정되었습니다!");
      }
      catch (e) {
        showToast("수정 실패");
      }
    }
  })
}
);

loadUserInfo();
