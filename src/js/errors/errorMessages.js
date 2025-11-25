
export const emailRegex = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,10}$/;
// 대,소,숫,특 1개씩, 8~20자
export const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}[\]|:;"'<>,.?/~`]).{8,20}$/;


export const errorMessageMap = {

  email_required: "이메일을 입력해주세요.",
  email_duplicate: "중복된 이메일입니다.",
  email_invalid: "올바른 이메일 주소 형식을 입력해주세요.(예:example@example.com, 숫자안됨)",

  nickname_required : "닉네임을 입력해주세요.",
  nickname_duplicate: "이미 사용 중인 닉네임입니다.",
  nickname_max_10: "닉네임은 최대 10자 까지 작성 가능합니다. ",
  nickname_no_space: "띄어쓰기를 없애주세요",

  password_required: "비밀번호를 입력해주세요.",
  password_invalid: "비밀번호 형식이 올바르지 않습니다.", 
  password_mismatch: "비밀번호가 일치하지 않습니다.",
  password_same_as_old: "이전 비밀번호와 동일합니다.",
  password_rule_violation: "대문자, 소문자, 숫자, 특수문자 각각 최소 1개 포함, 8~20자로 입력해주세요.",

  title_required: "제목을 입력해주세요.",
  content_required: "내용을 입력해주세요.",

  internal_server_error: "서버 오류가 발생했습니다."
}