'use strict';
let score = 5;
let highscore = 0;
let number = Math.trunc(Math.random()*20)+1;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if(guess <= 20){
    if(!guess){
        document.querySelector('.message').textContent = '⛔ No Number';
        score--;
        document.querySelector('.score').textContent = score;
    } 
    
    else if(guess > number && guess === number + 1){
        if(score > 1){
        document.querySelector('.message').textContent = '😚 Too Close';
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '🤯 You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
    
    else if(guess > number){
        if(score > 1){
        document.querySelector('.message').textContent = '📈 Too High';
        score--;
        document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = '🤯 You lost the game';
            document.querySelector('.score').textContent = 0; 
        }
    } 
    
    else if(guess === number){
        document.querySelector('.message').textContent = '🎉 Correct Number';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = number;
        document.querySelector('.number').style.width = '30rem';
        if(score > highscore){
            document.querySelector('.highscore').textContent = score;
        }
    } 
    
    else if(guess < number && guess === number - 1){
        if(score > 1){
        document.querySelector('.message').textContent = '😚 Too Close';
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '🤯 You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    } 
    
    else if(guess < number ){
        if(score > 1){
        document.querySelector('.message').textContent = '📉 Too Low';
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '🤯 You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
} 

else {
    document.querySelector('.message').textContent = 'Number is above 20';
    score--;
    document.querySelector('.score').textContent = score;
}
});

document.querySelector('.again').addEventListener('click', function(){
    score = 5;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});