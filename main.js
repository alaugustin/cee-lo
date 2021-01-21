let win = false,
    scoreBoard = document.getElementById("scoreBoard"),
    sides,
    rollCode,
    rollPoint,
    array456,
    array456sort,
    array456string,
    array123,
    array123sort,
    array123string,
    playerRoll;

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

            processRoll();

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
            processRoll();

        } else if (a === c) {
            scoreBoard.innerHTML = b;
            rollPoint = b;
            rollCode;
            processRoll();

        } else if (b === c) {
            scoreBoard.innerHTML = a;
            rollPoint = a;
            rollCode;
            processRoll();

        } else {

            fourFiveSix();
        }
    }

    // 4 5 6 CONDITION
    function fourFiveSix() {      
        if (
            a === 4 && b === 5 && c === 6 || 
            a === 4 && b === 6 && c === 5 ||
            a === 6 && b === 4 && c === 5 || 
            a === 6 && b === 5 && c === 4 ||
            a === 5 && b === 6 && c === 4 || 
            a === 5 && b === 4 && c === 6
            ) {
            win = true;
            console.log("Win is = " + win + ". Instant win.");
            scoreBoard.innerHTML = "Win - " + a + b + c;

            resetGame();
        } else {

            oneTwoThree();
        }
    }

    // 1 2 3 CONDITION
    function oneTwoThree() {
        if (
            a === 1 && b === 2 && c === 3 || 
            a === 1 && b === 3 && c === 2 ||
            a === 3 && b === 1 && c === 2 || 
            a === 3 && b === 2 && c === 1 ||
            a === 2 && b === 3 && c === 1 || 
            a === 2 && b === 1 && c === 3
            ) {
            console.log("Win is = " + win + ". Instant loss.");
            scoreBoard.innerHTML = a + b + c;
        } else {

            console.log("Roll again.");
            scoreBoard.innerHTML = "Null";
        }
    }

    trips();
}

// -------------------- PLAYER --------------------
let rollButtonArray = document.querySelectorAll(".rollButton"),
    playerCount = document.getElementById("playerCount"),
    howManyPlayers = rollButtonArray.length;

playerCount.innerHTML = howManyPlayers;

for (let index = 0; index < rollButtonArray.length; index++) {
    const playerRoll = rollButtonArray[index];

    rollButtonArray[index].disabled = true;

    playerRoll.onclick = function () {
        randNum();
    };
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

// -------------------- ROLL DICE --------------------
for (let index = 0; index < rollButtonArray.length; index++) {
    const playerRoll = rollButtonArray[index];

    playerRoll.onclick = function () {
        randNum();
    };
}

function processRoll() {
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

        default:
            break;
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
    console.log("Reset button pressed.");
    console.log("Reset game win status to " + win);
}
resetButton.onclick = function () {

    resetGame();
    resetDie();
};

disableButtons();