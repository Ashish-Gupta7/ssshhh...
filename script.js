const hoverAudioPlayer = () => {
    const hoverAudio = document.querySelector("#hover_audio");
    const hoverMe = document.querySelectorAll("#hover_me");

    hoverMe.forEach(elm => {
        elm.addEventListener("mouseover", () => {
            hoverAudio.play();
        });

        elm.addEventListener("mouseout", () => {
            hoverAudio.pause();
            hoverAudio.currentTime = 0;
        })
    });
}
hoverAudioPlayer();

const loopAudio = document.querySelector("#loop_audio");
window.addEventListener("click", () => {
    loopAudio.play();
})