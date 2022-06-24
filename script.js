//JAVASCRIPT FOR ONE PLAYER DICE GAME

const total = document.querySelector("#total");
const diceFace = document.querySelector("#diceImages");

let dice;
let totalScore = 0;
let gamePlaying;

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

        //If the Dice lands on 1 you lose
         if (dice == 1) {
            const loseMsg = document.querySelector("#youLose");
            loseMsg.innerHTML = 'Sorry! You Lose!';
            totalScore=0;
            toggleBtn(rollBtn);
        } else {
            hideMsg()
            totalScore += dice;
            total.innerHTML = totalScore;
        }
        //If the Dice equals to 20+ you win
        if (totalScore >= 20) {
            const winMsg = document.querySelector("#youWin");
            winMsg.innerHTML = 'You reached 20! you Win!';
            totalScore = 0;
        }
        
        //Remove default image to dice images
        const diceDOM = document.querySelector("#diceImages");
        diceDOM.classList.remove("defaultImage");
        diceDOM.src = diceFaceImg['dice' + dice];    
}
//Start game
const rollBtn = document.querySelector("#roll-btn");
rollBtn.addEventListener("click",  throwDice) 
diceFace.style.transform = "rotate(450deg)";

//Hide messages
const hideMsg = () => {
    document.querySelector("#youLose").innerHTML = '';
    document.querySelector("#youWin").innerHTML = '';
}

//Disable roll button if you lose
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
    document.querySelector("#diceImages").classList.add("defaultImage");
    total.textContent='0';
    hideMsg();
    toggleBtn(rollBtn);

}
const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", reset);

