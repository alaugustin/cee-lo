let win = false,
    scoreBoard = document.getElementById("scoreBoard"),
    rollCode,
    rollPoint;

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
            rollCode;
            rollPoint = c;
            processRoll();

        } else if (a === c) {
            scoreBoard.innerHTML = b;
            rollCode;
            rollPoint = b;
            processRoll();

        } else if (b === c) {
            scoreBoard.innerHTML = a;
            rollCode;
            rollPoint = a;
            processRoll();

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

            processRoll();
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

            processRoll();
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
            rollCode;
            console.log("Win is = " + win + ". 4 5 6 Instant win. Wincode is " + rollCode);

            disableButtons();
            resetGame();

            break;
        case 2:
            win = false;
            rollCode;
            console.log("Trips - Win is = " + win + ". Wincode is " + rollCode);

            break;
        case 1:
            win = false;
            console.log("Point - " + rollPoint + ". Wincode is " + rollCode);

            break;
        case 0:
            win = false;
            rollCode;
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
    scoreBoard.innerHTML = "Null";
    document.getElementById("die1").innerHTML = 4;
    document.getElementById("die2").innerHTML = 5;
    document.getElementById("die3").innerHTML = 6;
    disableButtons();
    console.log("Reset button pressed. Reset game win to " + win);
}
resetButton.onclick = function () {

    resetGame();
};

disableButtons();