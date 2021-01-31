let playerArray = document.querySelectorAll(".playerHolder"),
    scoreBoardArray = document.querySelectorAll(".playerScoreBoard"),
    rollButtonArray = document.querySelectorAll(".rollButton"),
    playerCount = document.getElementById("playerCount"),
    win = false,
    sides,
    rollCode,
    rollPoint,
    array456,
    array456sort,
    array456string,
    array123,
    array123sort,
    array123string;

const startButton = document.getElementById("startButton"),
    resetButton = document.getElementById("resetButton");

// -------------------- GENERATE RANDOM NUMBER --------------------
function randNum() {
    let sides = 6,
        a = Math.floor(Math.random() * sides) + 1,
        b = Math.floor(Math.random() * sides) + 1,
        c = Math.floor(Math.random() * sides) + 1;

    printDice(a, b, c);
    ceeLo(a, b, c);
}

// -------------------- PRINT DICE NUMBERS --------------------
function printDice(a, b, c) {
    document.getElementById("die1").innerHTML = a;
    document.getElementById("die2").innerHTML = b;
    document.getElementById("die3").innerHTML = c;
}

// -------------------- CeeLo DICE ROLLS --------------------
function ceeLo(a, b, c) {

    // TRIPS CONDITION
    function trips() {
        rollCode = 2;

        if (a === b && b === c) {

            scoreBoard.innerHTML = "Trips - " + a + b + c;

            determineRollType();

        } else {

            point();
        }
    }

    // POINT CONDITION
    function point() {
        rollCode = 1;

        if (a === b) {
            scoreBoard.innerHTML = c;
            rollPoint = c;
            rollCode;
            determineRollType();

        } else if (a === c) {
            scoreBoard.innerHTML = b;
            rollPoint = b;
            rollCode;
            determineRollType();

        } else if (b === c) {
            scoreBoard.innerHTML = a;
            rollPoint = a;
            rollCode;
            determineRollType();

        } else {

            fourFiveSix();
        }
    }

    // 4 5 6 CONDITION
    function fourFiveSix() {
        let array456 = [a, b, c],
            array456sort = array456.sort(),
            array456string = array456sort.toString();
        rollCode = 3;

        if (array456string === "4,5,6") {
            rollCode;

            determineRollType();
        } else {

            oneTwoThree();
        }
    }

    // 1 2 3 CONDITION
    function oneTwoThree() {
        let array123 = [a, b, c],
            array123sort = array123.sort(),
            array123string = array123sort.toString();
        rollCode = 0;

        if (array123string === "1,2,3") {
            rollCode;

            determineRollType();
        } else {

            console.log("Roll again.");
            scoreBoard.innerHTML = "Null";
        }
    }

    trips();
}

// -------------------- PLAYER --------------------
let    howManyPlayers = rollButtonArray.length;
playerCount.innerHTML = howManyPlayers;

// -------------------- ROLL DICE --------------------
for (let index = 0; index < rollButtonArray.length; index++) {
    const playerRoll = rollButtonArray[index];

    playerRoll.onclick = function () {
        randNum();
        playerScoreBoard();
        // console.log()
    };

    function playerScoreBoard() {
        let players = [index],
            playerNumber = players[0] + 1;

        console.log(rollCode);


        rollButtonArray[index].previousElementSibling.innerHTML = "Player " + playerNumber + " score goes here.";
    }
}

function determineRollType() {
    switch (rollCode) {
        case 3:
            win = true;
            console.log("Win is = " + win + ". 4 5 6 Instant win. Wincode is " + rollCode);

            disableButtons();
            resetGame();

            break;
        case 2:
            win = false;
            console.log("Trips - Win is = " + win + ". Wincode is " + rollCode);

            break;
        case 1:
            win = false;
            console.log("Point - " + rollPoint + ". Wincode is " + rollCode);

            break;
        case 0:
            win = false;
            console.log("Win is = " + win + ". 1 2 3 Instant loss. Wincode is " + rollCode);

            disableButtons();
            resetGame();

            break;
    }
}

// -------------------- GAME --------------------
function disableButtons() {

    for (let index = 0; index < rollButtonArray.length; index++) {

        rollButtonArray[index].disabled = true;
    }
}

function initCLgame() {
    console.log("init game");

    for (let index = 0; index < rollButtonArray.length; index++) {

        rollButtonArray[0].disabled = false;
        rollButtonArray[index].disabled = true;
    }
}

// -------------------- START GAME --------------------
function startGame() {

    console.log("Starting button pressed.");
    initCLgame();
}
startButton.onclick = function () {

    startGame();
};

// -------------------- RESET GAME --------------------
function resetGame() {

    win = false;
    scoreBoard.innerHTML = "Null";
    disableButtons();
    console.log("Reset button pressed. Reset game win to " + win);
}
function resetDie() {
    document.getElementById("die1").innerHTML = 4;
    document.getElementById("die2").innerHTML = 5;
    document.getElementById("die3").innerHTML = 6;
}
resetButton.onclick = function () {

    resetGame();
    resetDie();
};

// disableButtons();