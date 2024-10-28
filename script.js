const Player = {
    name: "",
    score: 0
};


const playerInput = document.getElementById("playerNameInput");
const joinButton = document.getElementById("joinGameButton")
const startGameButton = document.getElementById("startGameButton");
const playerNameDisplay = document.getElementById("playerName");
const scorePointsButton = document.getElementById("scorePointsButton");
const playerScoreDisplay = document.getElementById("playerScore");
document.getElementById("joinGameButton").addEventListener("click", myFunction);
    function myFunction() {
        const playerName = playerInput.value;
        Player.name = playerName;
document.getElementById("playerName").innerHTML = playerName;
    }
let isRunning = false;
startGameButton.addEventListener("click", toggleGame);
function toggleGame(){
    if (isRunning === false) {
        isRunning = true;
        startGameButton.innerHTML = "Stop Game";
    } else {
        isRunning = false;
        startGameButton.innerHTML = "Start Game";
    }
    
    }
    scorePointsButton.addEventListener("click", scorePoints);
    function scorePoints(){
        if (isRunning === true){
        Player.score++;
        playerScoreDisplay.innerHTML = Player.score;

        }
        if (isRunning === false){
            console.log("Start the game first :");
        }
    }

    joinButton.addEventListener("click", joinFunction);
    function joinFunction(){
        const playerName = playerInput.value;
        Player.name = playerName;
        playerNameDisplay.innerHTML = playerName;
        }

