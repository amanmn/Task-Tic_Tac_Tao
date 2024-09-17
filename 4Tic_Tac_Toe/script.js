const boxes = document.querySelectorAll(".box");
const resetbtn = document.querySelector(".restartbtn");
const newGamebtn = document.querySelector("#newbtn");
const msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;//playerX, player0

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");

        if (turnO) {  //player_O
            box.innerHTML = "O";
            turnO = false;
        }
        else {      //player_X
            box.innerHTML = "X";
            turnO = true;
        }
        box.classList.add('disabled');
        checkWinner();
    });
});
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.classList.add('disabled');
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.classList.remove('disabled');
        box.innerHTML = "";
    }
}


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);
                showWinner(pos1);
            }
        }
    }
}



newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);