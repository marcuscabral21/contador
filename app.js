let count = 0;

const value = document.querySelector("#value");
const btnDecrease = document.querySelector(".btn-decrease");
const btnReset = document.querySelector(".btn-reset");
const btnIncrease = document.querySelector(".btn-increase");

btnDecrease.addEventListener("click", function () {
    count--;
    updateCounter();
});

btnReset.addEventListener("click", function () {
    count = 0;
    updateCounter();
});

btnIncrease.addEventListener("click", function () {
    count++;
    updateCounter();
});

function updateCounter() {
    if (count > 0) {
        value.style.color = "green";
    } else if (count < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "#222";
    }
    value.textContent = count;
}