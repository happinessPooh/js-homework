import { default as getCurrentDataIndex } from "./getCurrentDataIndex.js";

function setBodyProperty(body, currentList) {
  const { color } = getCurrentDataIndex(currentList);
  body.style.background = `linear-gradient(to bottom, ${color[0]}, ${
    color[1] || "#000"
  })`;
}

function setHeadingProperty(heading, currentList) {
  const { name } = getCurrentDataIndex(currentList);
  heading.textContent = name;
}

export { setBodyProperty, setHeadingProperty };
