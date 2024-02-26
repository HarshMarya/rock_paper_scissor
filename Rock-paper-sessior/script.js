const compBadge = document.getElementById("comp-score");
const userBadge = document.getElementById("user-score");
const choices = document.querySelectorAll('.choice')
const resultMsg = document.querySelector(".result")
const winMsg = document.querySelector(".win-message")

let userScore = 0;
let compScore = 0;

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        let userChoice = choice.getAttribute("id");
        playChoice(userChoice)
        
    })
})

const playChoice = (userChoice) =>{
    console.log("User choice: ", userChoice);
    //generate computer choices
    const compChoice = genCompChoice();
    console.log("Computer choice: ", compChoice);
    // resultMsg.innerText = `${userChoice} and Computer Choice ${compChoice}`;


    if(userChoice === compChoice){
        //Draw Game
        drawGame()
    }
    else{
        let userWin = true;
        if(userWin === "rock"){
            //scissor, paper
            userWin = compChoice === "scissors" ? false : true;
        }
        else if(userWin === "paper"){
            //scissors, rock
            userWin = compChoice === "rock" ? false : true;
        }
        else{
            //rock, paper
            userWin = compChoice === "paper" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }


}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        compScore++;
        compBadge.innerText = compScore;
        // console.log(`com score =`,compScore);
        resultMsg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        resultMsg.style.backgroundColor = "#E06565";
        resultMsg.style.color = "#BF0411";
    }
    else{
        userScore++;
        userBadge.innerText = userScore;
        // console.log(`user score =`,userScore);
        resultMsg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        resultMsg.style.backgroundColor = "#B0EF8F";
        resultMsg.style.color = "#009045";
    }
}

const drawGame = () =>{
    resultMsg.innerText = "Game was Draw. Play again..."
    resultMsg.style.backgroundColor = "#eeeeee";
    resultMsg.style.color = "#016A70";
    // winMsg.innerText = ``;
}

const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    let randomInd = Math.floor(Math.random () * 3);
    return options[randomInd]
}
// genCompChoice()
