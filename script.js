const button = document.querySelector("#volume");
const audio = document.querySelector("audio")

button.addEventListener("click", () => {
    if (audio.paused) {
        audio.volume = 0.2;
        audio.play();
    } else {
        audio.pause()
    }
});