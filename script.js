'use strict';
let score = 5;
let highscore = 0;
let number = Math.trunc(Math.random()*20)+1;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

const displayScore = function(score){
    document.querySelector('.score').textContent = score;
}

document.querySelector('.again').addEventListener('click', function(){
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    score = 5;
    displayScore(5);
    number = Math.trunc(Math.random()*20)+1;
});

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);


    if(guess <= 20){
        if(!guess){
            displayMessage('⛔ No Number');
            
        } else if(guess === number){
            displayMessage('🎉 Correct Number');
            document.querySelector('body').style.backgroundColor = '#60b347'
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = number;

            if(score > highscore){
                highscore =score;
                document.querySelector('.highscore').textContent = highscore;
            }
        } else if(guess > number && guess === number + 1){
            if(score > 1){
                displayMessage('😚 Too Close');
                score--;
                displayScore(score);
            } else {
                displayMessage('🤯 You lost the game');
                document.querySelector('.score').textContent = 0;
            }
        } else if(guess > number){
            if(score > 1){
                displayMessage('📈 Too High');
                score--;
                displayScore(score);
            } else {
                displayMessage('🤯 You lost the game');
                document.querySelector('.score').textContent = 0;
            }
        } else if(guess < number && guess === number - 1){
            if(score > 1){
                displayMessage('😚 Too Close');
                score--;
                displayScore(score);
            } else {
                displayMessage('🤯 You lost the game');
                document.querySelector('.score').textContent = 0;
            }
        } else if(guess < number){
            if(score > 1){
                displayMessage('📉 Too Low');
                score--;
                displayScore(score);
            } else {
                displayMessage('🤯 You lost the game');
                document.querySelector('.score').textContent = 0;
            }
        }
    } else {
        displayMessage('Number is above 20');
        score--;
        displayScore(score);
    }
});

