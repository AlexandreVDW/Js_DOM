let currTaupeTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid in html
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setTaupe, 1000);
    setInterval(setPlant, 2000);
}

function getRandomTile() {
    //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setTaupe() {
    if (gameOver) {
        return;
    }
    if (currTaupeTile) {
        currTaupeTile.innerHTML = "";
    }
    let taupe = document.createElement("img");
    taupe.src = "./assets/taupe.png";

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num) {
        return;
    }
    currTaupeTile = document.getElementById(num);
    currTaupeTile.appendChild(taupe);
}

function setPlant() {
    if (gameOver) {
        return;
    }
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "./assets/piranha-plant.png";

    let num = getRandomTile();
    if (currTaupeTile && currTaupeTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currTaupeTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
    }
}