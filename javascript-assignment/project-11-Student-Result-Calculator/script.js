const banglaInput = document.querySelector("#bangla");
const englishInput = document.querySelector("#english");
const mathInput = document.querySelector("#math");
const calculateBtn = document.querySelector("#calculateBtn");
const totalElement = document.querySelector("#total");
const averageElement = document.querySelector("#average");
const gradeElement = document.querySelector("#grade");

calculateBtn.addEventListener("click", function () {
    const bangla = Number(banglaInput.value);
    const english = Number(englishInput.value);
    const math = Number(mathInput.value);
    if (
        bangla < 0 || bangla > 100 ||
        english < 0 || english > 100 ||
        math < 0 || math > 100
    ) {
        alert("Marks must be between 0 and 100.");
        return;
    }
    const total = bangla + english + math;
    const average = total / 3;
    let grade = "";
    if (average >= 80) {
        grade = "A+";
    } else if (average >= 70) {
        grade = "A";
    } else if (average >= 60) {
        grade = "A-";
    } else if (average >= 50) {
        grade = "B";
    } else if (average >= 40) {
        grade = "C";
    } else if (average >= 33) {
        grade = "D";
    } else {
        grade = "F";
    }

    totalElement.textContent = total;
    averageElement.textContent = average.toFixed(2);
    gradeElement.textContent = grade;

});