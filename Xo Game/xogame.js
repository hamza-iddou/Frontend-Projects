let title = document.querySelector('.title');
let turn = 'x';
let games = 0;
let squares = [];
let gameOver = false;

function winner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }

    
    let winningCombinations = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9], 
        [1, 4, 7], [2, 5, 8], [3, 6, 9], 
        [1, 5, 9], [3, 5, 7]             
    ];

    for (let combo of winningCombinations) {
        if (
            squares[combo[0]] === squares[combo[1]] &&
            squares[combo[1]] === squares[combo[2]] &&
            squares[combo[0]] !== ''
        ) {
            for (let index of combo) {
                document.getElementById('item' + index).style.backgroundColor = 'black';
                document.getElementById('item' + index).style.color = 'white'; 
            }
            
            title.innerHTML = `<h1>${squares[combo[0]].toUpperCase()} <span>WINS!</span></h1>`;
            gameOver = true;
            setTimeout(function(){location.reload()}, 2000);
            return true;     
        }
    }
    return false; 
}

function game(id){
    if (gameOver) return;
    let element = document.getElementById(id);
    while ( element.innerHTML == '' && games < 9){
    if (turn === 'x' && element.innerHTML == '' ){
        element.innerHTML =  'x';
        turn = 'o';
        title.innerHTML = "<h1><span>O</span> Turn</h1>";
    }else if(turn === 'o' && element.innerHTML == '' ) {
        element.innerHTML = 'o';
        turn = 'x'
        title.innerHTML = "<h1><span>X</span> Turn</h1>";
    }
    games += 1;
    }
    if (games === 9){
        title.innerHTML = "<h1>GAME<span>OVER!</span> <span>RE</span>START!</h1>";
        setTimeout(function(){location.reload()},2000);
    }
    winner();
}