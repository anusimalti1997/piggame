'use strict';

// const rollbtn = document.querySelector('.btn--roll');
// const diceimg = document.querySelector('.dice');
// rollbtn.addEventListener('click',function(){
//     let randomnum = Math.floor(Math.random() * (6 - 1 + 1)) + 1
//     console.log(randomnum)
//     diceimg.setAttribute('src','dice-'+randomnum.toString()+'.png')
// })

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

score0.textContent = 0 ;
score1.textContent = 0 ;
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0  ;
let score = [0,0];
let gotwinner = false ; 

const switchplayer = function(){
    currentScore=0;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore ; 
    activePlayer = activePlayer == 0 ? 1 :0;
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
}

const newGame = function(){
    gotwinner = false ; 
    score=[0,0];
    currentScore=0;
    activePlayer=0;
    score0.textContent = 0 ;
    score1.textContent = 0 ;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore ; 
    diceEl.classList.add('hidden');
    player0.classList.add('player--active')
    player0.classList.remove('player--winner')
    player1.classList.remove('player--winner')
    player1.classList.remove('player--active')
    document.querySelector(`#current--0`).textContent = currentScore ;
    document.querySelector(`#current--1`).textContent = currentScore ;
}

btnRoll.addEventListener('click',function(){
    if(gotwinner==true){
        newGame();
        return ;
    }
    const dice = Math.trunc(Math.random() * 6) + 1 ;
    diceEl.classList.remove('hidden')
    diceEl.src= `dice-${dice}.png`;

    if(dice != 1) {
        currentScore += dice ;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore ; 
        
    }else {
        score[activePlayer]=0;
        switchplayer();
       
    }



})

btnNew.addEventListener('click',function(){
    newGame();

})

btnHold.addEventListener('click',function(){

    if(gotwinner==true){
        newGame();
        return ;
    }

    score[activePlayer] +=currentScore;

    if(score[activePlayer] > 20){

        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player-active')
        gotwinner = true ;
        
    }else{
        switchplayer();
        document.getElementById(`score--${activePlayer == 0 ? 1 :0}`).textContent =  score[activePlayer == 0 ? 1 :0]

    }
    

})