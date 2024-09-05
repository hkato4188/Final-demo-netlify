// Fun confetti and fireworks effects for celebration

document.getElementById("confetti-btn").addEventListener("click", function () {
    // Confetti Effect
    let confettiCount = 200;
    let confettiColors = ["#FF69B4", "#FFD700", "#FF4500", "#00FF00", "#00BFFF"];

    for (let i = 0; i < confettiCount; i++) {
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.position = "absolute";
        confetti.style.width = "8px";
        confetti.style.height = "8px";
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s ease-out infinite`;

        document.body.appendChild(confetti);
    }

    // Fireworks Effect
    const fireworks = document.getElementById("fireworks");
    fireworks.innerHTML = "";  // Clear old fireworks
    setTimeout(() => {
        fireworks.classList.add("fireworks-animated");
    }, 300);
});

const fireworkStyles = `
@keyframes fall {
    0% { transform: translateY(-100vh); }
    100% { transform: translateY(100vh); }
}

.fireworks-animated {
    background: radial-gradient(circle, rgba(255,0,150,1) 0%, rgba(0,255,255,1) 100%);
    animation: fireworks-burst 2s linear infinite;
}

@keyframes fireworks-burst {
    0% { opacity: 0; transform: scale(0); }
    50% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(0); }
}
`;

let styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = fireworkStyles;
document.head.appendChild(styleSheet);
