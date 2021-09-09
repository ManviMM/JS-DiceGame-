'use strict';

//DOM element Selecting comments
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // is faster than query selector
const diceEl = document.querySelector('.dice');

const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let currentScore, scores, playing, activePlayer;

const init = function(){
    currentScore = 0;
    scores = [0,0];
    activePlayer = 0;
    playing = true;


    score0El.textContent = 0;
    score1El.textContent = 0;

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');

    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

    diceEl.classList.add('hidden');
};
init();
//Rolling Fuction
buttonRoll.addEventListener('click',function(){
    //1. Generate a random roll
    if(playing){
        const dice = Math.trunc(Math.random()*6) +1;

        //2. Display the dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
          currentScore+=dice;
        
            document.getElementById(`score--${activePlayer}`).textContent = currentScore;
            
            if(activePlayer===0){
                scores[activePlayer] +=currentScore;
                document.getElementById(`score--${activePlayer}`).textContent = scores [activePlayer];
            }
            else{
                scores[activePlayer] +=currentScore;
                document.getElementById(`score--${activePlayer}`).textContent = scores [activePlayer];
            }
            activePlayer = activePlayer === 0 ? 1 : 0;
            currentScore = 0;
            
            player0El.classList.toggle(`player--active`);
            player1El.classList.toggle(`player--active`);
    }
    
        if(scores[activePlayer]>=100){
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
})

buttonNew.addEventListener('click', init);