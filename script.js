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

const infiniteLoopAudio = () => {
    const loopAudio = document.querySelector("#loop_audio");
    window.addEventListener("click", () => {
        loopAudio.play();
    });
}

const animateLandingOpenLink = () => {
    const openLink = () => {
        window.location.href = "./homepage.html";
    }
    
    const forgotten = document.querySelector(".forgotten");
    forgotten.addEventListener("click", () => {
        landingPageZoom();
        setTimeout(openLink, 1400);
    });
    
    const main = document.querySelector("#main");
    const landingPageZoom = () => {
        gsap.to(main, {
            duration: 1,
            scale: 2,
        })
    }
}

hoverAudioPlayer();
infiniteLoopAudio();
animateLandingOpenLink();