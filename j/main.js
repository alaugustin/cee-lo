let rollButtonArray = document.querySelectorAll(".rollButton");

// -------------------- CeeLo DICE ROLLS --------------------
let ceeLo = (a, b, c) => {

    // TRIPS CONDITION --------------------
    let trips = () => {
        rollCode = 2;        

        if (a === b && b === c) {
            scoreBoard.innerHTML = "Trips - " + a + b + c;
            determineRollType();

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

    // 4 5 6 CONDITION --------------------
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

    // 1 2 3 CONDITION --------------------
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
            console.log("* ---------- *");


        }
    }
    trips();
}

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
        storePlayerScore(playerNumber);
    }
}

// -------------------- PLAYER SCORE--------------------
let storePlayerScore = (playerNumber) => {
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
}

let determineRollType = () => {
    switch (rollCode) {
        case 3:
            console.log("4 5 6 Instant win.");
            rollType = "4 5 6";
            console.log("Roll type is = " + rollType);
            winConditon();
            // resetGame();

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
            lossConditon();
            // resetGame();

            break;
    }
}

// -------------------- WIN/LOSS --------------------
let winConditon = () => {
    win = true;
    console.log("win | rollecode = " +rollCode);
    console.log("* ---------- *");
    disableButtons();
}

let lossConditon = () => {
    win = false;
    console.log("loss | rollcode = " + rollCode);
    console.log("* ---------- *");
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
    console.log("* ---------- *");

    for (let index = 0; index < rollButtonArray.length; index++) {
        rollButtonArray[0].disabled = false;
        rollButtonArray[index].disabled = true;

    }
}

/* -------------------- new JS template below -------------------- */
var ceeLoGame = {
    version: '1.0',
    author: 'Al Augustin',
    project: 'Cee-Lo web dice game',
    Date: '2021',

    // INITIALIZATION --------------------
    init: function () {
        var context = this;
        // GLOBAL VARIABLES --------------------
        context.config = {
            playerArray: document.querySelectorAll(".playerHolder"),
            scoreBoardArray: document.querySelectorAll(".playerScoreBoard"),
            rollButtonArray: document.querySelectorAll(".rollButton"),
            win: false,
            diceSides: 6,
            rollCode: undefined,
            rollPoint: undefined,
            array456: undefined,
            array456sort: undefined,
            array456string: undefined,
            array123: undefined,
            array123sort: undefined,
            array123string: undefined,

            startButton : document.getElementById("startButton"),
            resetButton : document.getElementById("resetButton"),
            playerCount : document.getElementById("playerCount"),            
        };

        // CALL DOM INVOKING FUNCTIONS HERE --------------------
        context.onDomReady();
        context.eventHandlers();

        disableButtons();
        console.log(ceeLoGame.config);

    },

    onDomReady: function () {
        var context = this;

        // LOAD ALL FUNCTIONS --------------------
        console.log("Load all functions here");

        // -------------------- PLAYER --------------------
        let howManyPlayers = ceeLoGame.config.playerArray.length;
        playerCount.innerHTML = howManyPlayers;

        scoreBoard.innerHTML = "Please press start";

        // var sideNav = context.config.sidebarNavigationMenu,
        //     skipLink = context.config.skipLinkAnchor,
        //     mainContentBlock = context.config.sidebarNavPageContentBlock,
        //     boolPageBannerExists = context.config.pageBannerExists;

        // if (sideNav && mainContentBlock && skipLink.length && !boolPageBannerExists) {
        //     sideNav.setAttribute("tabindex", "-1");
        //     for (i = 0; i < skipLink.length; i++) {
        //         skipLink[i].setAttribute("href", "#sidebar-navigation");
        //     }
        // }

    },

    // -------------------- PRINT DICE NUMBERS --------------------
    printDice: function (a, b, c) {
        var context = this;

        document.getElementById("die1").innerHTML = a;
        document.getElementById("die2").innerHTML = b;
        document.getElementById("die3").innerHTML = c;
    },

    // -------------------- START GAME --------------------
    startGame: function () {
        console.log("Start button pressed.");
        scoreBoard.innerHTML = "Player 1 roll";
        initCLgame();

    },

    // -------------------- RESET DICE NUMBERS --------------------
    resetDie: function () {
        var context = this;

        document.getElementById("die1").innerHTML = 4;
        document.getElementById("die2").innerHTML = 5;
        document.getElementById("die3").innerHTML = 6;
    },

    // -------------------- RESET GAME --------------------
    resetGame: function () {
        var context = this;

        win = false;
        scoreBoard.innerHTML = "Please roll";
        disableButtons();
        console.log("Reset button pressed. Reset game win to " + win);

    },

    // -------------------- GENERATE RANDOM NUMBER --------------------
    randNum: function () {
        var context = this;

        let sides = 6,
            a = Math.floor(Math.random() * sides) + 1,
            b = Math.floor(Math.random() * sides) + 1,
            c = Math.floor(Math.random() * sides) + 1;

        printDice(a, b, c);
        ceeLo(a, b, c);
    },

    // HANDLE ALL PAGE LEVEL EVENTS --------------------
    eventHandlers: function () {
        var context = this;

        // ALL EVENT FUNCTIONS HERE --------------------
        console.log("Event handlers here");

        resetButton.onclick = function () {
            ceeLoGame.resetGame();
            ceeLoGame.resetDie();
        };

        startButton.onclick = function () {
            ceeLoGame.startGame();

        };
    },
};

window.addEventListener("load", function () {
    ceeLoGame.init();
    ceeLoGame.printDice();
    ceeLoGame.resetDie();
    ceeLoGame.eventHandlers();
});