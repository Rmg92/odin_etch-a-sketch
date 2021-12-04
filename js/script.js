document.body.onload = askForSquares;

const sketchPad = document.getElementById("sketchPad");
const square = document.getElementsByClassName("square");

// resets the drawing when clicking the reset button
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function () {
    cleanPad();
    askForSquares();
})

function askForSquares() {
    let squaresPerSide = Number(window.prompt("How many squares per size do you want?", ""));
    let totalSquares = squaresPerSide * squaresPerSide;
    addSquare(squaresPerSide, totalSquares);
    paintSquares(totalSquares);
}

function addSquare(squaresPerSide, totalSquares) {
    // Loops 16 times to create 16 square divs
    for (let i = 0; i < totalSquares; i++) {
        const squareSize = 500 / squaresPerSide;

        // Creates a new div with a white background and 10px of width and heigth 
        const square = document.createElement("div");
        square.style.backgroundColor = "white";
        square.style.borderColor = "black";
        square.style.borderStyle = "solid";
        square.style.borderWidth = "1px"
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.className = "square"

        //inserts the newly created div on the sketchPad div        
        sketchPad.insertAdjacentElement("afterbegin", square);
    }
}

function paintSquares(totalSquares) {
    // and loops trough them adding an eventListener for mouse hover
    for (let i = 0; i < totalSquares; i++) {
        square[i].addEventListener("mouseover", function () {
            this.style.backgroundColor = "black";
        });
    }
}

function cleanPad() {
    while (sketchPad.firstChild) {
        sketchPad.removeChild(sketchPad.firstChild);
    }
}