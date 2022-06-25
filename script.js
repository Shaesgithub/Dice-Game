//JAVASCRIPT FOR ONE PLAYER DICE GAME

const total = document.querySelector("#total");

let dice;
let totalScore = 0;

//Dice images
let diceFaceImg = {
    dice1:"Dice-faces/Dice Face_1.png",
    dice2:"Dice-faces/Dice Face_2.png",
    dice3:"Dice-faces/Dice Face_3.png",
    dice4:"Dice-faces/Dice Face_4.png",
    dice5:"Dice-faces/Dice Face_5.png",
    dice6:"Dice-faces/Dice Face_6.png"
}

const throwDice = () => {
    //Generate a random number between 1 & 6 (for rolling the dice)
    dice = Math.floor((Math.random() * 6) + 1);
    
    hideMsg()

    //If the Dice lands on 1 you lose
        if (dice == 1) {
        const loseMsg = document.querySelector("#youLose");
        loseMsg.innerHTML = "Sorry! You Lose!";
        totalScore=0;
        toggleBtn(rollBtn);
        rollBtn.style.background ="#966aa6";
        rollBtn.style.color ="#4f4f4f";
        resetBtn.style.background ="#E397FF";
        resetBtn.style.color ="black";
    } else {
        hideMsg()
        totalScore += dice;
        total.innerHTML = totalScore;
    }
    //If the Dice equals to 20+ you win
    if (totalScore >= 20) {
        const winMsg = document.querySelector("#youWin");
        winMsg.innerHTML = "You reached 20! you Win!";
        totalScore = 0;
        rollBtn.style.background ="#966aa6";
        rollBtn.style.color ="#4f4f4f";
        resetBtn.style.background ="#E397FF";
        resetBtn.style.color ="black";
        rollBtn.disabled = true;
    }
    //Change button styles
    resetBtn.addEventListener("click", ()=>{
        rollBtn.style.background ="#E397FF";
        rollBtn.style.color ="black";
        resetBtn.style.background ="#966aa6";
        resetBtn.style.color ="#4f4f4f";
        rollBtn.disabled = false;
    });
    
    //Remove default image to dice images
    let allDiceImges = document.querySelector("#diceImages");
    allDiceImges.src = diceFaceImg["dice" + dice];
}

//Start game
const rollBtn = document.querySelector("#roll-btn");
rollBtn.addEventListener("click", throwDice)

//Disable buttons toggle
const toggleBtn = (btn) => {
    if (btn.disabled === true) {
        btn.disabled = false;
    } else if (btn.disabled === false) {
        btn.disabled = true;
    };
}

//Reset game
const reset = () => {
    totalScore = 0;
    total.textContent='0';
    hideMsg();
    toggleBtn(rollBtn);
    const rollMsg = document.querySelector("#rollMsg");
    rollMsg.innerHTML = "Roll the Dice to start!";  
}

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", reset);

//Hide messages
const hideMsg = () => {
    document.querySelector("#youLose").innerHTML = '';
    document.querySelector("#youWin").innerHTML = '';
    document.querySelector("#rollMsg").innerHTML = '';
}