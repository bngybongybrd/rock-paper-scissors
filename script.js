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
let gameOver = false

const buttons = document.querySelector("#buttons")
buttons.addEventListener("click", (e) => {
    if (gameOver) return

    console.log(e.target.id)
    let humanChoice = e.target.id
    let computerChoice = getComputerChoice()
    console.log(humanChoice)
    console.log(computerChoice)

    // see who won
    playRound(humanChoice, computerChoice)
    console.log(computerScore)
    console.log(humanScore)

    const humanScoreSpan = document.querySelector("#humanScoreSpan")
    const computerScoreSpan = document.querySelector("#computerScoreSpan")

    // set new score
    humanScoreSpan.textContent = humanScore
    computerScoreSpan.textContent = computerScore

    if (humanScore == 5 || computerScore == 5) {
        gameOver = true

        const result = document.createElement("h2")
        if (humanScore == 5) {
            result.textContent = "Game Over! You won!"
        } else {
            result.textContent = "Game Over! Computer won!"
        }

        const playAgainBtn = document.createElement("button")
        playAgainBtn.textContent = "Play again?"


        // add to buttons new div
        const resultDiv = document.createElement("div")
        resultDiv.append(result, playAgainBtn)
        document.querySelector("body").append(resultDiv)


        playAgainBtn.addEventListener("click", () => {
            humanScore = 0
            computerScore = 0
            humanScoreSpan.textContent = humanScore
            computerScoreSpan.textContent = computerScore
            resultDiv.remove()
            gameOver = false
        })
    }
})
