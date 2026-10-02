# 웹게임 모음 (game-hub)

배포된 게임들을 한곳에서 보고 바로 이동할 수 있는 정적 페이지입니다. 빌드 과정이 없으며 `index.html`을 브라우저로 열기만 하면 됩니다.

## 파일 구성

- `index.html` — 페이지 구조와 카드 템플릿
- `style.css` — 디자인 토큰(CSS 변수)과 스타일
- `games.js` — **게임 목록 데이터** (여기만 고치면 됩니다)
- `main.js` — `games.js`를 읽어 카드를 그리는 스크립트
- `images/` — 게임 미리보기 이미지 (800×500, 16:10)

## 게임 추가하기

1. 게임 플레이 화면을 캡처해 16:10 비율(800×500 권장)로 `images/`에 넣습니다.
2. `games.js`의 `window.GAMES` 배열에 항목을 하나 추가합니다.

```js
{
  title: "새 게임",
  url: "https://sjoinss.github.io/new-game/",
  image: "images/new-game.jpg",
  imageAlt: "게임 화면 설명",
  description: "한 줄 설명",
  platform: "PC · 모바일",
  emoji: "🎮",
},
```

이미지가 없거나 불러오지 못하면 `emoji`로 대체 화면이 표시됩니다. 배열 순서대로 화면에 나옵니다.
