import * as lib from "./lib/index.js";

function mainSlide(e) {
  if (e.target.tagName !== "IMG") return;

  const currentList = e.target.closest(".nav--item");
  const body = document.body;
  const visual = document.querySelector(".visual img");
  const nickName = document.querySelector(".nickName");

  lib.setBodyProperty(body, currentList);
  lib.setSlide(visual, e.target, currentList);
  lib.setHeadingProperty(nickName, currentList);
  lib.pagination(currentList);
  lib.setAudio(currentList);
}

const navigation = document.querySelector(".nav");
navigation.addEventListener("click", mainSlide);
