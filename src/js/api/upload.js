import { postRequest } from "./api.js";
import { API } from "./apiEndpoints.js";


export async function uploadProfileImage(file) {
  const formData = new FormData();
  formData.append("file", file);

  const result = await postRequest(API.UPLOAD.PROFILE, formData, true);
  return result?.data?.filePath ?? null;
}


export async function uploadBoardImage(file) {
  const formData = new FormData();
  formData.append("file", file);

  const result = await postRequest(API.UPLOAD.BOARD, formData, true);
  return result.data?.filePath ?? null;
}