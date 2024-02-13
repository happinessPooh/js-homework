import { default as getCurrentDataIndex } from "./getCurrentDataIndex.js";

function setSlide(slide, eventTarget, currentList) {
  const { alt } = getCurrentDataIndex(currentList);
  slide.src = eventTarget.src;
  slide.alt = alt;
}

export default setSlide;
