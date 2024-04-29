'use strict';
/*
console.log(document.querrySelector('.message')
.textcontent);*/

let secretNumber= Math.trunc(Math.random()*20 +1);
let score = 20;
let highScore= 0;
//document.querySelector('.number').textContent =secretNumber ; (it is for secret number to display)
document.querySelector('.check') .addEventListener       //Event handler
('click' , function(){
          const guess =Number(document.querySelector('.guess').value);
          console.log(guess);
          
          // Whem no guess
          if(!guess)
          {
              document.querySelector('.message').textContent = 'Pleasee!!! Enter your number';
          }
          //When player wins
          else if(guess===secretNumber)
          {
            document.querySelector('.message').textContent = 'Congrats!!! Correct guess....';
            /*We can manipulate css using javascript */
            document.querySelector('body').style.backgroundColor = 'hotpink';
            document.querySelector('.number').style.width = '30rem';    
            document.querySelector('.number').textContent =secretNumber ;
            if(score > highScore){
              highScore=score;
              document.querySelector('.highscore').textContent = highScore;
            }
          } 
          //when guess is wrong
          else if(guess !== secretNumber)
          {
            if(score > 1)
            {
                document.querySelector('.message').textContent = guess > secretNumber ? 'Too big....': 'Too low....';
                score--;
            }
            else
            {
               document.querySelector('.message').textContent = 'You lose the Game...';
            }
          }
          //When guess is high
          /*else if (guess > secretNumber)
          {
            if(score > 1){
            document.querySelector('.message') .textContent = 'Too big....';
            score -- ;
            document.querySelector('.score').textContent = score;
            }
              else{
                document.querySelector('.message').textContent = 'You lose the Game...';
              }
          }
          //When guess is low
          else if(guess < secretNumber)
          {
            if(score > 1){ 
            document.querySelector('.message').textContent = 'Too low .....';
              score--;
              document.querySelector('.score').textContent = score;
          }
          else {
            document.querySelector('.message').textContent = 'You Lose the Game...';
             document.querySelector('.score').textContent = 0;
          }
        }*/

  }
);
document.querySelector('.again') .addEventListener 
('click' , function()
{
      score = 20;
      secretNumber= Math.trunc(Math.random()*20 +1);
      document.queSelector('.message').textContent = 'Start guessing...'
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent= '?';
      document.querySelector('.guess').value = '';
      document.querySelector('body').style.backgroundColor = 'black';
      document.querySelector('.number').style.width = '15rem';
}
);
