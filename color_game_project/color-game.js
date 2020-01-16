let randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}
let randomColors = (count) => {
    let colors = [];
    for (let i = 0; i < count; i++) {
        colors.push(randomColor());
    }
    return colors;
}
let changeAllBlocksToColor = (color, selector)=> {
    for (let i = 0; i < selector.length; i++) {
        selector[i].style.backgroundColor = color; 
    }
}
// let setup = (count) => {
//     let colors = randomColors(6);
//     console.log(colors);
//     pickedColor = Math.floor(Math.random() * colors.length);
//     let squares = document.querySelectorAll(".square");
//     let messageDisplay = document.querySelector("#message");
//     var colorDisplay = document.getElementById("color-display");
//     let h1 = document.querySelector("h1");
//     colorDisplay.textContent = colors[pickedColor];
//     for (var i = 0; i < squares.length; i++) {
//         console.log("adding " + colors[i] + " to square");
//         squares[i].style.backgroundColor= colors[i];

//         squares[i].addEventListener("click", function() {
//             let clickedColor = this.style.backgroundColor;
//             if (clickedColor === colors[pickedColor]) {
//                 messageDisplay.textContent = "Correct";
//                 changeAllBlocksToColor(this.style.backgroundColor, squares);
//                 h1.style.backgroundColor = this.style.backgroundColor;
//             } else {
//                 this.style.backgroundColor= "#232323"
//                 messageDisplay.textContent = "Try Again";
//             }
//         });
//     }
//     return true;
// } 
let createGame = (difficulty) => {
   let container = document.querySelector("#container");
   colors = randomColors(difficulty);
   let pickedColor = Math.floor(Math.random() * colors.length);
   for (let i = 0; i < colors.length; i++) {
       let square = document.createElement("div");
       square.className = "square";
       square.style.backgroundColor = colors[i]; 
       square.addEventListener("click", () => {
           console.log("cllicked a square");
           if (square.style.backgroundColor === colors[pickedColor]) {
               console.log("yes");
               let squares = document.querySelectorAll(".square");
               console.log(squares);
               for (let j = 0; j < squares.length; j++) {
                   squares[j].style.backgroundColor = square.style.backgroundColor;
               }
           } else {
               console.log("no");
           }
       });
       container.appendChild(square);
   }
   return true;
}
let clearBoard = () => {
    let container = document.querySelector("#container");
    let square = document.querySelectorAll(".square");
    for (let i = 0; i < square.length; i++) {
        container.removeChild(square[i]);
    }
}




let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    clearBoard();
    createGame(7);
});
