const passwordInput = document.querySelector("#password");
const showPasswordCheckbox = document.querySelector("#showPassword");

showPasswordCheckbox.addEventListener("change", function () {
    if (showPasswordCheckbox.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});