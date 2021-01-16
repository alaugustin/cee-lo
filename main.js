const roll = document.getElementById("rollButton");
const LOSS = '123';
const WIN = '456';

roll.onclick = function () {
    randNum();
};

function randNum() {
    let sides = 6,
        a = Math.floor(Math.random() * sides) + 1,
        b = Math.floor(Math.random() * sides) + 1,
        c = Math.floor(Math.random() * sides) + 1;

    // var array = [a, b, c];
    printDice(a, b, c);
    compare(a, b, c);
}

function printDice(a, b, c) {
    document.getElementById("die1").innerHTML = a;
    document.getElementById("die2").innerHTML = b;
    document.getElementById("die3").innerHTML = c;
}

function compare(a, b, c) {
    // console.log("die1 is " + a, "die2 is " + b, "die3 is " + c);
    function trips() {

        if (a === b && b === c) {
            console.log("trips - " + a + b + c);
        } else {
            point();
        }
    }

    function point() {
        let scoreBoard = document.getElementById("scoreBoard");
        if (a === b) {
            console.log("point - " + c);
            document.getElementById("scoreBoard").innerHTML = c;
        } else if (a === c) {
            console.log("point - " + b);
            document.getElementById("scoreBoard").innerHTML = b;
        } else if (b === c) {
            console.log("point - " + a);
            document.getElementById("scoreBoard").innerHTML = a;
        } else {
            fourFiveSix();
        }
    }

    function fourFiveSix() {
        if (a === 4 && b === 5 && c === 6 || a === 4 && b === 6 && c === 5) {
            console.log("Winner 456");
        } else if (a === 6 && b === 4 && c === 5 || a === 6 && b === 5 && c === 4) {
            console.log("Winner 456");
        } else if (a === 5 && b === 6 && c === 4 || a === 5 && b === 4 && c === 6) {
            console.log("Winner 456");
        } else {
            oneTwoThree();
        }
    }

    function oneTwoThree() {
        if (a === 1 && b === 2 && c === 3 || a === 1 && b === 3 && c === 2) {
            console.log("Loser 123");
        } else if (a === 3 && b === 1 && c === 2 || a === 3 && b === 2 && c === 1) {
            console.log("Loser 123");
        } else if (a === 2 && b === 3 && c === 1 || a === 2 && b === 1 && c === 3) {
            console.log("Loser 123");
        } else {
            console.log("roll again");
        }
    }

    trips();
}