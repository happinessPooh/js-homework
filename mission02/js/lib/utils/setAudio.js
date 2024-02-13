import AudioPlayer from "../models/audio.js";
import getCurrentDataIndex from "./getCurrentDataIndex.js";

let audio = null;

function setAudio(currentList) {
  if (audio) {
    audio.stop();
  }
  audio = new AudioPlayer(getCurrentDataIndex(currentList).src);
  audio.play();
}

export default setAudio;
