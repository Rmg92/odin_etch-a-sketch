document.body.onload = addSquare;

function addSquare() {
    // Loops 16 times to create 16 square divs
    for (let i = 0; i < 256; i++) {

        const squareSize = 500/16;

        // Creates a new div with a black background and 10px of width and heigth 
        const square = document.createElement("div");
        square.style.backgroundColor = "white";
        square.style.borderColor = "black";
        square.style.borderStyle = "solid";
        square.style.borderWidth = "1px"
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        //inserts the newly created div on the sketchPad div
        const sketchPad = document.getElementById("sketchPad");
        sketchPad.insertAdjacentElement("afterbegin", square);
    }

}