let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput =document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 10;
let gameOver = false;
let chanceArea = document.getElementById("chances-area");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus",function(){
    userInput.value=""});

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100)+1;
    console.log("정답", computerNum);
   
}

function play(){
    let userValue = userInput.value;

    if(userValue<1 || userValue>100){
        resultArea.textContent = "1과 100 사이 숫자를 입력해 주세요"
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요"
        return;
    }

    chances -- ;
    chanceArea.textContent = `남은 기회 : ${chances}회`;
    console.log("chances",chances)

    if(userValue < computerNum){
        resultArea.textContent = "UP"
     
    } else if(userValue > computerNum){
        resultArea.textContent = "DOWN"
     
    } else {
        resultArea.textContent = "정답입니다";
        gameOver =true
        
    }

    history.push(userValue)

    if(chances<1){
        gameOver = true;
    }

    if(gameOver == true){
        playButton.disabled = true;
    }
    
}

function reset(){
    userInput.value = "";
    pickRandomNum();
    resultArea.textContent = "1부터 100까지의 숫자 중 하나를 골라 적어봐"
    chanceArea.textContent = `남은 기회 : 10회`;

}

pickRandomNum();