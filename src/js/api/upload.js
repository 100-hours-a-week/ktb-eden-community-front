import { postRequest } from "./api.js";

const API_URL = "/upload";

export async function uploadProfileImage(file) {
  const formData = new FormData();
  formData.append("file", file);

  const result = await postRequest(API_URL + "/profile", formData, true);
  return result?.data?.filePath ?? null;
}


export async function uploadBoardImage(file) {
  const formData = new FormData();
  formData.append("file", file);

  const result = await postRequest(API_URL + "/board", formData, true);
  return result.data?.filePath ?? null;
}