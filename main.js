const roll = document.getElementById("rollButton");

let win = false;

roll.onclick = function () {
    randNum();
};

// GENERATE RANDOM NUMBER
function randNum() {
    let sides = 6,
        a = Math.floor(Math.random() * sides) + 1,
        b = Math.floor(Math.random() * sides) + 1,
        c = Math.floor(Math.random() * sides) + 1;
        
    printDice(a, b, c);
    ceeLo(a, b, c);
}

// PRINT DICE NUMBERS
function printDice(a, b, c) {
    document.getElementById("die1").innerHTML = a;
    document.getElementById("die2").innerHTML = b;
    document.getElementById("die3").innerHTML = c;
}

// RESET GAME
function resetGame() {
    win = false;
    console.log("Start over.");
}

// CeeLo DICE ROLLS
function ceeLo(a, b, c) {

    // TRIPS CONDITION
    function trips() {

        if (a === b && b === c) {
            console.log("Trips - " + a + b + c + "Win is = " + win);

        } else {
            point();
        }
    }

    // POINT CONDITION
    function point() {
        
        let scoreBoard = document.getElementById("scoreBoard");

        if (a === b) {
            console.log("point - " + c);
            document.getElementById("scoreBoard").innerHTML = c;
            console.log("Win is = " + win);

        } else if (a === c) {
            console.log("point - " + b);
            document.getElementById("scoreBoard").innerHTML = b;
            console.log("Win is = " + win);

        } else if (b === c) {
            console.log("point - " + a);
            document.getElementById("scoreBoard").innerHTML = a;
            console.log("Win is = " + win);

        } else {
            fourFiveSix();
        }
    }

    // 4 5 6 CONDITION
    function fourFiveSix() {

        if (a === 4 && b === 5 && c === 6 || a === 4 && b === 6 && c === 5) {
            win = true;
            console.log("Win is = " + win + ". Instant win.");
            
            resetGame();

        } else if (a === 6 && b === 4 && c === 5 || a === 6 && b === 5 && c === 4) {
            win = true;
            console.log("Win is = " + win + ". Instant win.");
            
            resetGame();

        } else if (a === 5 && b === 6 && c === 4 || a === 5 && b === 4 && c === 6) {
            win = true;
            console.log("Win is = " + win + ". Instant win.");
            
            resetGame();

        } else {
            oneTwoThree();
        }
    }

    // 1 2 3 CONDITION
    function oneTwoThree() {

        if (a === 1 && b === 2 && c === 3 || a === 1 && b === 3 && c === 2) {
            console.log("Win is = " + win + ". Instant loss.");

        } else if (a === 3 && b === 1 && c === 2 || a === 3 && b === 2 && c === 1) {
            console.log("Win is = " + win + ". Instant loss.");

        } else if (a === 2 && b === 3 && c === 1 || a === 2 && b === 1 && c === 3) {
            console.log("Win is = " + win + ". Instant loss.");

        } else {
            console.log("Roll again. Win is = " + win);
        }
    }

    trips();
}