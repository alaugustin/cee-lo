/* -------------------- new JS template below -------------------- */
let ceeLoGame = {
    version: '1.0',
    author: 'Al Augustin',
    project: 'Cee-Lo web dice game',
    Date: '2021',

    // INITIALIZATION --------------------
    init: function () {
        let context = this;

        // GLOBAL VARIABLES --------------------
        context.config = {
            // let
            playerArray: document.querySelectorAll(".playerHolder"),
            scoreBoardArray: document.querySelectorAll(".playerScoreBoard"),
            rollButtonArray: document.querySelectorAll(".rollButton"),
            win: false,
            diceSides: 6,
            rollCode: '',
            rollPoint: '',
            array456: '',
            array456sort: '',
            array456string: '',
            array123: '',
            array123sort: '',
            array123string: '',

            // const
            startButton : document.getElementById("startButton"),
            resetButton : document.getElementById("resetButton"),
            playerCount : document.getElementById("playerCount"),            
        };

        // CALL DOM INVOKING FUNCTIONS HERE --------------------
        context.onDomReady();
        console.log(ceeLoGame.config);

    },

    onDomReady: function () {

        // LOAD ALL FUNCTIONS --------------------
        console.log("Load all functions here");

        // -------------------- PLAYER --------------------
        let howManyPlayers = ceeLoGame.config.playerArray.length;
        playerCount.innerHTML = howManyPlayers;

        scoreBoard.innerHTML = "Please press start";

    },

    // -------------------- PRINT DICE NUMBERS --------------------
    printDice: function (a, b, c) {

        document.getElementById("die1").innerHTML = a;
        document.getElementById("die2").innerHTML = b;
        document.getElementById("die3").innerHTML = c;

    },

    // -------------------- START GAME --------------------
    startGame: function () {

        console.log("Start button pressed.");
        scoreBoard.innerHTML = "Player 1 roll";
        ceeLoGame.initCLgame();

    },

    // -------------------- RESET GAME --------------------
    resetGame: function () {

        win = false;
        scoreBoard.innerHTML = "Please roll";
        ceeLoGame.disableButtons();
        console.log("Reset button pressed. Reset game win to " + win);

    },

    // -------------------- INIT GAME --------------------
    initCLgame: function () {

        console.log("init game");
        console.log("* ---------- *");

        for (let index = 0; index < rollButtonArray.length; index++) {
            rollButtonArray[0].disabled = false;
            rollButtonArray[index].disabled = true;

        }
    },

    // -------------------- RESET DICE NUMBERS --------------------
    resetDie: function () {

        document.getElementById("die1").innerHTML = 4;
        document.getElementById("die2").innerHTML = 5;
        document.getElementById("die3").innerHTML = 6;

    },
    
    // -------------------- GAME --------------------
    disableButtons: function () {

        for (let index = 0; index < ceeLoGame.config.rollButtonArray.length; index++) {
            ceeLoGame.config.rollButtonArray[index].disabled = true;

        }
    },

    // -------------------- GENERATE RANDOM NUMBER --------------------
    randNum: function () {

        let sides = 6,
            a = Math.floor(Math.random() * sides) + 1,
            b = Math.floor(Math.random() * sides) + 1,
            c = Math.floor(Math.random() * sides) + 1;

        ceeLoGame.printDice(a, b, c);
        ceeLoGame.ceeLo(a, b, c);

    },

    // -------------------- WIN/LOSS --------------------
    winConditon: function () {

        ceeLoGame.config.win = true;
        console.log("win | rollecode = " + rollCode);
        console.log("* ---------- *");
        ceeLoGame.disableButtons();

    },

    lossConditon: function () {

        ceeLoGame.config.win = false;
        console.log("loss | rollcode = " + rollCode);
        console.log("* ---------- *");
        ceeLoGame.disableButtons();

    },

    // -------------------- DETERMINE ROLL TYPE --------------------
    determineRollType: function () {

        switch (rollCode) {
            case 3:
                console.log("4 5 6 Instant win.");
                rollType = "4 5 6";
                console.log("Roll type is = " + rollType);
                ceeLoGame.winConditon();

                break;
            case 2:
                rollType = "Trips";
                console.log("Roll type is = " + rollType);
                console.log("Trips.");

                break;
            case 1:
                rollType = "Roll Point";
                console.log("Roll type is = " + rollType);
                console.log("Point - " + rollPoint + ".");

                break;
            case 0:
                rollType = "1 2 3";
                console.log("Roll type is = " + rollType);
                console.log("1 2 3 Instant loss.");
                ceeLoGame.lossConditon();

                break;

        }
    },

    // -------------------- CeeLo DICE ROLLS --------------------
    ceeLo: function (a, b, c) {

        // TRIPS CONDITION --------------------
        let trips = () => {
            rollCode = 2;

            if (a === b && b === c) {
                scoreBoard.innerHTML = "Trips - " + a + b + c;
                ceeLoGame.determineRollType();

            } else {
                point();

            }
        }

        // POINT CONDITION --------------------
        let point = () => {
            rollCode = 1;

            if (a === b) {
                scoreBoard.innerHTML = c;
                rollPoint = c;
                rollCode;
                ceeLoGame.determineRollType();

            } else if (a === c) {
                scoreBoard.innerHTML = b;
                rollPoint = b;
                rollCode;
                ceeLoGame.determineRollType();

            } else if (b === c) {
                scoreBoard.innerHTML = a;
                rollPoint = a;
                rollCode;
                ceeLoGame.determineRollType();

            } else {
                fourFiveSix();

            }
        }

        // 4 5 6 CONDITION --------------------
        let fourFiveSix = () => {
            let array456 = [a, b, c],
                array456sort = array456.sort(),
                array456string = array456sort.toString();
            rollCode = 3;

            if (array456string === "4,5,6") {
                rollCode;
                ceeLoGame.determineRollType();

            } else {
                oneTwoThree();

            }
        }

        // 1 2 3 CONDITION --------------------
        let oneTwoThree = () => {
            let array123 = [a, b, c],
                array123sort = array123.sort(),
                array123string = array123sort.toString();
            rollCode = 0;

            if (array123string === "1,2,3") {
                rollCode;
                ceeLoGame.determineRollType();

            } else {
                scoreBoard.innerHTML = "Roll again.";
                console.log("Roll again.");
                console.log("* ---------- *");

            }
        }
        trips();
    },

    // -------------------- PLAYER SCORE--------------------
    storePlayerScore: function (playerNumber) {
        switch (rollCode) {
            case 2:
                console.log("Player " + playerNumber + " roll code = " + rollCode + " with " + rollPoint + " points");
                console.log("* ---------- *");

                break;
            case 1:
                console.log("Player " + playerNumber + " roll code = " + rollCode + " with a score of " + rollPoint);
                console.log("* ---------- *");

                break;

        }
    },

    // HANDLE ALL PAGE LEVEL EVENTS --------------------
    eventHandlers: function () {

        // ALL EVENT FUNCTIONS HERE --------------------
        console.log("Event handlers here");

        resetButton.onclick = function () {
            ceeLoGame.resetGame();
            ceeLoGame.resetDie();

        };

        startButton.onclick = function () {
            ceeLoGame.startGame();

        };

        // -------------------- ROLL DICE --------------------
        for (let index = 0; index < ceeLoGame.config.rollButtonArray.length; index++) {
            const playerRoll = ceeLoGame.config.rollButtonArray[index];

            playerRoll.onclick = function () {
                ceeLoGame.randNum();
                playerScoreBoard();
            };

            let playerScoreBoard = () => {
                let players = [index],
                    playerNumber = players[0] + 1;
                rollButtonArray[index].previousElementSibling.innerHTML = "Player " + playerNumber + " score goes here. Win is = " + ceeLoGame.config.win;
                ceeLoGame.storePlayerScore(playerNumber);
                
            }
        }
    },
};

window.addEventListener("load", function () {
    ceeLoGame.init();
    ceeLoGame.printDice();
    ceeLoGame.resetDie();
    ceeLoGame.eventHandlers();
    ceeLoGame.disableButtons();
});