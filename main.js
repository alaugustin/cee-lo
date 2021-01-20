let win = false,
    scoreBoard = document.getElementById("scoreBoard"),
    winCode;

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
        winCode = 2;

        if (a === b && b === c) {
            winCode;
            scoreBoard.innerHTML = "Trips - " + a + b + c;
            console.log("Trips - " + a + b + c + ". Win is = " + win + ". Wincode is " + winCode);

        } else {
            point();
        }
    }

    // POINT CONDITION
    function point() {
        winCode = 1;

        if (a === b) {
            scoreBoard.innerHTML = c;
            winCode;
            console.log("Point - " + c + ". Wincode is " + winCode);

        } else if (a === c) {
            scoreBoard.innerHTML = b;
            winCode;
            console.log("Point - " + b + ". Wincode is " + winCode);

        } else if (b === c) {
            scoreBoard.innerHTML = a;
            winCode;
            console.log("Point - " + a + ". Wincode is " + winCode);

        } else {
            fourFiveSix();
        }
    }

    // 4 5 6 CONDITION
    function fourFiveSix() {
        let array456 = [a, b, c],
            array456sort = array456.sort(),
            array456string = array456sort.toString();        
            winCode = 3;
        
        if (array456string === "4,5,6") {
            win = true;
            winCode;
            console.log("Win is = " + win + ". 4 5 6 Instant win. Wincode is " + winCode);

            disableButtons();
            resetGame();
        } else {
            oneTwoThree();
        }
    }

    // 1 2 3 CONDITION
    function oneTwoThree() {
        let array123 = [a, b, c],
            array123sort = array123.sort(),
            array123string = array123sort.toString();
            winCode = 0;

        if (array123string === "1,2,3") {
            win = false;
            winCode;
            console.log("Win is = " + win + ". 1 2 3 Instant loss. Wincode is " + winCode);

            disableButtons();
            resetGame();
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
    console.log("Reset game win to " + win)
}
resetButton.onclick = function () {
    resetGame();
};

disableButtons();