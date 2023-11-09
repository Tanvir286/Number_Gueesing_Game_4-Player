
let won = 0;
let lost = 0;

for(i=1;i<=5;i++){
  let guessnum = parseInt(prompt("Enter A Number 1-5: "));
  let randomnum = Math.floor(Math.random() *5 ) + 1;
  if(guessnum >= 0 && guessnum <= 5 ){
         if(guessnum == randomnum){
          console.log("You have you");
          won++;
         }
         else{
          console.log("You lost this game!!! Random number is"+randomnum);
          lost++;
         }
  }
  else{
    console.log('Please between 1-5');
  }

}

document.write("Total Number of won ="+won+" Times <br>") 
document.write("Total Number of Lost ="+lost+" Times <br>")