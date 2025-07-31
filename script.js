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


let humanScore = 0
let computerScore = 0

const buttons = document.querySelector("#buttons")
buttons.addEventListener("click", (e) => {
    humanChoice = e.target.id
    computerChoice = getComputerChoice()

    playRound(humanChoice, computerChoice)

    const humanScoreSpan = document.querySelector("#humanScore")
    const computerScoreSpan = document.querySelector("#computerScore")

    humanScoreSpan.textContent(humanScore)
    computerScoreSpan.textContent(computerScore)

    if (humanScore == 5 || computerScore == 5) {
        const result = document.createElement("h2")
        if (humanScore == 5) {
            result.textContent("Game Over! You won!")
        } else {
            result.textContent("Game Over! Computer won!")
        }

        const playAgainBtn = document.createElement("button")
        playAgainBtn.textContent = "Play again?"
        playAgainBtn.addEventListener("click", () => {
            humanScore = 0
            computerScore = 0
            humanScoreSpan.textContent(humanScore)
            computerScoreSpan.textContent(computerScore)
            playAgainBtn.remove()
        })
    }
})
