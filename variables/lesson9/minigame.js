curremtLevel = 1
requiredPoints = curremtLevel * 10
playerPoints = 0
gameOver = false
function startGame() {
    curremtLevel = 1
    playerPoints = 0
    gameOver = false
    console.log("Game Started! You need", { requiredPoints }, "to reach level 2!");
}
function earnPoints(points) {
    if (gameOver === true) {
        console.log("Game ended! Restart game!");
        return
    }
    playerPoints += points
    while (playerPoints >= requiredPoints) {
        if (playerPoints >= requiredPoints) {
            playerPoints -= requiredPoints
            curremtLevel++
            requiredPoints = curremtLevel * 10
            console.log("Congrats, you reached level", curremtLevel, "! You need", requiredPoints, "points ,to reach next level.");
        }
    }
    
    if (curremtLevel >= 5) {
        console.log("You won!");
        gameOver = true
        return
    }
    
    if (playerPoints < requiredPoints) {
        console.log("You have", playerPoints, "points. You need", requiredPoints - playerPoints, "to reach next level!");
    }

}

function restartGame() {
    curremtLevel = 1
    requiredPoints = curremtLevel * 10
    playerPoints = 0
    gameOver = false
    console.log("Game restarted!");
    startGame()
}
startGame()
earnPoints(9)
earnPoints(7)
earnPoints(11)
earnPoints(5)
earnPoints(40)
earnPoints(29)
// restartGame()
// earnPoints(50)
// earnPoints(5)