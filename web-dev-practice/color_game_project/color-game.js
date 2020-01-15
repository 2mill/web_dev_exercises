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
let used = [];
for (var i = 0; i < squares.length; i++) {
    let rand = Math.floor(Math.random() * 6);
    while (used[rand]) rand = Math.floor(Math.random() * 6);
    used[rand] = true;
    squares[i].style.backgroundColor = colors[rand];
    squares[i].addEventListener("click", () => {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            alert("correct color");
        } else {
            alert("wrong color");
        }
    });
}
