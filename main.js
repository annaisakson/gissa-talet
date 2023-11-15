// variabler hämtas från html
const btn = document.getElementById("guess-btn");
const message = document.getElementById("message");
// generera random nummer mellan 1-100
const secretNum = Math.floor(Math.random() * 101);
const reset = document.getElementById("reset");
let attempts = 5;
// man kan se det hemliga numret i konsolen
console.log(secretNum);

// när du klickar "gissa" ska detta hända
btn.addEventListener("click", function checkGuess(){ 
    // gör om siffran till int
    let guess = parseInt(document.getElementById("input").value);

    // om spelaren skriver fel eller inte skriver något alls 
    if (isNaN(guess) || guess < 1 || guess > 100 || guess == ""){
        message.textContent = "Skriv in ett tal mellan 1-100 tack!"
        input.value = "";
        return;
    };
    
    // varje gång minskar chanserna med 1
    attempts--;
    
    // om spelaren gissar rätt
    if (guess === secretNum) {
        message.textContent = "Grattis! Du vann!";
        document.getElementById('guess-btn').style.display = 'none';
        message.classList.add("win");
    // om spelaren får slut på gissningar
    } else if (attempts === 0) {
        message.textContent = "GAME OVER";
        document.getElementById('guess-btn').style.display = 'none';
        message.classList.add("game-over");
    // efter varje gissning ser spelaren hur många försök den har kvar och får en hint
    } else {
        const hint = guess < secretNum ? "För lågt!":"För högt!";
        message.textContent = `${hint} Du har ${attempts} försök kvar!`;
        input.value = "";
    }
});

// funktion som laddar om sidan och börjar om spelet om spelaren klickar på knappen
reset.addEventListener("click", function reset(){
    location.reload();
});




