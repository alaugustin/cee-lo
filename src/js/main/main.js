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

            // const
            startButton: document.getElementById("startButton"),
            resetButton: document.getElementById("resetButton"),
            playerCount: document.getElementById("playerCount"),
        };

        // CALL DOM INVOKING FUNCTIONS HERE --------------------
        ceeLoGame.onDomReady();
        ceeLoGame.eventHandlers();
        ceeLoGame.disableButtons();
        ceeLoGame.printDice();
        ceeLoGame.resetDie();
        ceeLoGame.rollDice();
        console.log(ceeLoGame.config);

    },

    onDomReady: () => {
        // -------------------- PLAYER --------------------
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
            ceeLoGame.config.rollButtonArray[0].disabled = false;
            ceeLoGame.config.rollButtonArray[i].disabled = true;

        }

        console.log("init game");
        console.log("* ---------- *");

    },

    // -------------------- GAME --------------------
    disableButtons: () => {
        for (let i = 0; i < ceeLoGame.config.rollButtonArray.length; i++) {
            ceeLoGame.config.rollButtonArray[i].disabled = true;

        }
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

        let buttonPressCount = ceeLoGame.config.resetButtonPress;

        for (let i = 0; i < ceeLoGame.config.playerArray.length; i++) {
            const playerRoll = ceeLoGame.config.rollButtonArray[i];

            playerRoll.addEventListener("click", () => {

                // GET PLAYER NUMBER
                var regexDigit = /\d+/;
                var playerId = playerRoll.id;
                var playerNumber = playerId.match(regexDigit)[0];
                // END GET PLAYER NUMBER

                ceeLoGame.randNum();
                playerScoreBoard(playerNumber);
                // determineRollType();
            });

            let playerScoreBoard = (playerNumber) => {
                ceeLoGame.storePlayerScore(playerNumber);
                //test entry

            };

            // -------------------- DETERMINE ROLL TYPE --------------------
            // let determineRollType = () => {
            //     switch (rollCode) {
            //         case 4:
            //             rollType = "4 5 6";
            //
            //             break;
            //         case 3:
            //             rollType = "Trips";
            //
            //             break;
            //         case 2:
            //             rollType = "Roll Point";
            //
            //             break;
            //         case 1:
            //             rollType = "1 2 3";
            //
            //             break;
            //         default:
            //             rollType = "No dice";
            //
            //     }
            // };
        }
    },

    // -------------------- GENERATE RANDOM NUMBER --------------------
    randNum: () => {
        let sides = 6,
            a = Math.floor(Math.random() * sides) + 1,
            b = Math.floor(Math.random() * sides) + 1,
            c = Math.floor(Math.random() * sides) + 1;

        ceeLoGame.ceeLo(a, b, c);
        ceeLoGame.printDice(a, b, c);

    },

    // -------------------- CeeLo DICE ROLLS --------------------
    ceeLo: (a, b, c) => {
        // 4 5 6 CONDITION --------------------
        let fourFiveSix = () => {
            let array456 = [a, b, c],
                array456sort = array456.sort(),
                array456string = array456sort.toString();
            rollCode = 4;
            rollPoint = 3;

            if (array456string === "4,5,6") {
                scoreBoard.innerHTML = "You win";

            } else {
                trips();

            }
        };

        // TRIPS CONDITION --------------------
        let trips = () => {
            rollCode = 3;

            if (a === b && b === c) {
                rollPoint = a;
                scoreBoard.innerHTML = "Trips - " + a + b + c;

            } else {
                point();

            }
        };

        // POINT CONDITION --------------------
        let point = () => {
            rollCode = 2;

            if (a === b) {
                scoreBoard.innerHTML = "Points - " + c;
                rollPoint = c;

            } else if (a === c) {
                scoreBoard.innerHTML = "Points - " + b;
                rollPoint = b;

            } else if (b === c) {
                scoreBoard.innerHTML = "Points - " + a;
                rollPoint = a;

            } else {
                oneTwoThree();

            }
        };

        // 1 2 3 CONDITION --------------------
        let oneTwoThree = () => {
            let array123 = [a, b, c],
                array123sort = array123.sort(),
                array123string = array123sort.toString();
            rollCode = 1;
            rollPoint = 0;

            if (array123string === "1,2,3") {
                scoreBoard.innerHTML = "You loose";

            } else {
                rollCode = 0;
                scoreBoard.innerHTML = "Roll again.";

            }
        };            
        fourFiveSix();

    },

    // -------------------- PLAYER SCORE --------------------
    storePlayerScore: (playerNumber) => {
        let populateLScore = () => {
            ceeLoGame.config.highScores.push({ "player": playerNumber, "roll_code": rollCode, "roll_point": rollPoint });
            localStorage.setItem("highscores", JSON.stringify(ceeLoGame.config.highScores));

            ceeLoGame.playerScoreTable();
        };

        if (rollCode == 4 || rollCode == 3 || rollCode == 2 || rollCode == 1) {
            populateLScore();

        }
    },

    // -------------------- PLAYER SCORE TABLE --------------------
    playerScoreTable: () => {
        // the json data.
        const playerScoreData = JSON.parse(localStorage.getItem("highscores"));

        // Extract value from table header.
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        let col = [];
        for (let i = 0; i < playerScoreData.length; i++) {
            for (let key in playerScoreData[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        const table = document.createElement("table");
        // Create table header row using the extracted headers above.
        let tr = table.insertRow(-1); // table row.

        for (let i = 0; i < col.length; i++) {
            let th = document.createElement("th"); // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);

        }

        // add json data to the table as rows.
        for (let i = 0; i < playerScoreData.length; i++) {

            tr = table.insertRow(-1);

            for (let j = 0; j < col.length; j++) {
                let tabCell = tr.insertCell(-1);
                tabCell.innerHTML = playerScoreData[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        const divShowData = document.getElementById('showData');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);

        ceeLoGame.advancePlayer();

    },

    // -------------------- ADVANCE PLAYER --------------------
    advancePlayer: () => {

        // TODO: MAKE THIS DYNAMICALLY SUPPORT MORE THAN TWO PLAYERS
        for (let i = 0; i < ceeLoGame.config.rollButtonArray.length; i++) {

            if (ceeLoGame.config.rollButtonArray[i].disabled) {
                ceeLoGame.config.rollButtonArray[0].disabled = true;
                ceeLoGame.config.rollButtonArray[i].disabled = false;

            } else {
                ceeLoGame.config.rollButtonArray[0].disabled = false;
                ceeLoGame.config.rollButtonArray[i].disabled = true;

                ceeLoGame.playerPosition();
            }
        }
    },

    // -------------------- PLAYER POSITION --------------------
    playerPosition: () => {
        console.log("playerPosition() executed");
        ceeLoGame.disableButtons();
        let playerScores = JSON.parse(localStorage.getItem("highscores")),
            player1Data = playerScores[0],
            player2Data = playerScores[1];


        let player1first = () => {
            scoreBoard.innerHTML = "player 1️⃣ goes first";
            scoreBoard.classList.add("alert-primary");
            ceeLoGame.config.rollButtonArray[0].disabled = false;
            ceeLoGame.config.rollButtonArray[1].disabled = true;
            ceeLoGame.finalRound();
        }
        let player2first = () => {
            scoreBoard.innerHTML = "player 2️⃣ goes first";
            scoreBoard.classList.add("alert-primary");
            ceeLoGame.config.rollButtonArray[0].disabled = true;
            ceeLoGame.config.rollButtonArray[1].disabled = false;
            ceeLoGame.finalRound();
        }
        let tieRoll = () => {
            player1first();
            scoreBoard.innerHTML = "Tie. Roll again 🔁";
            scoreBoard.classList.add("alert-warning");
        }



        if (player1Data.roll_code == 4) {// CHECK IF PLAYER 1 ROLLS 456
            console.log("instant win player 1️⃣");
            player1first();
            ceeLoGame.disableButtons();


        } else if (player1Data.roll_code == 1) {// CHECK IF PLAYER 1 ROLLS 123
            console.log("instant loss player 1️⃣");
            player2first();
            ceeLoGame.disableButtons();

        } else {
            if (player1Data && player2Data) {

                if (player2Data.roll_code == 4) {// CHECK IF PLAYER 2 ROLLS 456
                    console.log("instant win player 2️⃣");
                    player2first();
                    ceeLoGame.disableButtons();


                } else if (player2Data.roll_code == 1) {// CHECK IF PLAYER 2 ROLLS 123
                    console.log("instant loss player 2️⃣");
                    player1first();
                    ceeLoGame.disableButtons();

                } else {
                    console.log(player1Data);
                    console.log(player2Data);

                    if (player1Data.roll_code == player2Data.roll_code) {// CHECK IF PLAYER AND 2 HAVE THE SAME ROLL CODE
                        if (player1Data.roll_point == player2Data.roll_point) {// CHECK IF PLAYER AND 2 HAVE THE SAME ROLL POINT
                            console.log("tie roll");

                            tieRoll();
                        } else if (player1Data.roll_point > player2Data.roll_point) {
                            console.log("player 1️⃣ goes first");
                            ceeLoGame.disableButtons();
                            player1first();

                        } else {
                            console.log("player 2️⃣ goes first");
                            ceeLoGame.disableButtons();
                            player2first();

                        }

                    } else if (player1Data.roll_code > player2Data.roll_code) {
                        console.log("player 1️⃣ goes first");
                            ceeLoGame.disableButtons();
                        player1first();

                    } else {
                        console.log("player 2️⃣ goes first");
                            ceeLoGame.disableButtons();
                        player2first();

                    }
                }
            }
        }


        console.log("* ---------- *");
    },

    // -------------------- FINAL ROUND --------------------
    finalRound: () => {
        alert("finalRound()");
        localStorage.clear();
        playerScoreData = {};
        document.getElementById("showData").innerHTML = "";

        buttonPressCount = ceeLoGame.config.resetButtonPress;

        console.log(playerScoreData);
    },

    // -------------------- WIN/LOSS --------------------
    winConditon: () => {
        ceeLoGame.config.win = true;

    },

    lossConditon: () => {
        ceeLoGame.config.win = false;

    },

    // -------------------- HANDLE ALL PAGE LEVEL EVENTS --------------------
    eventHandlers: () => {

        // resetButton.addEventListener("click", () => {
        //     ceeLoGame.resetGame();
        //     ceeLoGame.resetDie();

        // });

        startButton.addEventListener("click", () => {
            ceeLoGame.startGame();

        });
    },
};

window.addEventListener("load", () => {
    ceeLoGame.init();
});
