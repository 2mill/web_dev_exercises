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
let createGame = (difficulty) => {
   let container = document.querySelector("#container");
   colors = randomColors(difficulty);
   let pickedColor = Math.floor(Math.random() * colors.length);
   setDisplays(colors[pickedColor]);
   for (let i = 0; i < colors.length; i++) {
       let square = document.createElement("div");
       square.className = "square";
       square.style.backgroundColor = colors[i]; 
       let msg = document.querySelector("#message");
       square.addEventListener("click", () => {
           if (square.style.backgroundColor === colors[pickedColor]) {
               msg.textContent = "Correct!";
               document.querySelector("#reset").textContent = "Play Again?";
               let squares = document.querySelectorAll(".square");
               for (let j = 0; j < squares.length; j++) {
                   squares[j].style.backgroundColor = square.style.backgroundColor;
               }
               document.querySelector("h1").style.backgroundColor = square.style.backgroundColor;
           } else {
              msg.textContent = "Wrong Answer";
              square.style.backgroundColor = "#232323";
           }
       });
       container.appendChild(square);
   }
   return true;
}

let setDisplays = (color) => {
    document.querySelector("#message").textContent = "";

    {
        document.querySelector("#color-display").textContent = color;
    }
}

let clearBoard = () => {
    let container = document.querySelector("#container");
    let square = document.querySelectorAll(".square");
    for (let i = 0; i < square.length; i++) {
        container.removeChild(square[i]);
    }
    document.querySelector("h1").style.backgroundColor= "#232323";
}

let startGame = () => {
    createGame(6);
}
let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    clearBoard();
    createGame(6);
});
startGame();

document.querySelector("#easy").addEventListener("click", () => {
    document.querySelector("#easy").className = "difficulty-selected";
    document.querySelector("#hard").className = "";
});
document.querySelector("#hard").addEventListener("click", () => {
    document.querySelector("#hard").className = "difficulty-selected";
    document.querySelector("#easy").className = "";
});
