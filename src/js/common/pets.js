import { PET_LIST } from "../../assets/pet/petSVG.js";

let petIntervals = [];

/**
 * 펫
 */
export async function spawnPetsFree(containerSelector, count = 5) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const maxCount = Math.min(count, PET_LIST.length);

  const shuffledPets = shuffle(PET_LIST).slice(0, maxCount);

  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;
  
  for(const petPath of shuffledPets) {
    const pet = document.createElement("div");
    pet.classList.add("pet");

    const svgText = await loadSVG(petPath);
    pet.innerHTML = svgText;

    // 초기 랜덤 위치
    let x = Math.random() * containerWidth * 0.8;
    let y = Math.random() * containerHeight * 0.8;

    // 랜덤 속도 & 방향
    let speedX = (Math.random() * 1.5 + 0.5) * (Math.random() > 0.5 ? 1 : -1);
    let speedY = (Math.random() * 1.5 + 0.5) * (Math.random() > 0.5 ? 1 : -1);

    // 크기 랜덤
    const scale = 0.5 + Math.random() * 0.8;
    pet.style.transform = `scale(${scale})`;

    pet.style.position = "absolute";
    pet.style.left = x + "px";
    pet.style.top = y + "px";

    container.appendChild(pet);

    // 움직임 반복
    const intervalId = setInterval(() => {
      x += speedX;
      y += speedY;

      if (x <= 0 || x >= containerWidth - 80) speedX *= -1;
      if (y <= 0 || y >= containerHeight - 80) speedY *= -1;

      pet.style.left = x + "px";
      pet.style.top = y + "px";
    }, 20);
    petIntervals.push(intervalId);
  }
}

// SVG 불러오기
async function loadSVG(path) {
  const res = await fetch(path);
  return await res.text();
}

// 한마리 추가
export function spawnOnePet(containerSelector) {
  spawnPetsFree(containerSelector, 1);
}

// 한마리 제거
export function removeOnePet(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const lastPet = container.querySelector(".pet:last-child");
  if (lastPet) lastPet.remove();
}

export function clearAllPets(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  petIntervals.forEach(id => clearInterval(id));
  petIntervals = [];
  container.innerHTML = "";
}

// 배열 섞기
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}