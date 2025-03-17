// Patient Registration
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const name = document.getElementById("name").value;
            const age = document.getElementById("age").value;
            const village = document.getElementById("village").value;
            const phone = document.getElementById("phone").value;

            if (name && age && village && phone) {
                alert(`Welcome, ${name}! Redirecting to video consultation...`);
                window.location.href = "consultation.html"; // Redirect
            } else {
                alert("Please fill in all fields.");
            }
        });
    }
});

// WebRTC Video Call
let localStream;
let remoteStream;

async function getUserMedia() {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    document.getElementById('localVideo').srcObject = localStream;
}

async function startCall() {
    getUserMedia();
    remoteStream = new MediaStream();
    document.getElementById('remoteVideo').srcObject = remoteStream;

    localStream.getTracks().forEach(track => remoteStream.addTrack(track));
}

function endCall() {
    document.getElementById('localVideo').srcObject = null;
    document.getElementById('remoteVideo').srcObject = null;
}
