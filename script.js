const audioBtn = document.querySelector(".audio-player");
const videoBtn = document.querySelector(".video-player");

const video = document.querySelector(".video");
const audio = document.querySelector(".audio");

audioBtn.addEventListener("click", () => handleClick("audio"));
videoBtn.addEventListener("click", () => handleClick("video"));

function handleClick(type) {
  switch (type) {
    case "audio":
      audio.style.display = "block";
      video.style.display = "none";
      audioBtn.classList.add("active");
      videoBtn.classList.remove("active");
      break;

    default:
      audio.style.display = "none";
      video.style.display = "block";
      videoBtn.classList.add("active");
      audioBtn.classList.remove("active");
  }
}
