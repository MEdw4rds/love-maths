document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type")
                runGame(gameType);
            }
        });
    }

    runGame("addition");

});

/*
* 
*/
function runGame(gameType) {

   let num1 =  Math.floor(Math.random() * 25) + 1;
   let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1,num2);
    } else {
        alert(`Unknown game type: ${gameType}`)
        throw(`Unknown game type: ${gameType}. Aborting!`)
    }
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) { 
    document.querySelector("#operand1").textContent = operand1;
    document.querySelector("#operand2").textContent = operand2;
    document.querySelector("#operator").textContent = "+";
    
}

function displaySubtractQuestion() { 

}

function displayMultiplyQuestion() { 

}

