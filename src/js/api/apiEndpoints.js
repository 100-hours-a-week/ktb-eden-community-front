export const API = {
    AUTH: {
        LOGIN: "/auth/login",
        LOGOUT: "/auth/logout",
        SIGNUP: "/auth/signup",
        REFRESH: "/auth/refresh",
    },
    USERS: {
        ME: "/users",
        PASSWORD: "/users/password"
    },
    BOARDS: {
        LIST: (cursorId = null, pageSize = 15) =>
            cursorId
            ? `/boards?cursorId=${cursorId}&pageSize=${pageSize}`
            : `/boards?pageSize=${pageSize}`,

        DETAIL: (boardId) => `/boards/${boardId}`,

        COMMENTS: (boardId, commentId = "") => 
            commentId
            ? `/boards/${boardId}/comments/${commentId}`
            : `/boards/${boardId}/comments`,

            LIKE: (boardId) => `/boards/${boardId}/like`,
    },
    UPLOAD: {
        PROFILE: "/upload/profile",
        BOARD: "/upload/board"
    }
};
