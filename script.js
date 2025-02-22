function getColorsForPrompt(prompt) {
    const themes = {
        "fire": ["#FF4500", "#FF8C00", "#FFD700"],
        "ice": ["#00FFFF", "#87CEEB", "#E0FFFF"],
        "ocean": ["#1E90FF", "#4682B4", "#5F9EA0"],
        "forest": ["#228B22", "#6B8E23", "#556B2F"],
        "sunset": ["#FF4500", "#FF6347", "#FFD700"],
        "galaxy": ["#4B0082", "#9400D3", "#000080"],
        "default": ["#FFFFFF", "#AAAAAA", "#000000"] // Fallback colors
    };

    for (let key in themes) {
        if (prompt.toLowerCase().includes(key)) {
            return themes[key];
        }
    }

    return themes["default"];
}

function generateImage() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const prompt = document.getElementById("prompt").value || "default";
    
    const colors = getColorsForPrompt(prompt);

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Generate abstract art with theme colors
    for (let i = 0; i < 50; i++) {
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.beginPath();
        ctx.arc(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            Math.random() * 100,
            0,
            Math.PI * 2
        );
        ctx.fill();
    }
}
