(function () {
  "use strict";

  var list = document.getElementById("game-list");
  var template = document.getElementById("game-card-template");
  var countEl = document.getElementById("game-count");
  var emptyState = document.getElementById("empty-state");

  // games.js가 없거나 형식이 잘못돼도 페이지가 깨지지 않도록 걸러냄
  var games = (Array.isArray(window.GAMES) ? window.GAMES : []).filter(function (g) {
    return g && typeof g.title === "string" && typeof g.url === "string";
  });

  if (games.length === 0) {
    emptyState.hidden = false;
    countEl.textContent = "0개";
    return;
  }

  countEl.textContent = games.length + "개";

  games.forEach(function (game, index) {
    list.appendChild(createCard(game, index));
  });

  function createCard(game, index) {
    var node = template.content.firstElementChild.cloneNode(true);
    node.style.setProperty("--i", index);

    var media = node.querySelector(".game-card__media");
    var img = node.querySelector(".game-card__img");
    node.querySelector(".game-card__fallback-emoji").textContent = game.emoji || "🎮";

    if (game.image) {
      media.classList.add("is-loading");
      img.alt = game.imageAlt || game.title + " 게임 화면";
      img.addEventListener("load", function () {
        media.classList.remove("is-loading");
      });
      img.addEventListener("error", function () {
        media.classList.remove("is-loading");
        media.classList.add("is-error");
        img.remove();
      });
      img.src = game.image;
    } else {
      media.classList.add("is-error");
      img.remove();
    }

    var link = node.querySelector(".game-card__link");
    link.href = game.url;
    node.querySelector(".game-card__name").textContent = game.title;

    var desc = node.querySelector(".game-card__desc");
    if (game.description) desc.textContent = game.description;
    else desc.remove();


    var platform = node.querySelector(".game-card__platform");
    if (game.platform) platform.textContent = game.platform;
    else platform.remove();

    return node;
  }
})();
