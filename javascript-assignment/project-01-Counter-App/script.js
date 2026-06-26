
let count = 0;

const countElement = document.querySelector("#count");
const incrementBtn = document.querySelector("#incrementBtn");
const decrementBtn = document.querySelector("#decrementBtn");
const resetBtn = document.querySelector("#resetBtn");

function updateCounter() {
    countElement.textContent = count;
}

incrementBtn.addEventListener("click", function () {
    count++;
    updateCounter();
});

decrementBtn.addEventListener("click", function () {
    count--;
    updateCounter();
});

resetBtn.addEventListener("click", function () {
    count = 0;
    updateCounter();
});