const textInput = document.querySelector("#textInput");
const previewText = document.querySelector("#previewText");

textInput.addEventListener("input", function () {
    const text = textInput.value.trim();
    if (text === "") {
        previewText.textContent = "Type Something...";
    } else {
        previewText.textContent = text;
    }
});