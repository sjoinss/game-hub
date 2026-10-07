/*
 * 게임 목록 — 새 게임을 추가하려면 이 배열에 항목을 하나 더 넣으세요.
 * 화면에는 배열 순서대로 표시됩니다.
 *
 *   title       게임 이름 (필수)
 *   url         배포 링크 (필수)
 *   image       미리보기 이미지 경로. 16:10 비율(예: 800×500) 권장 (선택 — 없으면 대체 화면 표시)
 *   imageAlt    미리보기 이미지 설명 (스크린 리더용)
 *   description 한 줄 설명 (짧게)
 *   platform    지원 환경 표기 (예: "PC · 모바일")
 *   emoji       이미지가 없거나 불러오지 못했을 때 보여줄 이모지 (선택)
 */
window.GAMES = [
  {
    title: "점프점프",
    url: "https://sjoinss.github.io/jumpjump/",
    image: "images/jumpjump.jpg",
    imageAlt: "노란 도트 캐릭터가 발판을 밟으며 위로 올라가는 게임 화면",
    description: "내가 그린 캐릭터로 끝없이 올라가는 점프 게임",
    platform: "PC · 모바일",
    emoji: "🐥",
  },
  {
    title: "도트 젤리 소팅",
    url: "https://sjoinss.github.io/dot-jelly-sort/",
    image: "images/dot-jelly-sort.png",
    imageAlt: "같은 색 도트 젤리가 병 안에서 이어 붙어 쌓인 소팅 퍼즐 화면",
    description: "같은 젤리끼리 한 병에 모으는 소팅 퍼즐",
    platform: "PC · 모바일",
    emoji: "🫙",
  },
  {
    title: "케이크 타이쿤",
    url: "https://sjoinss.github.io/cake_simulator/",
    image: "images/cake-tycoon.jpg",
    imageAlt: "손님이 딸기 케이크를 주문하는 케이크 가게 화면",
    description: "주문받은 케이크를 직접 만들어 파는 가게 게임",
    platform: "모바일 가로 · PC",
    emoji: "🎂",
  },
  {
    title: "카페 타이쿤",
    url: "https://sjoinss.github.io/cafe-tycoon/",
    image: "images/cafe-tycoon.jpg",
    imageAlt: "토끼 손님이 음료를 주문하고 캐릭터가 응대하는 카페 화면",
    description: "음료를 만들어 파는 카페 경영 게임",
    platform: "PC 권장",
    emoji: "☕",
  },
  {
    title: "클리커게임",
    url: "https://sjoinss.github.io/clickergame/",
    image: "images/clicker.jpg",
    imageAlt: "토끼 캐릭터를 클릭해 돈이 올라가는 클리커 게임 화면",
    description: "클릭으로 돈을 모으는 방치형 클리커",
    platform: "PC · 모바일",
    emoji: "🐰",
  },
];
