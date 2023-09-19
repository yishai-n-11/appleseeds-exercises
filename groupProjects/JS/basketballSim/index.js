const msgBoard = document.getElementById("msgBoard");
const startBtn = document.getElementById("startBtn");
const gameTimeNum = document.getElementById("gameTimeNum");

const teamAScore = document.getElementById("teamAScore");
const teamBScore = document.getElementById("teamBScore");

/*
    INSTRUCTIONS

    ** game

        the game time is taken from the constants.js file
        run time that will start from 0 until the gameTime value.
        foreach 1 game second wait 5 real seconds.
        when the game time reaches the gameTime value - stop the game, summarize it and stop generating events.
        every eventEveryXtime amount of time (while the game is running) - generate random event.
        
    ** events

        you should have 8 types of events - for example: playerX scored, playerY committed a foul, timeout, rebounds, assist, ect.
        define the events in eventTypes in constants.js.
        every X amount of time (measure it!) - defined in eventEveryXtime in constants, generate a random event.
        log this event using updateMsg functions, and update the correct data.
        for example:
        if player X scored, update team score, and update player personal score.

    ** UI

        add at least one animation (ball jumping around, chear team etc).
        add at least one sound effect
    
    ** general
        generate any additional functions that you need.
        make sure that the flow is logical.
        make the code modular - you can move functions into different files. make sure that the 
        file names are logical and the folder names is logical and nicely organized.
*/

startBtn.addEventListener('click', startGame);

function startGame() {
    updateMsg('start game!');
    let totalTime = 0;
    // start timer, generate random events, update date accordingly until game is done.
    let gameInterval = setInterval(function () {
        if (totalTime < gameTime) {
            // generate events if X amount of time passed from the last event.
            totalTime += 1;
            updateGameTime(totalTime);

        } else {
            clearInterval(gameInterval);
            updateMsg('game over!');
            // summarize the game
        }
    }, 5000);

    // when the game time is done - check which team won and generate the message with team name, final score, and top scorrer from the team

}

function updateMsg(newMsg) {
    msgBoard.innerText = newMsg;
}

function generateTeams() {
    // run generate player 5 times for each team
    // populate each team array with 5 players each
}

function generatePlayer() {
    // pick random first name from firstNames array
    // pick random last name from lastNames array
    // pick random height from 180-220 cm
    // start each player with 0 points and 0 fouls
}

function updateGameTime(newTime) {
    gameTimeNum.innerText = newTime;
}

function updateTeamScoreInUI(team, addPoints) {
    // add correct flow - if team is A - update A score, else - update B score

    // if team === A:
    const teamAScoreNum = parseInt(teamAScore.innerText);
    teamAScoreNum += addPoints;
    teamAScore.innerText = teamAScoreNum;
    // same if team === B
}
