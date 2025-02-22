function generateImage() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Generate random shapes
    for (let i = 0; i < 50; i++) {
        ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
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
