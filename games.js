/*
 * 게임 목록 — 새 게임을 추가하려면 이 배열에 항목을 하나 더 넣으세요.
 * 화면에는 배열 순서대로 표시됩니다.
 *
 *   title       게임 이름 (필수)
 *   url         배포 링크 (필수)
 *   image       미리보기 이미지 경로. 16:10 비율(예: 800×500) 권장 (선택 — 없으면 대체 화면 표시)
 *   imageAlt    미리보기 이미지 설명 (스크린 리더용)
 *   description 한두 줄 설명
 *   tags        장르·특징 등 짧은 태그 목록
 *   platform    지원 환경 표기 (예: "PC · 모바일")
 *   emoji       이미지가 없거나 불러오지 못했을 때 보여줄 이모지 (선택)
 */
window.GAMES = [
  {
    title: "점프점프",
    url: "https://sjoinss.github.io/jumpjump/",
    image: "images/jumpjump.jpg",
    imageAlt: "노란 도트 캐릭터가 발판을 밟으며 위로 올라가는 게임 화면",
    description: "내가 직접 그린 도트 캐릭터로 끝없이 올라가는 세로형 점프 게임이에요.",
    tags: ["아케이드", "캐릭터 그리기"],
    platform: "PC · 모바일",
    emoji: "🐥",
  },
  {
    title: "케이크 타이쿤",
    url: "https://sjoinss.github.io/cake_simulator/",
    image: "images/cake-tycoon.jpg",
    imageAlt: "손님이 딸기 케이크를 주문하는 케이크 가게 화면",
    description: "주문을 받고 시트·크림·토핑까지 직접 만들어 파는 캐주얼 케이크 가게 게임이에요.",
    tags: ["타이쿤", "만들기"],
    platform: "모바일 가로 · PC",
    emoji: "🎂",
  },
  {
    title: "카페 타이쿤",
    url: "https://sjoinss.github.io/cafe-tycoon/",
    image: "images/cafe-tycoon.jpg",
    imageAlt: "토끼 손님이 음료를 주문하고 캐릭터가 응대하는 카페 화면",
    description: "손님에게 음료를 만들어 주며 15일 안에 목표 매출을 달성하는 카페 경영 게임이에요. 방치형 모드도 있어요.",
    tags: ["경영 시뮬레이션", "방치형 모드"],
    platform: "PC 권장",
    emoji: "☕",
  },
  {
    title: "클리커게임",
    url: "https://sjoinss.github.io/clickergame/",
    image: "images/clicker.jpg",
    imageAlt: "토끼 캐릭터를 클릭해 돈이 올라가는 클리커 게임 화면",
    description: "클릭으로 돈을 모으고 직원을 고용해 목표 금액에 도전하는 방치형 클리커 게임이에요.",
    tags: ["클리커", "방치형"],
    platform: "PC · 모바일",
    emoji: "🐰",
  },
];
