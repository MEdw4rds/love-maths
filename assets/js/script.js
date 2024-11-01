document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    document.querySelector("#answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })

    runGame("addition");

});

function runGame(gameType) {

    document.querySelector("#answer-box").value = "";
    document.querySelector("#answer-box").focus();

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);

    } else  if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);

    } else  if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);

    } else  if (gameType === "division") {
        displayDivideQuestion(num1, num2);

    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

function checkAnswer() {

    let userAnswer = parseInt(document.querySelector("#answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey you got it right! :)")
        incrementScore();
    } else {
        alert(`Awww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }
    runGame(calculatedAnswer[1]);
}

function calculateCorrectAnswer() {

    let operand1 = parseInt(document.querySelector("#operand1").innerText);
    let operand2 = parseInt(document.querySelector("#operand2").innerText);
    let operator = document.querySelector("#operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if(operator === "-") {
        return [operand1 - operand2, "subtract"];
    }  else if(operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if(operator === "/") {
        return [operand1 / operand2, "division"];
    } else {
    alert(`Uninplemented operator ${operator}`);
    throw (`Uninplemented operator ${operator}. Aborting!`);
    }
}

function incrementScore() {

    let oldScore = parseInt(document.querySelector("#score").innerText);
    document.querySelector("#score").innerText = ++oldScore;

}

function incrementWrongAnswer() {

    let oldScore = parseInt(document.querySelector("#incorrect").innerText);
    document.querySelector("#incorrect").innerText = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2) {
    document.querySelector("#operand1").textContent = operand1;
    document.querySelector("#operand2").textContent = operand2;
    document.querySelector("#operator").textContent = "+";

}

function displaySubtractQuestion(operand1, operand2) {

    document.querySelector("#operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.querySelector("#operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.querySelector("#operator").textContent = "-";

}

function displayMultiplyQuestion(operand1, operand2) {

    document.querySelector("#operand1").textContent = operand1;
    document.querySelector("#operand2").textContent = operand2;
    document.querySelector("#operator").textContent = "x";

}

function displayDivideQuestion(operand1, operand2) {

    document.querySelector("#operand1").textContent = operand1 = operand1 * operand2;
    document.querySelector("#operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.querySelector("#operator").textContent = "/";

}