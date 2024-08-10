// BACKGROND GRID ANIMATION JS

document.addEventListener("DOMContentLoaded", () => {
    const background = document.querySelector(".background");
    const squares = [];
    const squareSize = 4 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 4em in pixels
    const numColumns = Math.ceil(window.innerWidth / squareSize);
    const numRows = Math.ceil(window.innerHeight / squareSize);

    // Create squares and position them in a grid
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numColumns; col++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.top = `${row * squareSize}px`;
            square.style.left = `${col * squareSize}px`;
            background.appendChild(square);
            squares.push(square);
        }
    }

    // Function to reveal a random square
    function revealRandomSquare() {
        const square = squares[Math.floor(Math.random() * squares.length)];
        square.classList.add("visible");
        setTimeout(() => {
            square.classList.remove("visible");
        }, 1000);
    }

    // Reveal squares at random intervals
    setInterval(revealRandomSquare, 500);
});
