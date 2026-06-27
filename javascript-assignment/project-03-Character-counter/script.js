

const textInput = document.querySelector("#textInput");
const characterCount = document.querySelector("#characterCount");
const wordCount = document.querySelector("#wordCount");

function updateCounter() {
    const text = textInput.value;
    characterCount.textContent = text.length;
    const words = text.trim().split(/\s+/);
    if (text.trim() === "") {
        wordCount.textContent = 0;
    } else {
        wordCount.textContent = words.length;
    }
}

textInput.addEventListener("input", updateCounter);