let audioTurn = new Audio("/assets/ting_tang.mp3");
let turn = "X"
let isgameover = false;
let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// Function to stop th event


// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('box-text');

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = "Player " + boxtext[e[0]].innerText + " Won"
            document.querySelector('.info').style.color = "Blue";
            document.querySelector('.info').style.fontSize = "5rem";
            isgameover = true

            if (isgameover) {
                console.log("" + e[0] + e[1] + e[2]);
                boxtext[e[0]].style.color = "blue";
                boxtext[e[1]].style.color = "blue";
                boxtext[e[2]].style.color = "blue";

            }

        }

    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
        let boxtext = element.querySelector('.box-text');
        element.addEventListener('click', () => {
            if(isgameover)
            {
                return;
            }
            else(boxtext.innerText === '')
            {
                boxtext.innerText = turn;
                turn = changeTurn();
                audioTurn.play();
                checkWin();
                if (!isgameover) {
                    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                }
            }
        })
    
})



// Add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.box-text');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
        wins.forEach(e => {
            boxtexts[e[0]].style.color = "black";
            boxtexts[e[1]].style.color = "black";
            boxtexts[e[2]].style.color = "black";
        })

    });
    turn = "X";
    isgameover = false
    document.querySelector('.info').style.color = "black";
    document.querySelector('.info').style.fontSize = "24px";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})
