const ran=parseInt(Math.random()*100+1);
const submit=document.querySelector('#sub');
const userInput=document.querySelector("#guessField")
const guessSlot=document.querySelector(".guesses")
const remaining=document.querySelector(".lastResult")
const lowOrhi=document.querySelector(".lowOrhi")
const startOver=document.querySelector(".result")

const p= document.createElement('p');

let prevGuess=[]
let newGuess=1

let playGame=true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }
    else if(guess<1){
        alert("Please enter a number greater than 1")
    }
    else if(guess>100){
        alert("Please enter a number less than 100")
    }
    else{
        prevGuess.push(guess)
        if(newGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over! Random nunber was ${ran}`)
            endGame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===ran){
        displayMessage("You guessed it right.")
        endGame()
    }
    else if(guess<ran){
        displayMessage("Number is TOO Low")
    }
    else if(guess>ran){
        displayMessage("Number is TOO High")
    }
}

function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess}, `;
    newGuess++;
    remaining.innerHTML=`${11-newGuess}`
}


function displayMessage(message){
    lowOrhi.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML='<h3 id="newGame">Start new Game</h3>'
    startOver.appendChild(p)
    playGame=false;
    newGame()
    }

function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        ran=parseInt(Math.random()*100+1);
        prevGuess=[];
        newGuess=1; 
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-newGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    })
}

