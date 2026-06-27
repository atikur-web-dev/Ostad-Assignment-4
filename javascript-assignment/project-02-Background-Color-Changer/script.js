
const button = document.querySelector("#changeColorBtn");

const colorCode = document.querySelector("#colorCode");


function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}

function generateRandomColor() {
    const red = getRandomNumber();
    const green = getRandomNumber();
    const blue = getRandomNumber();
    return `rgb(${red}, ${green}, ${blue})`;
}



button.addEventListener("click", function () {
    const randomColor = generateRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorCode.textContent = `Current Color: ${randomColor}`;
});