function showSurprise() {
    document.getElementById("surpriseText").classList.remove("hidden");
    document.getElementById("surpriseText").style.transform = "scale(1.2)";
    document.getElementById("balloons").classList.remove("hidden");
    startConfetti();
}

// Confetti Effect
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];

function createConfettiPiece() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        size: Math.random() * 10 + 5,
        speed: Math.random() * 3 + 2
    };
}

function startConfetti() {
    for (let i = 0; i < 200; i++) {
        confetti.push(createConfettiPiece());
    }
    animateConfetti();
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((piece, index) => {
        piece.y += piece.speed;
        if (piece.y > canvas.height) {
            confetti[index] = createConfettiPiece();
        }
        ctx.fillStyle = piece.color;
        ctx.beginPath();
        ctx.arc(piece.x, piece.y, piece.size, 0, Math.PI * 2);
        ctx.fill();
    });
    requestAnimationFrame(animateConfetti);
}
