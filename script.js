let input = document.getElementById("input-field");
let prevGuess = document.querySelector(".prev-guess");
let result = document.querySelector(".result");
let btn = document.getElementById("btn");
let submitBtn = document.querySelector(".submit");

let randomNumber = Math.floor(Math.random() * 100) + 1;

let guessCount = 1;

function checkGuess() {
    const userGuess = input.value;
    if (guessCount === 1) {
        prevGuess.textContent = "Previous guesses: ";
    }
    prevGuess.textContent += ` ${userGuess}`;

    if (userGuess == randomNumber) {
        result.textContent = "Congratulations! you got it right!!!"
        result.style.display = "block";

        result.style.color = "green";
        input.disabled = true;
        submitBtn.disabled = true;

    }

    else if (guessCount === 10) {
        result.style.display = "block";
        result.textContent = "Game Over!"
        input.disabled = "true";
        submitBtn.disabled = "true";
    }
    else if (userGuess < randomNumber) {
        result.textContent = "Wrong, last guess was too low"
        result.style.display = "block";
        result.style.color = "red";
    }
    else {
        result.style.display = "block";
        result.textContent = "Wrong last guess was too high"
        result.style.color = "blue";

    }
    guessCount++;
    input.value = "";
}

// submitBtn.addEventListener("click",checkGuess);
submitBtn.addEventListener("click", checkGuess);
btn.addEventListener("click",()=>{
    input.disabled=false;
    submitBtn.disabled=false;
})