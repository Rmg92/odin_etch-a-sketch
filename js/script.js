const sketchPad = document.getElementById("sketchPad");
const square = document.getElementsByClassName("square");
const sizeSlider = document.getElementById("sizeSlider");
const sizeOutput = document.querySelector(".size");
const newSketch = document.querySelector(".newSketch");

let squaresPerSide = 16;

sizeSlider.oninput = function() {
    squaresPerSide = this.value;
    sizeOutput.textContent = squaresPerSide + " x " + squaresPerSide;
  }

newSketch.addEventListener("click", function () {
    settings();
})

function addSquare(squaresPerSide, totalSquares) {
    for (let i = 0; i < totalSquares; i++) {
        const squareSize = 500 / squaresPerSide;

        // Creates a new div with a white background and with the calculated width and heigth 
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

function settings() {
    let totalSquares = squaresPerSide * squaresPerSide;
    cleanPad();
    addSquare(squaresPerSide, totalSquares);
    paintSquares(totalSquares);
    sizeOutput.textContent = squaresPerSide + " x " + squaresPerSide;
}

document.body.onload = settings();