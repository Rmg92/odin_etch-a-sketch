// *DOM elements*

const sketchPad = document.getElementById("sketchPad");
const square = document.getElementsByClassName("square");
const sizeSlider = document.getElementById("sizeSlider");
const sizeOutput = document.querySelector(".size");
const newSketchBtn = document.querySelector(".newSketch");
const applySettingsBtn = document.querySelector(".applySettingsBtn");
const colorPicker = document.querySelector(".colorPicker");
const gradientModeSwitch = document.querySelector(".gradientModeSwitch");

// *DOM elements*

// *Stored values*

let squaresPerSide = 16;
let pickedColor = "#000000";
let gradientMode = false;
let gradientShift = 30;

// *Stored values*

// *Sketch pad functions*

function createGrid(squaresPerSide, totalSquares) {
    for (let i = 0; i < totalSquares; i++) {
        const squareSize = 500 / squaresPerSide;

        // Creates a new div with a white background and with the calculated width and heigth 
        const square = document.createElement("div");
        square.style.backgroundColor = `rgb(${255}, ${255}, ${255})`;
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

// adds an event listener to the squares that changes it's background color on mouse over 
function paintSquares(totalSquares) {
    for (let i = 0; i < totalSquares; i++) {
        square[i].addEventListener("mouseover", function () {
            if (gradientMode == false) {
                this.style.backgroundColor = `${pickedColor}`;
                console.log("Color Mode");
            } else {
                let currentColor = (this.style.backgroundColor).replace(/[^\d\,]/g, '').split(",");               
                let r = currentColor[0];
                let g = currentColor[1];
                let b = currentColor[2];
                this.style.backgroundColor = `rgb(${r-gradientShift}, ${g-gradientShift}, ${b-gradientShift})`;
                console.log("Gradient Mode");
            }
        });
    }

}

// Cleans the pad and creates a new one with updated settings
function newSketch() {
    let totalSquares = squaresPerSide * squaresPerSide;
    cleanPad();
    createGrid(squaresPerSide, totalSquares);
    paintSquares(totalSquares);
    sizeOutput.textContent = squaresPerSide + " x " + squaresPerSide;
}

// removes all the squares from the pad
function cleanPad() {
    while (sketchPad.firstChild) {
        sketchPad.removeChild(sketchPad.firstChild);
    }
}

// *Sketch pad functions*

// *Settings panel functions*

// Takes the value from the size slider and assigns it to the squares per side variable to be used to create the squares
sizeSlider.oninput = function () {
    squaresPerSide = this.value;
    sizeOutput.textContent = squaresPerSide + " x " + squaresPerSide;
}

newSketchBtn.addEventListener("click", function () {
    newSketch();
})

colorPicker.oninput = function () {
    pickedColor = this.value;
}

gradientModeSwitch.oninput = function () {
    gradientMode = this.checked;
}

// *Settings panel functions*

document.body.onload = newSketch();