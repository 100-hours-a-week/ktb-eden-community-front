export async function uploadProfileImage(file) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await fetch("http://localhost:8080/api/v1/upload/profile", {
      method: "POST",
      body: formData
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message || "image_upload_failed");
    }

    return result.data?.filePath ?? null;

  } catch (err) {
    console.error("이미지 업로드 실패:", err);
    return null;
  }
}

export async function uploadBoardImage(file) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await fetch("http://localhost:8080/api/v1/upload/board", {
      method: "POST",
      body: formData
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message || "image_upload_failed");
    }

    return result.data?.filePath ?? null;

  } catch (err) {
    console.error("게시글 이미지 업로드 실패:", err);
    return null;
  }
}