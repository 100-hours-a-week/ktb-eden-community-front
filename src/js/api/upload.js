import { postRequest } from "./api.js";
import { API } from "./apiEndpoints.js";


export async function uploadProfileImage(file) {
  const formData = new FormData();
  formData.append("file", file);

  const result = await postRequest(API.FILES.PROFILE, formData, true);
  return result?.data?.url ?? null;
}


export async function uploadBoardImage(file) {
  const formData = new FormData();
  formData.append("file", file);

  const result = await postRequest(API.FILES.BOARD, formData, true);
  return result.data?.url ?? null;
}