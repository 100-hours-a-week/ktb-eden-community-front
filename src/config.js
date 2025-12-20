const ENV = window.location.hostname === "localhost" ? "development" : "production";

const API_BASE_URL =
    ENV === "development"
        ? "http://localhost:8080/api/v1"
        : "https://api.your-domain.com/api/v1";

export { API_BASE_URL };