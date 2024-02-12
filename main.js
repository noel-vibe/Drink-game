let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput =document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chances-area");
let history = [];
let correctAnswerImage = document.getElementById("correctAnswerImage");
let defaultImage = document.getElementById("defaultImage");

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
        resultArea.textContent = "정답 선물이야 !! ";
        gameOver =true;
        defaultImage.classList.add("hidden");
        correctAnswerImage.classList.remove("hidden");
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
    resultArea.textContent = "정답을 맞히면 선물을 줄게"
    chanceArea.textContent = `남은 기회 : 5회`;
    gameOver = false;
    playButton.disabled = false;
    chances = 5;
    history = [];
    defaultImage.classList.remove("hidden");
    correctAnswerImage.classList.add("hidden");
}



pickRandomNum();