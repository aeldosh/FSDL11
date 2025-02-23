document.addEventListener("DOMContentLoaded", function () {
    let balloonsContainer = document.querySelector(".balloons");
    let confettiContainer = document.querySelector(".confetti");

    for (let i = 0; i < 100; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.animationDuration = (Math.random() * 3 + 2) + "s";
        balloonsContainer.appendChild(balloon);
    }

    for (let i = 0; i < 200; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti-piece");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
        confetti.style.backgroundColor = getRandomColor();
        confettiContainer.appendChild(confetti);
    }
});

function getRandomColor() {
    let colors = ["#FF5733", "#33FF57", "#5733FF", "#FFD700", "#FF33A8"];
    return colors[Math.floor(Math.random() * colors.length)];
}
