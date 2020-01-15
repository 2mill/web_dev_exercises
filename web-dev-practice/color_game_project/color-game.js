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
console.log(colors);
var squares = document.querySelectorAll(".square");
let used = [];
for (var i = 0; i < squares.length; i++) {
    let rand = Math.floor(Math.random() * 6);
    while (used[rand]) rand = Math.floor(Math.random() * 6);
    used[rand] = true;
    squares[i].style.backgroundColor = colors[rand];
}
let question = document.getElementsByClassName("question");