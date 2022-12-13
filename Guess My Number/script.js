'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const message = (text) => {
    document.querySelector('.message').textContent = text;
}

const number = (text) => {
    document.querySelector('.number').textContent = text;
}

const scoreLabel = (text) => {
    document.querySelector('.score').textContent = text;
}

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if(!guess) {
        message('⛔️ No number!');

    // When player wins
    } else if(guess === secretNumber) {
        message('🍻 Correct number!');
        number(secretNumber);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    // When guess is different from secret number
    } else if(guess !== secretNumber) {
        if(score > 1) {
            message(guess > secretNumber ? '👽 Too high' : '👆 Too low');
            score--;
            scoreLabel(score);
        } else {
            message('💥 You lost a game!');
            scoreLabel(0);
        }
    }
});

// Coding Challenge #1
document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    scoreLabel(score);
    number('?');
    message('Start guessing...');
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});