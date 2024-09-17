// const cards = [
//     {id: 1, image: "p1.png"},
//     {id: 2, image: "p2.png"},
//     {id: 3, image: "p3.png"},
//     {id: 4, image: "p4.png"},
//     {id: 5, image: "p5.png"},
//     {id: 6, image: "p6.png"},
//     {id: 7, image: "p7.png"},
//     {id: 8, image: "p8.png"},
// ];

// let moveCount = 0;
// let startTime, timerInterval;
// let timerStarted = false;
// let firstCard, secondCard;
// let lockBoard = false;
// let matches = 0;
// let cardArray = [...cards, ...cards];
// cardArray.sort(() => 0.5 - Math.random());
// const gameBoard = document.querySelector(".memory-game");

// function createCard(card) {
//     const cardElement = document.createElement("div");
//     cardElement.classList.add("card");
//     cardElement.dataset.id = card.id;
//     cardElement.innerHTML= `
//         <div class = "font-face"><img src="${card.image}" alt="Card Img"></div>
//         <div class = "back-face"><img src="back.png" alt="Card Img"></div>
//         `
//         cardElement.add("click", flipCard);
//         gameBoard.appendChild(cardElement);
// }   

// cardArray.forEach(createCard); 


// function flipCard() {
//     if(lockBoard) return;
//     if(this === firstCard) return;
//     if(!timerStarted) {
//         startTimer();
//         timerStarted = true;
//     }
//     this.classList.add("flip");
//     if(!firstCard) {
//         firstCard = this;
//         return;
//     }
//     secondCard = this;
//     lockBoard = true;
//     updateMoveCounter();
//     checkForMatch();
// }

// function startTimer() {
//     startTime = new Date();
//     timerInterval = setInterval(() => {
//         const elapsedTime = new Date() - startTime;
//         const minutes = Math.floor(elapsedTime / 60000);
//         const seconds = Math.floor((elapsedTime % 60000) / 1000);
//         document.getElementById("timer").textContent = `Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')};`
//     },1000);
// }

// function updateMoveCounter() {
//     moveCount++;
//     document.getElementById("moveCounter").textContent = `Move: ${moveCount}`;
// }

// function checkForMatch() {
//     let isMatch = firstCard.dataset.id == secondCard.dataset.id;
//     isMatch ? disableCards() : unflipCards();
// }

// function disableCards() {
//     firstCard.removeEventListener("click", flipCard);
//     secondCard.removeEventListener("click", flipCard);

//     resetBoard();
//     matches++;
//     if(matches == cards.length) {
//         stopTimer();
//         winningMessage.classList.add("show"); 
//         setTimeout(function() {
//             winningMessage.classList.remove("show");
//         },2000);
//     }
// }

// function unflipCards() {
//     setTimeout(() => {
//         firstCard.classList.remove("flip");
//         secondCard.classList.remove("flip");
//         resetBoard();
//     },1500);
// }

// function resetBoard(){
//     [firstCard, secondCard, lockBoard] = [null,null,false];
// }

// function stopTimer() {
//     clearInterval(timerInterval);
// }

// function resetGame() {
//     moveCount = -1;
//     updateMoveCounter();
//     resetTimer();
//     timerStarted = false;
//     [firstCard,secondCard,lockBoard] = [null,null,false];
//     matches = 0;
//     cardArray.sort(() => 0.5 - Math.random());
//     while (gameBoard.firstChild) {
//         gameBoard.removeChild(gameBoard.firstChild);
//     }
//     cardArray.forEach(createCard);
// }

// document.getElementById("resetButton").addEventListener("click", resetGame);
// function resetTimer() {
//     clearInterval(timerInterval);
//     document.getElementById("timer").textContent = "Timer: 00:00"
// }

// ---------------------------------------------------------------------------------------


var cardList = [
    "p1",
    "p2",
    "p3",
    "p4",
    "p5",
    "p6",
    "p7",
    "p8",
    "p9",
    "p10",
]

var cardSet;
var board = [];
var rows = 4;
var columns = 5;
var errors = 0;

var card1Selected;
var card2Selected;

window.onload = function() {
    shuffleCards();
    startGame();
}

function shuffleCards() {
    cardSet = cardList.concat(cardList); //two of each card
    console.log(cardSet);
    //shuffle cards
    for (let i = 0; i < cardSet.length; i++ ) {
        let j = Math.floor(Math.random() * cardSet.length);  //get random cards
        //swap
        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
    console.log(cardSet);
}

function startGame() {
    // arrange the board 4x5
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let cardImg = cardSet.pop();
            row.push(cardImg); //JS

            //<img id="0-0" class="card" src="p10.png">
            let card = document.createElement("img");
            card.id = r.toString() + "-" + c.toString();
            card.src = cardImg + ".png";
            card.addEventListener("click", selectCard);
            card.classList.add("card");
            document.getElementById("board").append(card);
        }
        board.push(row);
    }
    console.log(board);
    setTimeout(hideCards, 1000);
}

function hideCards() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let card = document.getElementById(r.toString() + "-" + c.toString());
            card.src = "card_back.png";
        }
    }
}

function selectCard() {

    if (this.src.includes("card_back")) {
        if (!card1Selected) {
            card1Selected = this;

            let coords = card1Selected.id.split("-"); //"0-1" --> ["0", "1"]
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card1Selected.src = board[r][c] + ".png";
        }
        else if (!card2Selected && this != card1Selected) {
            card2Selected = this;

            let coords = card2Selected.id.split("-"); //"0-1" --> ["0", "1"]
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card2Selected.src = board[r][c] + ".png";
            setTimeout(update, 1000);
            
        }
    }
}

function update() {
    //if cards aren't the same, flip both back
    if (card1Selected.src != card2Selected.src) {
        card1Selected.src = "card_back.png";
        card2Selected.src = "card_back.png";
        errors++;
        document.getElementById("errors").innerHTML = errors;
        // console.log(errors)
    }
    card1Selected = null;
    card2Selected = null;
}