document.body.onload = addSquare;

function addSquare() {
    // Loops 16 times to create 16 square divs
    for (let i = 0; i < 256; i++) {

        const squareSize = 500 / 16;

        // Creates a new div with a black background and 10px of width and heigth 
        const square = document.createElement("div");
        square.style.backgroundColor = "white";
        square.style.borderColor = "black";
        square.style.borderStyle = "solid";
        square.style.borderWidth = "1px"
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.className = "square"

        //inserts the newly created div on the sketchPad div
        const sketchPad = document.getElementById("sketchPad");
        sketchPad.insertAdjacentElement("afterbegin", square);

    }
    paintSquares();
}

function paintSquares() {
    // gets all the small squares
    const squareToPaint = document.getElementsByClassName("square");
    // and loops trough them adding an eventListener for mouse hover
    for (let i = 0; i < 256; i++) {
        squareToPaint[i].addEventListener("mouseover", function () {
            this.style.backgroundColor = "black";
        });
    }
}
