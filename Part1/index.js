console.log('Hello World')

let board = [];


function play(clickedId){
   let playerSpan= document.getElementById('player');
   let clickedElement = document.getElementById(clickedId);

   if (playerSpan.innerText === 'X') {
       playerSpan.innerText = '0';
       clickedElement.innerText = 'X';
       board[clickedId] = 'X';
   } else {
       playerSpan.innerText = 'X';
       clickedElement.innerText= '0';
       board[clickedId] = '0';
   }
   let topLeft = board[0];
   let topCenter = board[1];
   let topRight = board[2];
   let midLeft = board[3];
   let midCenter = board[4];
   let midRight = board[5];
   let bottomLeft = board[6];
   let bottomCenter = board[7];
   let bottomRight = board[8];
 if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
    alert(`${topLeft} is the winner`);
    return;
}if (midLeft !== undefined && midLeft === midCenter && midLeft === midRight){
    alert(`${midLeft} is the winner`);
    return;
}if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
    alert(`${bottomLeft} is the winner`);
    return;
}if (topLeft !== undefined && topLeft === midLeft && topLeft === bottomLeft){
    alert(`${topleft} is the winner`);
    return;
}if (topCenter !== undefined && topCenter === midCenter && topCenter === bottomCenter){
    alert(`${topCenter} is the winner`);
    return;
}if (topRight !== undefined && topRight === midRight && topRight === bottomRight){
    alert(`${topRight} is the winner`);
    return;
}if (topLeft !== undefined && topLeft === midCenter && topLeft === bottomRight){
    alert(`${topLeft} is the winner`);
    return;
}if (topRight !== undefined && topRight === midCenter && topRight === bottomLeft){
    alert(`${topRight} is the winner`);
    return;
} 
let boardFull = true;
for (let i = 0; i <= 8; i++){
    if (board[i] === undefined) {
        boardFull = false;
    }
}
if (boardFull === true) {
    alert ("Cat's Game, there is no winner");
}
}

function clearBoard (){
    let square = document.getElementsByTagName('td')
    console.log(square)
    for (let i =0; i< square.length; i++){
    square[i].innerText=''
    }
    board = []
    return board
}
