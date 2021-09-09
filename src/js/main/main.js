/* -------------------- new JS template below -------------------- */
let ceeLoGame = {
    version: '1.0',
    author: 'Al Augustin',
    project: 'Cee-Lo web dice game',
    Date: '2021',

    // -------------------- INITIALIZATION --------------------
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
            resetButtonPress: 0,
            rollCode: '',
            rollPoint: '',
            array456: '',
            array456sort: '',
            array456string: '',
            array123: '',
            array123sort: '',
            array123string: '',
            highScores: [],
            roundNum: 0,

            // const
            startButton: document.getElementById("startButton"),
            // resetButton: document.getElementById("resetButton"),
            playerCount: document.getElementById("playerCount"),
        };

        // CALL DOM INVOKING FUNCTIONS HERE --------------------
        ceeLoGame.eventHandlers();
        ceeLoGame.gameRound();
        console.log(ceeLoGame.config);

    },










    // -------------------- GAME ROUNDS --------------------
    gameRound: () => {
        switch (ceeLoGame.config.roundNum) {
            case 0:
                ceeLoGame.insertCoin();
                break;
            case 1:

                ceeLoGame.placementRound();
                break;
            case 2:
                ceeLoGame.finalRound();
                break;

            default:
                console.log("nope");
                break;
        }
    },

    insertCoin: () => {
        console.log("start game");
        ceeLoGame.onDomReady();
        ceeLoGame.disableButtons();
        ceeLoGame.resetDie();

    },

    placementRound: () => {
        gameRoundIs = 1;
        console.log("placementRound() executed");
        ceeLoGame.rollDice(gameRoundIs);

    },

    finalRound: () => {
        gameRoundIs = 2;
        localStorage.clear();
        console.log("* ---------- * finalRound() executed * ---------- *");
        console.log("placementRound winner rolls");
        console.log("is good roll");
        console.log("no - roll again");
        console.log("yes - store roll code and roll point");
        console.log("other player rolls");
        console.log("is good roll");
        console.log("no - roll again");
        console.log("yes - store roll code and roll point");
        console.log("compare roll");
        console.log("winning player wins");

        ceeLoGame.rollDice(gameRoundIs);

    },












    // -------------------- onDomReady() --------------------
    onDomReady: () => {
        let howManyPlayers = ceeLoGame.config.playerArray.length;
        playerCount.innerHTML = howManyPlayers;

        scoreBoard.innerHTML = "Please press start";

    },











    // -------------------- START GAME --------------------
    startGame: () => {
        scoreBoard.innerHTML = "Player 1 roll";
        localStorage.clear();
        ceeLoGame.initCLgame();
        console.log("Start button pressed.");
        ceeLoGame.config.roundNum++;
        ceeLoGame.gameRound();

    },











    // -------------------- RESET GAME --------------------
    resetGame: () => {
        win = false;
        ceeLoGame.config.resetButtonPress;
        scoreBoard.innerHTML = "Please roll";
        document.getElementById("showData").innerHTML = "";
        window.location.href = window.location.href;
        ceeLoGame.disableButtons();
        localStorage.clear();
        console.log("Reset button pressed. Reset game win to " + win);

    },











    // -------------------- INIT GAME --------------------
    initCLgame: () => {
        for (let i = 0; i < ceeLoGame.config.rollButtonArray.length; i++) {
            ceeLoGame.disablePlayer2();

        };
    },











    // -------------------- GAME --------------------
    disableButtons: () => {
        for (let i = 0; i < ceeLoGame.config.rollButtonArray.length; i++) {
            ceeLoGame.config.rollButtonArray[i].disabled = true;

        };
    },

    disablePlayer1: () => {
        for (let i = 0; i < ceeLoGame.config.rollButtonArray.length; i++) {
            ceeLoGame.config.rollButtonArray[0].disabled = true;
            ceeLoGame.config.rollButtonArray[1].disabled = false;

        };
    },

    disablePlayer2: () => {
        for (let i = 0; i < ceeLoGame.config.rollButtonArray.length; i++) {
            ceeLoGame.config.rollButtonArray[0].disabled = false;
            ceeLoGame.config.rollButtonArray[1].disabled = true;

        };
    },











    // -------------------- PRINT DICE NUMBERS --------------------
    printDice: (a, b, c) => {
        document.getElementById("die1").innerHTML = a;
        document.getElementById("die2").innerHTML = b;
        document.getElementById("die3").innerHTML = c;

    },











    // -------------------- RESET DICE NUMBERS --------------------
    resetDie: () => {
        document.getElementById("die1").innerHTML = 4;
        document.getElementById("die2").innerHTML = 5;
        document.getElementById("die3").innerHTML = 6;

    },











    // -------------------- ROLL DICE --------------------
    rollDice: () => {

        for (let i = 0; i < ceeLoGame.config.playerArray.length; i++) {
            const playerRoll = ceeLoGame.config.rollButtonArray[i];

            playerRoll.addEventListener("click", () => {

                // GET PLAYER NUMBER
                var regexDigit = /\d+/;
                var playerId = playerRoll.id;
                var playerNumber = playerId.match(regexDigit)[0];
                // END GET PLAYER NUMBER

                ceeLoGame.randNum(playerNumber);
            });
        };
    },











    // -------------------- GENERATE RANDOM NUMBER --------------------
    randNum: (playerNumber) => {
        let sides = 6,
            a = Math.floor(Math.random() * sides) + 1,
            b = Math.floor(Math.random() * sides) + 1,
            c = Math.floor(Math.random() * sides) + 1;

        ceeLoGame.ceeLo(a, b, c, playerNumber);
        ceeLoGame.printDice(a, b, c);

    },











    // -------------------- CeeLo DICE ROLLS --------------------
    ceeLo: (a, b, c, playerNumber) => {
        let printRoll = () => {
            return a + " " + b + " " + c;
        };

        // 4 5 6 CONDITION --------------------
        let fourFiveSix = (playerNumber) => {
            let array456 = [a, b, c],
                array456sort = array456.sort(),
                array456string = array456sort.toString();
            rollCode = 4;
            rollPoint = 3;

            if (array456string === "4,5,6") {
                if (gameRoundIs == 2) {
                scoreBoard.innerHTML = "You win";
                } else {
                    scoreBoard.innerHTML = "Go first";
                }

                ceeLoGame.storePlayerScore(playerNumber, printRoll);
                ceeLoGame.advancePlayer();

            } else {
                trips(playerNumber);

            };
        };

        // TRIPS CONDITION --------------------
        let trips = (playerNumber) => {
            rollCode = 3;

            if (a === b && b === c) {
                rollPoint = a;
                scoreBoard.innerHTML = "Trips - " + a + b + c;
                ceeLoGame.storePlayerScore(playerNumber, printRoll);
                ceeLoGame.advancePlayer();

            } else {
                point(playerNumber);

            };
        };

        // POINT CONDITION --------------------
        let point = (playerNumber) => {
            rollCode = 2;

            if (a === b) {
                rollPoint = c;
                scoreBoard.innerHTML = "Points - " + c;
                ceeLoGame.storePlayerScore(playerNumber, printRoll);
                ceeLoGame.advancePlayer();

            } else if (a === c) {
                rollPoint = b;
                scoreBoard.innerHTML = "Points - " + b;
                ceeLoGame.storePlayerScore(playerNumber, printRoll);
                ceeLoGame.advancePlayer();

            } else if (b === c) {
                rollPoint = a;
                scoreBoard.innerHTML = "Points - " + a;
                ceeLoGame.storePlayerScore(playerNumber, printRoll);
                ceeLoGame.advancePlayer();

            } else {
                oneTwoThree(playerNumber);

            };
        };

        // 1 2 3 CONDITION --------------------
        let oneTwoThree = (playerNumber) => {
            let array123 = [a, b, c],
                array123sort = array123.sort(),
                array123string = array123sort.toString();
            rollCode = 1;
            rollPoint = 0;

            if (array123string === "1,2,3") {
                if (gameRoundIs == 2) {
                scoreBoard.innerHTML = "You loose";
                } else {
                    scoreBoard.innerHTML = "Go last";
                }
                ceeLoGame.storePlayerScore(playerNumber, printRoll);
                ceeLoGame.advancePlayer();

            } else {
                rollCode = 0;
                scoreBoard.innerHTML = "Roll again.";

            };
        };
        fourFiveSix(playerNumber);

    },











    // -------------------- PLAYER SCORE --------------------
    storePlayerScore: (playerNumber, printRoll) => {
        console.log("storePlayerScore() executed");

        let populateLScore = () => {
            ceeLoGame.config.highScores.push({ "player": playerNumber, "roll_code": rollCode, "roll_point": rollPoint });

            if (ceeLoGame.config.highScores.length > 2) {
                ceeLoGame.config.highScores.shift();
            }

            localStorage.setItem("highscores", JSON.stringify(ceeLoGame.config.highScores));

            if (gameRoundIs == 1) {
                console.log("do placement round stuff | player " + playerNumber + " rolled " + printRoll() + " in round " + gameRoundIs + ". " + "The roll code is: " + rollCode + " The roll point is: " + rollPoint);

                if (rollCode == 1) {
                    ceeLoGame.the123Roll(playerNumber);

                } else if (rollCode == 4) {
                    ceeLoGame.the456Roll(playerNumber);

                } else {
                    if (ceeLoGame.config.highScores.length == 2) {
                        ceeLoGame.playerPosition();
                        ceeLoGame.advancePlayer();

                    }
                }
            }

            if (gameRoundIs == 2) {
                console.log("do final round stuff | player " + playerNumber + " rolled " + printRoll() + " in round " + gameRoundIs + ". " + "The roll code is: " + rollCode + " The roll point is: " + rollPoint);
                if (rollCode == 1) {
                    ceeLoGame.the123Roll(playerNumber);

                } else if (rollCode == 4) {
                    ceeLoGame.the456Roll(playerNumber);

                } else {
                    if (ceeLoGame.config.highScores.length == 2) {
                        ceeLoGame.determineWinner();

                    } else {
                        ceeLoGame.advancePlayer();

                    }
                }
            }
        };

        if (rollCode == 4 || rollCode == 3 || rollCode == 2 || rollCode == 1) {
            populateLScore();

        };
    },











    // -------------------- ADVANCE PLAYER --------------------
    advancePlayer: () => {
        let playerRollButton = ceeLoGame.config.rollButtonArray;

        for (let i = 0; i < playerRollButton.length; i++) {

            if (playerRollButton[i].disabled == true) {
                playerRollButton[i].disabled = false;

            } else {
                playerRollButton[i].disabled = true;

            };
        };
    },











    // -------------------- 4 5 6 ROLL --------------------
    the456Roll: (playerNumber) => {
        scoreBoard.innerHTML = "4 5 6 roll";
        console.log("4 5 6 was rolled by player " + playerNumber);

        if (playerNumber == 1) {
            ceeLoGame.compareRoundData({
                player: "1",
                roll_code: 4,
                roll_point: 0
            }, {
                player: "2",
                roll_code: 0,
                roll_point: 0
            });
            console.log("the game round is " + gameRoundIs); // WILL NEED THIS LATER TO DO FINAL ROUND STUFF

        } else {
            let playerScores = JSON.parse(localStorage.getItem("highscores")),
                player1Data = playerScores[0],
                player2Data = playerScores[1];

            ceeLoGame.compareRoundData(player1Data, player2Data);

        }
    },

    // -------------------- 1 2 3 ROLL --------------------
    the123Roll: (playerNumber) => {
        scoreBoard.innerHTML = "1 2 3 roll";
        console.log("1 2 3 was rolled by player " + playerNumber);

        if (playerNumber == 1) {
            ceeLoGame.compareRoundData({
                player: "1",
                roll_code: 0,
                roll_point: 0
            }, {
                player: "2",
                roll_code: 1,
                roll_point: 0
            });
            console.log("the game round is " + gameRoundIs); // WILL NEED THIS LATER TO DO FINAL ROUND STUFF

        } else {
            let playerScores = JSON.parse(localStorage.getItem("highscores")),
                player1Data = playerScores[0],
                player2Data = playerScores[1];

            ceeLoGame.compareRoundData(player1Data, player2Data);

        }
    },

    // -------------------- PLAYER POSITION --------------------
    playerPosition: () => {
        ceeLoGame.disableButtons();

        console.log("playerPosition() executed");

        let playerScores = JSON.parse(localStorage.getItem("highscores")),
            player1Data = playerScores[0],
            player2Data = playerScores[1];

        console.log(player1Data);
        console.log(player2Data);

        ceeLoGame.compareRoundData(player1Data, player2Data);

        console.log("* ---------- *");
    },

    determineWinner: () => {
        console.log("determineWinner() executed");
        console.log("* ---------- *");
    },

    compareRoundData: (player1Data, player2Data) => {
        if (player1Data.roll_code == player2Data.roll_code) {
            if (player1Data.roll_point == player2Data.roll_point) {
                ceeLoGame.tieRoll();

            } else if (player1Data.roll_point > player2Data.roll_point) {
                ceeLoGame.disableButtons();
                ceeLoGame.player1first();

            } else {
                ceeLoGame.disableButtons();
                ceeLoGame.player2first();

            }

        } else if (player1Data.roll_code > player2Data.roll_code) {
            ceeLoGame.disableButtons();
            ceeLoGame.player1first();

        } else {
            ceeLoGame.disableButtons();
            ceeLoGame.player2first();

        }
    },

    player1first: () => {
        scoreBoard.innerHTML = "player 1️⃣ goes first";
        scoreBoard.classList.add("alert-primary");
        console.log("player 1 goes first");
        ceeLoGame.disablePlayer2();
        gameRoundIs++;
        ceeLoGame.config.resetButtonPress;
        localStorage.clear();
        console.log("the game Round Is now " + gameRoundIs)

    },

    player2first: () => {
        scoreBoard.innerHTML = "player 2️⃣ goes first";
        scoreBoard.classList.add("alert-primary");
        console.log("player 2 goes first");
        ceeLoGame.disablePlayer1();
        gameRoundIs++;
        ceeLoGame.config.resetButtonPress;
        localStorage.clear();
        console.log("the game Round Is now " + gameRoundIs)

    },

    tieRoll: () => {
        scoreBoard.innerHTML = "Tie. Roll again 🔁";
        scoreBoard.classList.add("alert-warning");
        console.log("tie roll start over");

    },











    // -------------------- WIN/LOSS --------------------
    winConditon: () => {
        ceeLoGame.config.win = true;

    },

    lossConditon: () => {
        ceeLoGame.config.win = false;

    },



    // -------------------- PLAYER SCORE TABLE ----- OMMITED FOR NOW --------------------
    // playerScoreTable: () => {
    //     // the json data.
    //     const playerScoreData = JSON.parse(localStorage.getItem("highscores"));

    //     // Extract value from table header.
    //     // ('Book ID', 'Book Name', 'Category' and 'Price')
    //     let col = [];
    //     for (let i = 0; i < playerScoreData.length; i++) {
    //         for (let key in playerScoreData[i]) {
    //             if (col.indexOf(key) === -1) {
    //                 col.push(key);
    //             };
    //         };
    //     };

    //     // Create a table.
    //     const table = document.createElement("table");
    //     // Create table header row using the extracted headers above.
    //     let tr = table.insertRow(-1); // table row.

    //     for (let i = 0; i < col.length; i++) {
    //         let th = document.createElement("th"); // table header.
    //         th.innerHTML = col[i];
    //         tr.appendChild(th);

    //     };

    //     // add json data to the table as rows.
    //     for (let i = 0; i < playerScoreData.length; i++) {

    //         tr = table.insertRow(-1);

    //         for (let j = 0; j < col.length; j++) {
    //             let tabCell = tr.insertCell(-1);
    //             tabCell.innerHTML = playerScoreData[i][col[j]];
    //         };
    //     };

    //     // Now, add the newly created table with json data, to a container.
    //     const divShowData = document.getElementById('showData');
    //     divShowData.innerHTML = "";
    //     divShowData.appendChild(table);

    //     // ceeLoGame.advancePlayer();

    // },











    // -------------------- HANDLE ALL PAGE LEVEL EVENTS --------------------
    eventHandlers: () => {

        // TESTING BUTTON *************************
        let testButton = document.getElementById("testButton");
        testButton.addEventListener("click", () => {
            // console.log(this);
            ceeLoGame.gameRound();
        });

        // console.log(testButton);
        //*************************


        // resetButton.addEventListener("click", () => {
        //     ceeLoGame.resetGame();
        //     ceeLoGame.resetDie();

        // });

        startButton.addEventListener("click", () => {
            ceeLoGame.startGame();
            startButton.disabled = true;

        });
    },
};

// -------------------- LOAD init() --------------------
window.addEventListener("load", () => {
    ceeLoGame.init();
});
