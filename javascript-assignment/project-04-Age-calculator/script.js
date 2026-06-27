const dobInput = document.querySelector("#dob");
const calculateBtn = document.querySelector("#calculateBtn");
const result = document.querySelector("#result");
calculateBtn.addEventListener("click", function () {
    const dob = dobInput.value;
    if (dob === "") {
        result.textContent = "Please select your date of birth.";
        return;
    }
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
        monthDifference < 0 ||
        (monthDifference === 0 &&
        today.getDate() < birthDate.getDate())
    ) {
        age--;
    }
    result.textContent = `Your Age: ${age} Years`;
});