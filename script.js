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
        window.location.href = "./homepage/index.html";
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

const animateLandingOpenLinkResponsive = () => {
    document.querySelector(".forgotten").addEventListener("click", () => {
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;;
        gsap.killTweensOf("#main");
    
        if(width <= 600) {
            gsap.to("#main", {
                scale: 1.2,
                transformOrigin: "center center",
                duration: 0.5 // optional duration for the animation
            });
        } else {
            // Animation for larger screens (if needed)
            gsap.to("#main", {
                scale: 1.4,
                transformOrigin: "center center",
                duration: 0.5 // optional duration for the animation
            });
        }
    });
}
animateLandingOpenLinkResponsive();

window.addEventListener('resize', animateLandingOpenLinkResponsive);