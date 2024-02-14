let computerMove = '';
let youWin = 0;
let computerWin = 0;
let tie = 0;

Rock.addEventListener('click',() =>{
  
      let randomNumber = Math.random();

      if(randomNumber >= 0 && randomNumber < 1/3){
           computerMove = 'Rock';
      }
      else if(randomNumber >= 1/3 && randomNumber < 1/2){
            computerMove = 'Paper';
      }
      else if(randomNumber >= 1/2 && randomNumber < 1){
            computerMove = 'Scissor';
      }

      let result = '';
        if(computerMove === 'Rock'){
            result = 'Tie';
        }
        else if(computerMove === 'Paper'){
            result = 'You lose';
        }
        else if(computerMove === 'Scissor'){
                result = 'You win'
        }

            if(result === 'Tie'){
                tie +=1;
            }
            else if(result === 'You win'){
                youWin += 1;
            }
            else if(result === 'You lose'){
                computerWin += 1;
            }

            document.getElementById('yourScore').innerHTML = `Your score : ${youWin}`;
            document.getElementById('computerScore').innerHTML = `Computer Score : ${computerWin}`;
            document.getElementById('tieScore').innerHTML = `Tie score : ${tie}`;

            document.getElementById('result').innerHTML = `${result}`;
            document.getElementById('finalResult').innerHTML = `You choose Rock , computer choose ${computerMove} . ${result}`;
            
})

Paper.addEventListener('click',() =>{
  
    let randomNumber = Math.random();

    if(randomNumber >= 0 && randomNumber < 1/3){
         computerMove = 'Rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 1/2){
          computerMove = 'Paper';
    }
    else if(randomNumber >= 1/2 && randomNumber < 1){
          computerMove = 'Scissor';
    }

    let result = '';
      if(computerMove === 'Rock'){
          result = 'You win';
      }
      else if(computerMove === 'Paper'){
          result = 'tie';
      }
      else if(computerMove === 'Scissor'){
              result = 'You lose';
      }

          if(result === 'Tie'){
              tie +=1;
          }
          else if(result === 'You win'){
              youWin += 1;
          }
          else if(result === 'You lose'){
              computerWin += 1;
          }

          document.getElementById('yourScore').innerHTML = `Your score : ${youWin}`;
          document.getElementById('computerScore').innerHTML = `Computer Score : ${computerWin}`;
          document.getElementById('tieScore').innerHTML = `Tie score : ${tie}`;

          document.getElementById('result').innerHTML = `${result}`;
          document.getElementById('finalResult').innerHTML = `You choose Paper , computer choose ${computerMove} . ${result}`;
          
})

Scissor.addEventListener('click',() =>{
  
    let randomNumber = Math.random();

    if(randomNumber >= 0 && randomNumber < 1/3){
         computerMove = 'Rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 1/2){
          computerMove = 'Paper';
    }
    else if(randomNumber >= 1/2 && randomNumber < 1){
          computerMove = 'Scissor';
    }

    let result = '';
      if(computerMove === 'Rock'){
          result = 'You lose';
      }
      else if(computerMove === 'Paper'){
          result = 'You win';
      }
      else if(computerMove === 'Scissor'){
              result = 'Tie'
      }

          if(result === 'Tie'){
              tie +=1;
          }
          else if(result === 'You win'){
              youWin += 1;
          }
          else if(result === 'You lose'){
              computerWin += 1;
          }

          document.getElementById('yourScore').innerHTML = `Your score : ${youWin}`;
          document.getElementById('computerScore').innerHTML = `Computer Score : ${computerWin}`;
          document.getElementById('tieScore').innerHTML = `Tie score : ${tie}`;

          document.getElementById('result').innerHTML = `${result}`;
          document.getElementById('finalResult').innerHTML = `You choose Scissor , computer choose ${computerMove} . ${result}`;
          
})

document.getElementById('restartBtn').addEventListener('click',() => {
      window.location.reload();
})