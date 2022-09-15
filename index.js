const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionElement = document.getElementById("question");

const inputElement = document.getElementById("input")


const formElement = document.getElementById("form");

const scoreElement = document.getElementById("score")


let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

scoreElement.innerText = `score: ${score}`

questionElement.innerText = `What is ${num1} multiply by ${num2}`


const correctAnswer = num1 * num2;
console.log(correctAnswer, typeof correctAnswer);

formElement.addEventListener("submit", () => {
    const userAnswer = +inputElement.value
    console.log(userAnswer, typeof userAnswer);
    if (userAnswer === correctAnswer) {
        score++
        console.log(score);
        updateLocalStorage()
    }
    else {
        score--
        // console.log(score);
        updateLocalStorage()
    }
})

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}