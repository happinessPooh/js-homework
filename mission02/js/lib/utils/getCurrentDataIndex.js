import { default as slideData } from "../models/slideData.js";

function getCurrentDataIndex(currentList) {
  return slideData[currentList.dataset.index - 1];
}

export default getCurrentDataIndex;
