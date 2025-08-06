// let div1 = document.getElementById("first")
// let parentDiv = document.querySelectorAll('.sqs')
// let btn = document.getElementById('btn')
// let div2 = document.getElementById("second")
// let div3 = document.getElementById("third")
// let div4 = document.getElementById("fourth")
// let div5 = document.getElementById("fifth")
// let div6 = document.getElementById("sixth")
// let div7 = document.getElementById("seventh")
// let div8 = document.getElementById("eighth")
// let div9 = document.getElementById("ninth")
// let p1 = document.getElementById("p1")
// let p2 = document.getElementById("p2")
// // let player1 = document.getElementById("player1")
// // let player2 = document.getElementById("player2")
// let mainDiv = document.querySelectorAll('.mainDiv')
// function toggleTurn(player) {
//     const p1 = document.getElementById('player1');
//     const p2 = document.getElementById('player2');
  
//     if (sign === "X") {
//       p1.classList.add('active');
//       p2.classList.remove('active');
//     } else {
//       p2.classList.add('active');
//       p1.classList.remove('active');
//     }
//   }
  
// btn.addEventListener('click', () => {
//     for(let ele of parentDiv)
//     console.log(ele.innerText = "");
//     p1.innerText = "0"
//     p2.innerText = "0"
// })
// let sign = "X"
// function checkWinner(sign){
//     if ((div1.innerText == div2.innerText ) && (div2.innerText == div3.innerText)  && div1.innerText!=""){
//         if (sign == "X"){
//             alert("player one won the game")
//             let store = p1.innerText
//             store++
//             p1.innerText = store
//         }
//         else{
//             alert("player two won the game")
//             let store = p2.innerText
//             store++
//             p2.innerText = store
//         }
//         for(let ele of parentDiv)
//             console.log(ele.innerText = "");
//         sign = "X"
//     }
//     else if ((div4.innerText == div5.innerText ) && (div5.innerText == div6.innerText)  && div4.innerText!=""){
//         if (sign == "X"){
//             alert("player one won the game")
//             let store = p1.innerText
//             store++
//             p1.innerText = store
//         }
//         else{
//             alert("player two won the game")
//             let store = p2.innerText
//             store++
//             p2.innerText = store
//         }
//         for(let ele of parentDiv)
//             console.log(ele.innerText = "");
        
//     }
//     else if ((div7.innerText == div8.innerText ) && (div8.innerText == div9.innerText)  && div7.innerText!=""){
//         if (sign == "X"){
//             alert("player one won the game")
//             let store = p1.innerText
//             store++
//             p1.innerText = store
//         }
//         else{
//             alert("player two won the game")
//             let store = p2.innerText
//             store++
//             p2.innerText = store
//         }
//         for(let ele of parentDiv)
//             console.log(ele.innerText = "");
        
//     }
//     else if ((div1.innerText == div4.innerText ) && (div4.innerText == div7.innerText)  && div1.innerText!=""){
//         if (sign == "X"){
//             alert("player one won the game")
//             let store = p1.innerText
//             store++
//             p1.innerText = store
//         }
//         else{
//             alert("player two won the game")
//             let store = p2.innerText
//             store++
//             p2.innerText = store
//         }
//         for(let ele of parentDiv)
//             console.log(ele.innerText = "");
        
//     }
//     else if ((div2.innerText == div5.innerText ) && (div5.innerText == div8.innerText)  && div2.innerText!=""){
//         if (sign == "X"){
//             alert("player one won the game")
//             let store = p1.innerText
//             store++
//             p1.innerText = store
//         }
//         else{
//             alert("player two won the game")
//             let store = p2.innerText
//             store++
//             p2.innerText = store
//         }
//         for(let ele of parentDiv)
//             console.log(ele.innerText = "");
        
//     }
//     else if ((div3.innerText == div6.innerText ) && (div6.innerText == div9.innerText)  && div3.innerText!=""){
//         if (sign == "X"){
//             alert("player one won the game")
//             let store = p1.innerText
//             store++
//             p1.innerText = store
//         }
//         else{
//             alert("player two won the game")
//             let store = p2.innerText
//             store++
//             p2.innerText = store
//         }
//         for(let ele of parentDiv)
//             console.log(ele.innerText = "");
        
//     }
//     else if ((div1.innerText == div5.innerText ) && (div5.innerText == div9.innerText)  && div1.innerText!=""){
//         if (sign == "X"){
//             alert("player one won the game")
//             let store = p1.innerText
//             store++
//             p1.innerText = store
//         }
//         else{
//             alert("player two won the game")
//             let store = p2.innerText
//             store++
//             p2.innerText = store
//         }
//         for(let ele of parentDiv)
//             console.log(ele.innerText = "");
        
//     }
//     else if ((div3.innerText == div5.innerText ) && (div5.innerText == div7.innerText)  && div3.innerText!=""){
//         if (sign == "X"){
//             alert("player one won the game")
//             let store = p1.innerText
//             store++
//             p1.innerText = store
//         }
//         else{
//             alert("player two won the game")
//             let store = p2.innerText
//             store++
//             p2.innerText = store
//         }
//         for(let ele of parentDiv)
//             console.log(ele.innerText = "");
        
//     }
//     else if (div1.innerText!="" && div2.innerText!="" && div3.innerText!="" && div4.innerText!="" && div5.innerText!="" && div6.innerText!="" && div7.innerText!="" && div8.innerText!="" && div9.innerText!=""){
//         alert("tie")
//         for(let ele of parentDiv)
//             console.log(ele.innerText = "");
//     }


//     // console.log(div1.textContent);
//     // console.log(div2.textContent);
    
// }
// if (sign == "X"){
//     player1.style.backgroundImage =  "linear-gradient(90deg , #15fe03, #57e361)"
//     player2.style.backgroundImage = `linear-gradient(90deg , #000, #b0c9b7)`
// }
// let arr = []
// function putvalue(val){
//     let div = document.getElementById(val)
//     if (div.textContent == ""){
//         div.textContent = sign;
//         arr.push(sign)
//         console.log(arr);
//         if (sign == "X"){
//             sign = "O"
//             toggleTurn()
//         }
//         else{
//             sign = "X"
//             toggleTurn()
//         }
//     }
//     else {
//         alert('no')
//     }
// }
// function input(ide){
//     let val = ide
//     putvalue(val)
//     saveData()
//     setTimeout(()=>{
//         checkWinner(sign)
//     }, 10)
// }
// function saveData(){
//     for (let ele of parentDiv){
//         localStorage.setItem("item", ele.textContent)
//     }
    
    
// }
// function showData(){
//     for (let ele of parentDiv){
//         ele.textContent=  localStorage.setItem("item" )
//     }
    
// }
// showData()


// Select game elements
let parentDiv = document.querySelectorAll('.sqs');
let btn = document.getElementById('btn');

let div1 = document.getElementById("first");
let div2 = document.getElementById("second");
let div3 = document.getElementById("third");
let div4 = document.getElementById("fourth");
let div5 = document.getElementById("fifth");
let div6 = document.getElementById("sixth");
let div7 = document.getElementById("seventh");
let div8 = document.getElementById("eighth");
let div9 = document.getElementById("ninth");

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

let sign = "X";

// Toggle UI turn indication
function toggleTurn(player) {
    console.log("there");
    if (player === "X") {
        p1.classList.add('active');
        p2.classList.remove('active');
    } else {
        p2.classList.add('active');
        p1.classList.remove('active');
    }
}

// Start new game
btn.addEventListener('click', () => {
    for (let ele of parentDiv) ele.innerText = "";
    p1.innerText = "0";
    p2.innerText = "0";
    sign = "X";
    toggleTurn(sign);
    localStorage.clear();
});

// Check for winner
function checkWinner() {
    const combos = [
        [div1, div2, div3],
        [div4, div5, div6],
        [div7, div8, div9],
        [div1, div4, div7],
        [div2, div5, div8],
        [div3, div6, div9],
        [div1, div5, div9],
        [div3, div5, div7]
    ];

    for (let combo of combos) {
        const [a, b, c] = combo;
        if (a.innerText !== "" && a.innerText === b.innerText && b.innerText === c.innerText) {
            let winner = a.innerText;
            if (winner === "X") {
                alert("Player One won the game");
                let store = parseInt(p1.innerText);
                store++;
                p1.innerText = store;
            } else {
                alert("Player Two won the game");
                let store = parseInt(p2.innerText);
                store++;
                p2.innerText = store;
            }

            resetBoard();
            return;
        }
    }

    // Check for tie
    const allFilled = [...parentDiv].every(div => div.innerText !== "");
    if (allFilled) {
        alert("It's a tie!");
        resetBoard();
    }
}

// Clear board without resetting score
function resetBoard() {
    for (let ele of parentDiv) {
        ele.innerText = "";
    }
    sign = "X";
    toggleTurn(sign);
    saveData();
}

// Set value on cell
function putvalue(id) {
    let div = document.getElementById(id);
    if (div.innerText === "") {
        div.innerText = sign;
        saveData();
        checkWinner();
        sign = sign === "X" ? "O" : "X";
        toggleTurn(sign);
    } else {
        alert("Box already filled!");
    }
}

// Input handler
function input(id) {
    putvalue(id);
}

// Save state to localStorage
function saveData() {
    const gameState = {};
    parentDiv.forEach(div => {
        gameState[div.id] = div.innerText;
    });
    gameState.score1 = p1.innerText;
    gameState.score2 = p2.innerText;
    gameState.turn = sign;

    localStorage.setItem("tictactoe", JSON.stringify(gameState));
}

// Show saved state on load
function showData() {
    const data = JSON.parse(localStorage.getItem("tictactoe"));
    if (data) {
        parentDiv.forEach(div => {
            div.innerText = data[div.id];
        });
        p1.innerText = data.score1 || "0";
        p2.innerText = data.score2 || "0";
        sign = data.turn || "X";
        toggleTurn(sign);
    } else {
        toggleTurn(sign);
    }
}

// Load saved data on start
showData();
