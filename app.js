var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var GameOver = false;
var WinningScore = 10;

p1Button.addEventListener("click", function(){
    if(!GameOver){
      p1Score++;
        if(p1Score === WinningScore){
            p1Display.classList.add("winner");
            GameOver = true;
      }
      p1Display.textContent = p1Score;  
    }
});

p2Button.addEventListener("click", function(){
    if(!GameOver){
     p2Score++;
        if(p2Score === WinningScore){
            p2Display.classList.add("winner");
            GameOver = true;
        }
     p2Display.textContent = p2Score;
    }
});


resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    GameOver = false;
}

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value;
    WinningScore = Number (this.value);
    reset();
});

