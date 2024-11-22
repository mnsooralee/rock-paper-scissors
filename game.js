let userScore = 0;
let pcScore = 0;

const choices = document.querySelectorAll(".choice");
const result = document.querySelector("#msg");

const genPcChoice = () => {
    const choicesArr = ["rock", "paper", "scissors"]; //arrays so that we can call them by a numebr (index)
    const randomIndex = Math.floor(Math.random()*3); //generat values b/w 0 & 2 and removing their decimals
    return choicesArr[randomIndex];
}
const userScoreCount = document.querySelector("#user-score");
const pcScoreCount = document.querySelector("#computer-score");

const showWinner = (userWin, userChoice, pcChoice) => {
    if (userWin) {
        userScore++;
        userScoreCount.innerText = userScore;
        console.log("You win!");
        result.innerText = `You win ${userChoice} beats ${pcChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        pcScore++;
        pcScoreCount.innerText = pcScore;
        console.log("You loose!");
        result.innerText = `You loose! ${pcChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (choiceID) => {
    console.log("User choice: ",choiceId);
    const pcChoice = genPcChoice();
    console.log("PC choice: ",pcChoice);

    if(choiceID == pcChoice) {
        console.log("Game drawn");
        msg.style.backgroundColor = "#081b31";
        result.innerText = "Game drawn";
    } else {
        let userWin = true;
        if (choiceID === "rock") {
            userWin = pcChoice === "paper" ? false : true; //paper beats rock
        } else if(choiceId === "paper") {
            userWin = pcChoice === "scissors" ? false : true ; //scissor beats paper
        }
        else {
            userWin = pcChoice === "rock" ? false : true; //rock beats scissor
        }
        showWinner(userWin, choiceId, pcChoice);

    }

}

choices.forEach((choice) => {       
    choice.addEventListener("click", () => {
        console.log(choice);
        choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
});

//let img = document.querySelector("#rock"); ids are working fine
//console.log(img);


//paused here
//to be continued