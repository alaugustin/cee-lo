let playerArray = document.querySelectorAll(".playerHolder"),
    scoreBoardArray = document.querySelectorAll(".playerScoreBoard"),
    rollButtonArray = document.querySelectorAll(".rollButton"),
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
    resetButton = document.getElementById("resetButton"),
    playerCount = document.getElementById("playerCount");

// -------------------- GENERATE RANDOM NUMBER --------------------
let randNum = () => {
    let sides = 6,
        a = Math.floor(Math.random() * sides) + 1,
        b = Math.floor(Math.random() * sides) + 1,
        c = Math.floor(Math.random() * sides) + 1;

    printDice(a, b, c);
    ceeLo(a, b, c);    
}

// -------------------- PRINT DICE NUMBERS --------------------
let printDice = (a, b, c) => {
    document.getElementById("die1").innerHTML = a;
    document.getElementById("die2").innerHTML = b;
    document.getElementById("die3").innerHTML = c;
}

// -------------------- CeeLo DICE ROLLS --------------------
let ceeLo = (a, b, c) => {

    // TRIPS CONDITION
    let trips = () => {
        rollCode = 2;        

        if (a === b && b === c) {
            scoreBoard.innerHTML = "Trips - " + a + b + c;
            determineRollType();

        } else {
            point();

        }
    }

    // POINT CONDITION
    let point = () => {
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
    let fourFiveSix = () => {
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
    let oneTwoThree = () => {
        let array123 = [a, b, c],
            array123sort = array123.sort(),
            array123string = array123sort.toString();
        rollCode = 0;

        if (array123string === "1,2,3") {
            rollCode;
            determineRollType();

        } else {
            scoreBoard.innerHTML = "Roll again.";
            console.log("Roll again.");


        }
    }
    trips();
}

// -------------------- PLAYER --------------------
let howManyPlayers = playerArray.length;
playerCount.innerHTML = howManyPlayers;

// -------------------- ROLL DICE --------------------
for (let index = 0; index < rollButtonArray.length; index++) {
    const playerRoll = rollButtonArray[index];

    playerRoll.onclick = function () {
        randNum();
        playerScoreBoard();
    };

    let playerScoreBoard = () => {
        let players = [index],
            playerNumber = players[0] + 1;
        rollButtonArray[index].previousElementSibling.innerHTML = "Player " + playerNumber + " score goes here. Win is = " + win;
        console.log("Rollcode is = " +rollCode);

    }
}

let determineRollType = () => {
    switch (rollCode) {
        case 3:
            console.log("4 5 6 Instant win.");
            disableButtons();
            winConditon();
            // resetGame();

            break;
        case 2:
            console.log("Trips.");

            break;
        case 1:
            console.log("Point - " + rollPoint + ".");

            break;
        case 0:
            console.log("1 2 3 Instant loss.");
            lossConditon();
            // resetGame();

            break;
    }
}

// -------------------- WIN/LOSS --------------------
let winConditon = () => {
    win = true;
    console.log("win | rollecode = " +rollCode);
}

let lossConditon = () => {
    win = false;
    console.log("loss | rollcode = " + rollCode);
    disableButtons();
}

// -------------------- GAME --------------------
let disableButtons = () => {
    for (let index = 0; index < rollButtonArray.length; index++) {
        rollButtonArray[index].disabled = true;

    }
}

let initCLgame = () => {
    console.log("init game");

    for (let index = 0; index < rollButtonArray.length; index++) {
        rollButtonArray[0].disabled = false;
        rollButtonArray[index].disabled = true;

    }
}

// -------------------- START GAME --------------------
let startGame = () => {
    console.log("Start button pressed.");
    scoreBoard.innerHTML = "Player 1 roll";
    initCLgame();

}

startButton.onclick = function () {
    startGame();

};

// -------------------- RESET GAME --------------------
let resetGame = () => {
    win = false;
    scoreBoard.innerHTML = "Please roll";
    disableButtons();
    console.log("Reset button pressed. Reset game win to " + win);

}

let resetDie = () => {
    document.getElementById("die1").innerHTML = 4;
    document.getElementById("die2").innerHTML = 5;
    document.getElementById("die3").innerHTML = 6;

}

resetButton.onclick = function () {
    resetGame();
    resetDie();

};

disableButtons();
scoreBoard.innerHTML = "Please press start";