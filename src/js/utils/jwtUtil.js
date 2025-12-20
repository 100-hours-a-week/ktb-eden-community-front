export function getUserIdFromToken() {
  const token = localStorage.getItem("accessToken");
  if (!token) return null;

  try {
    const payload = token.split(".")[1];
    const decoded = JSON.parse(atob(payload));
    return decoded.sub ? Number(decoded.sub) : null; 
  } catch (e) {
    console.error("AT decode 실패:", e);
    return null;
  }
}