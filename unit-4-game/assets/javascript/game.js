// global variables
// var redGem = 0;
// var blueGem = 0;
// var yellowGem = 0;
// var greenGem = 0;

var numberToGet = 0;
var numberScore = 0;

var winCount = 0;
var loseCount = 0;

var gem = {
    red: {
        number: 0
    },
    blue: {
        number: 0
    },
    yellow: {
        number: 0
    },
    green: {
        number: 0
    },
    
};


// functions
var randomNumGen = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function() {
    numberScore = 0;
    numberToGet = randomNumGen(19, 120);

    gem.red.number = randomNumGen(1, 12);
    console.log(gem.red.number);
    gem.blue.number = randomNumGen(1, 12);
    console.log(gem.blue.number);
    gem.yellow.number = randomNumGen(1, 12);
    console.log(gem.yellow.number);
    gem.green.number = randomNumGen(1, 12);
    console.log(gem.green.number);

    $("#playerNumber").html(numberScore);
    $("#randomNumber").html(numberToGet);
}


var clickAddNumber = function(gem) {
    numberScore = numberScore + gem.number;
    console.log("score: " + numberScore);
    $("#playerNumber").html(numberScore);

    gameResult();
}

var gameResult = function() {

    if(numberScore > numberToGet) {
        alert("You lose");
        loseCount++;
        $("#loseCounter").html(loseCount);

        startGame();
    }

    else if(numberScore == numberToGet) {
        alert("Winner winner, crystal dinner!");
        winCount++;
        $("#winCounter").html(winCount);

        startGame();
    }
}


// main process
$("#button-red").on("click", function() {
    clickAddNumber(gem.red);
})

$("#button-blue").on("click", function() {
    clickAddNumber(gem.blue);
})

$("#button-yellow").on("click", function() {
    clickAddNumber(gem.yellow);
})

$("#button-green").on("click", function() {
    clickAddNumber(gem.green);
})

startGame();