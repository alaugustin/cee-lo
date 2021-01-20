let win = false,
    scoreBoard = document.getElementById("scoreBoard");

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

        if (a === b && b === c) {
            console.log("Trips - " + a + b + c + ". Win is = " + win);
            scoreBoard.innerHTML = "Trips - " + a + b + c;

        } else {
            point();
        }
    }

    // POINT CONDITION
    function point() {

        if (a === b) {
            console.log("point - " + c);
            scoreBoard.innerHTML = c;
            console.log("Win is = " + win);

        } else if (a === c) {
            console.log("point - " + b);
            scoreBoard.innerHTML = b;
            console.log("Win is = " + win);

        } else if (b === c) {
            console.log("point - " + a);
            scoreBoard.innerHTML = a;
            console.log("Win is = " + win);

        } else {
            fourFiveSix();
        }
    }

    // 4 5 6 CONDITION
    function fourFiveSix() {
        let array456 = [a, b, c];
        let array456sort = array456.sort();
        let array456string = array456sort.toString();
      
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
function initCLgame() {
    console.log("init game");  
    
    for (let index = 0; index < rollButtonArray.length; index++) {

        rollButtonArray[0].disabled = false;
        rollButtonArray[index].disabled = true;
    }
}


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
    console.log("Reset game win status to " + win);
}
resetButton.onclick = function () {
    resetGame();
};