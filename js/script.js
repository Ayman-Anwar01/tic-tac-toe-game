let boxes = document.querySelectorAll(".box");
let ResetBtn = document.querySelector(".primary-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let gameHolder = document.querySelector(".game-wrap");
let msg = document.querySelector("#msg");
let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

//...Reset function...
const resetGame = () => {
    let turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

// ...Box Click... 
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
})


// ...disable...
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// ...enable...
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

// ...winner show...
const showWinner = (winner) => {
    msg.innerText = `Congratulaions! Winner is ${winner} `;
    msg.style.padding = "15px";
    msg.style.color = "rgb(116, 79, 146)";
    msgContainer.classList.remove("hide");
    disableBoxes();
    game();
}

// ...Patterns...
const checkWinner = () => {
    for (let pattern of winPattern) {
        let postion1Value = boxes[pattern[0]].innerText;
        let postion2Value = boxes[pattern[1]].innerText;
        let postion3Value = boxes[pattern[2]].innerText;

        if (postion1Value != "" && postion2Value != "" && postion3Value != "") {
            if (postion1Value === postion2Value && postion2Value === postion3Value) {
                showWinner(postion1Value);
            }
        }
    }
}


// ...for new game...
const newGame = () => {
    location.reload();
}

const againGame = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


const game = () => {
    if (gameHolder) {
        gameHolder.style.display = "none";
    }
}

newGameBtn.addEventListener("click", newGame);
ResetBtn.addEventListener("click", againGame);



