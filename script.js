function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"]
    let num = Math.random()
    let choice = Math.floor(num * 3)
    console.log(`Computer's choice: ${arr[choice]}`)
    return arr[choice]
}


function getHumanChoice() {
    let choice = prompt("Enter your choice: ")
    console.log(`Your choie: ${choice}`)
    return choice
}


function playRound(humanChoice, computerChoice) {
    let arr = ["rock", "paper", "scissors"]

    humanChoice = humanChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    humanChoice = arr.indexOf(humanChoice)
    computerChoice = arr.indexOf(computerChoice)

    if (humanChoice === computerChoice) {
        console.log("Draw!")
    } else if (humanChoice - computerChoice == 1 || humanChoice - computerChoice == -2) {
        console.log(`You Win! ${arr[humanChoice]} beats ${arr[computerChoice]}!`)
        humanScore++
    } else {
        console.log(`You Lose! ${arr[computerChoice]} beats ${arr[humanChoice]}!`)
        computerScore++
    }
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())

        console.log(`Human Score: ${humanScore}`)
        console.log(`Computer Score: ${computerScore}`)
    }
}


let humanScore = 0
let computerScore = 0

playGame()

