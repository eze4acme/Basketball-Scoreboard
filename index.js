function Game() {
    const homePointEl = document.getElementById('home-point');
const guestPointEl = document.getElementById('guest-point');
const playerBtn = document.querySelectorAll('.button');
const periodEl = document.querySelector('.period');
const homeBoardEl = document.querySelector('.home-board');
const guestBoardEl = document.querySelector('.guest-board');
const homeEl = document.getElementById('home');
const guestEl = document.getElementById('guest');
const newGame = document.getElementById('new-game');
const modal = document.getElementById('modal');
const winnerText = document.getElementById('winner-text');
const closeBtn = document.getElementsByClassName('close')[0];

let homePoint = 100;
let isHavingHomePoint = true;
let guestPoint = 100;
let isHavingGuestPoint = true;
let timeOut = 60;
let homeScore = 0;
let guestScore = 0;
let intervalId;

function randomHome() {
  return Math.floor(Math.random() * 3 + 1);
}

function randomGuest() {
  return Math.floor(Math.random() * 3 + 1);
}

function clearGame() {
  homeScore = 0;
  guestScore = 0;
  homeBoardEl.innerHTML = homeScore;
  guestBoardEl.innerHTML = guestScore;
  clearInterval(intervalId);
  intervalId = null;
  timeOut = 60;
  periodEl.innerHTML = '01:00';
  homeEl.style.backgroundColor = '';
  guestEl.style.backgroundColor = '';
  homeBoardEl.style.color = '';
  guestBoardEl.style.color = '';
  homePoint = 100;
  guestPoint = 100;
  homePointEl.innerHTML = homePoint;
  guestPointEl.innerHTML = guestPoint;
  playerBtn.forEach(btn => {
    btn.classList.remove('btn');
    btn.addEventListener('click', buttonEvent);
  });
  window.location.reload()
}

function buttonEvent(event) {
  const btnClass = event.currentTarget.classList;
  if (btnClass.contains('player1-btn')) {
    homeScore += randomHome();
    homeBoardEl.innerHTML = homeScore;
    homeBtn();
  }
  if (btnClass.contains('player2-btn')) {
    guestScore += randomGuest();
    guestBoardEl.innerHTML = guestScore;
    guestBtn();
  }
  timer();
  comparison();

}

playerBtn.forEach(btn => {
  btn.addEventListener('click', buttonEvent);
});

function timer() {
  if (intervalId) {
    // If an interval is already running, do nothing
    return;
  }
  intervalId = setInterval(() => {
    if (timeOut > 0) {
      timeOut--;
      const outputTime = timeOut.toString().padStart(2, '0');
      periodEl.innerHTML = `00:${outputTime}`;
    } else {
      clearInterval(intervalId); // Clear the interval when the timeout reaches 0
      intervalId = null; // Reset the interval ID
      disableBtn();
      timeWinner();
    //   declareWinner();
    }
  }, 500);
}

function comparison() {
  if (homeScore > guestScore) {
    homeEl.style.backgroundColor = 'green';
    guestEl.style.backgroundColor = 'red';
    homeBoardEl.style.color = 'green';
    guestBoardEl.style.color = 'red';
  } else if (homeScore < guestScore) {
    homeEl.style.backgroundColor = 'red';
    guestEl.style.backgroundColor = 'green';
    homeBoardEl.style.color = 'red';
    guestBoardEl.style.color = 'green';
  } else {
    homeEl.style.backgroundColor = 'grey';
    guestEl.style.backgroundColor = 'grey';
    homeBoardEl.style.color = 'grey';
    guestBoardEl.style.color = 'grey';
  }
}

function disableBtn() {
  if (timeOut === 0) {
    playerBtn.forEach(btn => {
      btn.removeEventListener('click', buttonEvent);
      btn.classList.add('btn');
    });
   
  }
}

function homeBtn() {
    if (isHavingGuestPoint && homeScore > guestScore) {
        guestPoint -= 10;
        guestPointEl.innerHTML = guestPoint;
        if (guestPoint === 0) {
          isHavingGuestPoint = false;
          declareWinner();
        }
      }
  }
  
  function guestBtn() {
    if (isHavingHomePoint && guestScore > homeScore) {
        homePoint -= 10;
        homePointEl.innerHTML = homePoint;
        if (homePoint === 0) {
          isHavingHomePoint = false;
          declareWinner();
        }
      }
  }
  
  function declareWinner() {
    if (homePoint === 0 || guestPoint === 0) {
      clearInterval(intervalId);
      intervalId = null;
      playerBtn.forEach(btn => {
        btn.removeEventListener('click', buttonEvent);
        btn.classList.add('btn');
      });
    }
   
    if (!isHavingHomePoint && !isHavingGuestPoint) {
        winnerText.textContent = "It's a tie!";
      } else if (isHavingHomePoint) {
        winnerText.textContent = "Home team wins!";
      } else if(isHavingGuestPoint){
        winnerText.textContent = "Guest team wins!";
      }
      modal.style.display = 'block';

      // Close the modal when the close button is clicked
      
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        clearInterval(intervalId);
        intervalId = null;
      });
    
  }
  
function timeWinner() {
    if (timeOut === 0 && homeScore > guestScore) {
            winnerText.textContent = "Home team wins!";}
     
        if (timeOut === 0 && guestScore > homeScore){
            winnerText.textContent = "Guest team wins!";
        }
        if(timeOut === 0 && homeScore == guestScore){
            winnerText.textContent = "Draw! No Winner";
        }
        modal.style.display = 'block';
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            clearInterval(intervalId);
            intervalId = null;
          });
    }

// timeWinner()
  newGame.addEventListener('click', clearGame);

}
Game();

         
        
        
    
  

   
    
   
           



          
          
      




        
   
        
       
    


        