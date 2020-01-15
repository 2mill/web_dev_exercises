let randomColors = (count) => {
    let colors = [];
    for (let i = 0; i < count; i++) {
        colors.push(
            "rgb(" 
            + Math.floor(Math.random() * 256)
            +", "
            + Math.floor(Math.random() * 256)
            +", "
            + Math.floor(Math.random() * 256)
            +")"
        )
    }
    return colors;
}
let colors = randomColors(6);

let pickedColor = Math.floor(Math.random() * colors.length);

var squares = document.querySelectorAll(".square");

var colorDisplay = document.getElementById("color-display");

colorDisplay.textContent = colors[pickedColor];

for (var i = 0; i < squares.length; i++) {

    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function() {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === colors[pickedColor]) {
            alert("correct color");
        } else {
            alert("wrong color");
        }
    });
}
