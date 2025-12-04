## 📌 Eden – 커뮤니티 서비스 (Frontend)

> **Vanilla JS + HTML/CSS 기반의 SPA-like 커뮤니티 프론트엔드**<br />
Eden Front는 API 서버와 완전히 분리된 **Pure Vanilla JS 기반 CSR(부분적 SPA)** 구조로 동작하며<br />
게시글 조회, 작성, 수정, 삭제, 좋아요, 댓글 기능을 제공합니다.

## 🚀 프로젝트 소개

Eden 프론트엔드는 **백엔드 REST API와 완전히 분리된 독립적인 UI 레이어**로,
다음과 같은 특징을 가집니다.

+ **Vanilla JS 기반의 라우팅 없는 단일 페이지 구성**
+ Fetch API 기반의 **JWT 인증 흐름 연동**
+ **무한 스크롤 기반 게시글 목록 화면**
+ Figma 기반의 **직접 제작한 UI/UX**
+ 모듈 구조화(JS import)로 유지보수성 강화

## 🗂 프로젝트 구조
<details> <summary>폴더 구조</summary>
  
```
📦src
 ┣ 📂assets
 ┃ ┣ 📂pet
 ┃ ┃ ┗ 📜.svg
 ┃ ┗ 📜.svg
 ┣ 📂components
 ┃ ┣ 📜header.html
 ┃ ┣ 📜modal.html
 ┃ ┗ 📜sidebar.html
 ┣ 📂css
 ┃ ┣ 📜boardCreate-style.css
 ┃ ┣ 📜boardDetail-style.css
 ┃ ┣ 📜boardList-style.css
 ┃ ┣ 📜boardUpdate-style.css
 ┃ ┣ 📜common.css
 ┃ ┣ 📜login-style.css
 ┃ ┣ 📜messageList-style.css
 ┃ ┣ 📜messageRoom-style.css
 ┃ ┣ 📜myPage-style.css
 ┃ ┣ 📜passwordUpadte-style.css
 ┃ ┣ 📜profileUpdate-style.css
 ┃ ┗ 📜signup-style.css
 ┣ 📂js
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜api.js
 ┃ ┃ ┣ 📜apiEndpoints.js
 ┃ ┃ ┣ 📜request.js
 ┃ ┃ ┗ 📜upload.js
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜headerLoader.js
 ┃ ┃ ┣ 📜pets.js
 ┃ ┃ ┗ 📜sidebar.js
 ┃ ┣ 📂errors
 ┃ ┃ ┣ 📜errorHandlers.js
 ┃ ┃ ┗ 📜errorMessages.js
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜boardCreate.js
 ┃ ┃ ┣ 📜boardDetail.js
 ┃ ┃ ┣ 📜boardList.js
 ┃ ┃ ┣ 📜boardUpdate.js
 ┃ ┃ ┣ 📜login.js
 ┃ ┃ ┣ 📜main.js
 ┃ ┃ ┣ 📜messageList.js
 ┃ ┃ ┣ 📜messageRoom.js
 ┃ ┃ ┣ 📜myPage.js
 ┃ ┃ ┣ 📜passwordUpdate.js
 ┃ ┃ ┣ 📜profileUpdate.js
 ┃ ┃ ┗ 📜signup.js
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜auth.js
 ┃ ┃ ┣ 📜dateUtil.js
 ┃ ┃ ┣ 📜errorInputSelector.js
 ┃ ┃ ┣ 📜jwtUtil.js
 ┃ ┃ ┗ 📜uiUtil.js
 ┃ ┗ 📜.DS_Store
 ┣ 📂miniqueest
 ┃ ┣ 📜app.js
 ┃ ┣ 📜math.js
 ┃ ┣ 📜miniquest1-1.js
 ┃ ┣ 📜miniquest1-2.js
 ┃ ┣ 📜miniquest2.js
 ┃ ┣ 📜miniquest3.js
 ┃ ┣ 📜miniquest5.js
 ┃ ┣ 📜miniquest6.js
 ┃ ┣ 📜operations.js
 ┃ ┗ 📜userProfile.js
 ┣ 📂pulbic
 ┃ ┣ 📜boardCreate.html
 ┃ ┣ 📜boardDetail.html
 ┃ ┣ 📜boardList.html
 ┃ ┣ 📜boardUpdate.html
 ┃ ┣ 📜index.html
 ┃ ┣ 📜login.html
 ┃ ┣ 📜messageList.html
 ┃ ┣ 📜messageRoom.html
 ┃ ┣ 📜myPage.html
 ┃ ┣ 📜passwordUpdate.html
 ┃ ┣ 📜profileUpdate.html
 ┃ ┗ 📜signup.html
 ┗ 📜config.js
```
</details>


## 📁 환경 설정
프론트는 별도 빌드 과정 없이 정적 파일 방식

로컬 개발 서버 예시
```
Live Server (VSCode)
```
또는
```
python3 -m http.server
```
정적 파일이므로 Nginx, S3, Vercel에도 쉽게 배포 가능.

## ▶️ 실행 방법
### 0. 백엔드 도메인 연결
`config.js` : API_BASE_URL 설정 필요

### 1. 로컬에서 실행 (VSCode)
```
Live Server → index.html 실행
```
### 2. 수동으로 실행
```
cd eden-community-front
python3 -m http.server 5500
```

브라우저에서:
```
http://localhost:5500
```

## 🎯 주요 기능
## 🔐 1. 회원가입 & 로그인

https://github.com/user-attachments/assets/7009686c-97a5-48f9-a260-3921729ef2f7

+ 이메일 / 비밀번호 / 닉네임 / 프로필 이미지 업로드
+ 로그인 / 로그아웃 / 로그인 유지
+ 실시간 유효성 검사
+ 서버 에러 코드를 기반으로 한 helper-text 표시
+ JWT AccessToken + RefreshToken 흐름 연동<br />
(토큰 만료 시 자동 재발급 처리)


## 📝 2. 게시글 기능
### 🔹 게시글 목록

https://github.com/user-attachments/assets/876c7a88-dfee-4404-8d17-690915151e5c

+ **무한 스크롤(cursor 기반 pagination)**
+ 인기 게시글 강조 스타일(좋아요,조회,댓글 기반)
+ 작성자 정보(닉네임 / 프로필 이미지) 표시
+ 좋아요 여부 표시
+ 스켈레톤 UI 적용 가능 구조

### 🔹 게시글 CRUD

https://github.com/user-attachments/assets/a03ea08c-d2cd-4463-80cf-16982a2a7019

+ 이미지 포함 게시글 작성 가능
+ 작성자 본인 여부 체크 후 UI제어
+ 삭제/수정 시 모달 확인


### 🔹 게시글 상세


https://github.com/user-attachments/assets/95311532-4da5-4b04-afff-4b2849effb61


+ 조회수 자동 증가
+ 좋아요 즉시 반영 UI 애니메이션
+ 작성자일 경우 수정/삭제 버튼 노출
+ 댓글 리스트 순서·페이지네이션과 연동

## 💬 3. 댓글 기능

https://github.com/user-attachments/assets/dec4f805-4f0e-4e98-8720-1119f6a619b4

+ 댓글 작성 / 수정 / 삭제
+ 마지막 페이지 자동 이동(신규 댓글 등록 시)
+ 댓글 작성자 프로필 정보 표시
+ 댓글 수정 시 입력창으로 스크롤 자동 이동

## 🚀 4. 좋아요 기능

https://github.com/user-attachments/assets/33e83953-d766-486f-a7ae-b42fe39bbc1a

+ 게시글 좋아요 토글
+ UI 애니메이션 적용
+ 실시간 좋아요 수 반영


## 👤 5. 마이페이지 기능 (내 정보 관리)

https://github.com/user-attachments/assets/842d8688-2817-4446-bb81-8b7abfdda4fe

+ 프로필 이미지 변경	파일 업로드 후 실시간 반영
+ 닉네임 변경	중복 검증 포함
+ 비밀번호 변경	기존 비밀번호 검증 후 변경
+ 내 정보 기능 추가예정(내가 쓴 글, 좋아요 한 글...)

## 👀 6. 비회원 기능 (Guest Mode)


https://github.com/user-attachments/assets/3886e9b7-7338-4c6d-9dd6-4be4a33b5b4b


- 게시글 목록 조회, 상세 조회 가능한 비회원 모드
- 제한 기능 클릭 시 로그인 안내 처리

## 🐾 UI 인터랙션 – 펫 토글 기능

https://github.com/user-attachments/assets/ec5e5ccb-ffe8-44c9-9806-0f26e52d2837

+ 화면 캐릭터(Pet) 등장/숨김 토글
+ 이동 애니메이션
+ Eden만의 차별화된 playful UX 요소

## ✔️ 5. 공통 기능
### 🔹 JWT 인증 유틸
+ AccessToken 만료 시 RefreshToken으로 재발급
+ `requireLogin()` 사용해 비로그인 접근 제한
+ LocalStorage 기반 인증 관리

### 🔹 공통 모달 컴포넌트
+ 게시글/댓글 삭제 시 확인 모달 제공<br />
(재사용 가능한 UI 컴포넌트)

### 🔹 공통 날짜 포맷 유틸
+ ISO 날짜 → `"YYYY.MM.DD HH:mm"` 형식 변환

### 🔹 파일 업로드 (프로필 이미지)
+ 서버 업로드 가능한 구조

## 🧪 API 연동 방식
```
모든 API 요청은 api.js에서 처리
export async function getRequest(url, auth = false) { … }
export async function postRequest(url, body, auth = false) { … }
export async function patchRequest(url, body, auth = false) { … }
export async function deleteRequest(url, auth = false) { … }
```
+ `auth = true`일 경우 자동으로 AccessToken을 Header에 추가
+ 토큰 오류 발생 시 RefreshToken 재발급 시도




## 🧱 기술 스택
### Frontend
+ Vanilla JS
+ HTML5 / CSS3
+ Fetch API
+ LocalStorage
+ Figma 기반 UI

### Infra
+ Live Server / Nginx 배포 가능 구조
