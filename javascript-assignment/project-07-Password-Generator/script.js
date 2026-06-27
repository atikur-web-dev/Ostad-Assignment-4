const passwordInput = document.querySelector("#password");
const generateBtn = document.querySelector("#generateBtn");
const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
const passwordLength = 8;
function generatePassword() {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    passwordInput.value = password;
}

generateBtn.addEventListener("click", generatePassword);