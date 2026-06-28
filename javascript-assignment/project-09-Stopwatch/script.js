const timeElement = document.querySelector("#time");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");
let seconds = 0;
let timer = null;
function updateTime() {
    timeElement.textContent = `${seconds} Seconds`;
}
startBtn.addEventListener("click", function () {
    if (timer !== null) {
        return;
    }
    timer = setInterval(function () {
        seconds++;
        updateTime();
    }, 1000);
});

stopBtn.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
});

resetBtn.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    updateTime();
});