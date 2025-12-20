export function getInputByErrorCode(code, inputs) {
    if (!code) return null;

    // 이메일 관련 오류
    if (["AU001", "AU010", "AU011"].includes(code)) return inputs.email;

    // 비밀번호
    if (["AU012", "AU016"].includes(code)) return inputs.password;

    // 비밀번호 확인
    if (["AU002", "AU013"].includes(code)) return inputs.passwordConfirm;

    // 닉네임
    if (["AU014", "AU017", "AU018", "AU003"].includes(code)) return inputs.nickname;

    return null;
}
