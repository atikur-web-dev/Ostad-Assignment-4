const generateBtn = document.querySelector("#generateBtn");
const cssCode = document.querySelector("#cssCode");
function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        color += letters[randomIndex];
    }
    return color;
}

generateBtn.addEventListener("click", function () {
    const color1 = generateRandomColor();
    const color2 = generateRandomColor();
    const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
    document.body.style.background = gradient;
    cssCode.textContent = `background: ${gradient};`;
});