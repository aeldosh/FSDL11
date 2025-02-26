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
        confetti.style.backgroundColor = getRandomColor();document.addEventListener("DOMContentLoaded", function () {
            const animationContainer = document.getElementById("animation-container");
        
            // Function to create confetti elements
            function createConfetti() {
                for (let i = 0; i < 100; i++) {  
                    let confetti = document.createElement("div");
                    confetti.classList.add("confetti");
                    confetti.style.left = Math.random() * 100 + "vw";
                    confetti.style.animationDuration = Math.random() * 3 + 3 + "s";
                    confetti.style.backgroundColor = getRandomColor();
                    animationContainer.appendChild(confetti);
                }
            }
        
            // Function to create balloon elements
            function createBalloons() {
                for (let i = 0; i < 20; i++) {  
                    let balloon = document.createElement("div");
                    balloon.classList.add("balloon");
                    balloon.style.left = Math.random() * 100 + "vw";
                    balloon.style.animationDuration = Math.random() * 4 + 4 + "s";
                    balloon.textContent = "🎈";
                    animationContainer.appendChild(balloon);
                }
            }
        
            function getRandomColor() {
                let colors = ["#FF5733", "#33FF57", "#5733FF", "#FFD700", "#FF33A8"];
                return colors[Math.floor(Math.random() * colors.length)];
            }
        
            // Trigger animations
            createConfetti();document.addEventListener("DOMContentLoaded", function () {
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
            createBalloons();
        });
        
        confettiContainer.appendChild(confetti);
    }
});

function getRandomColor() {
    let colors = ["#FF5733", "#33FF57", "#5733FF", "#FFD700", "#FF33A8"];
    return colors[Math.floor(Math.random() * colors.length)];
}
