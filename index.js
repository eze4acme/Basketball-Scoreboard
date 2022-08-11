const homeEl = document.querySelector('.home');
const guestEl = document.querySelector('.guest');
const btnEl = document.querySelectorAll('.score-btn');
const homePa = document.getElementById('home');
const guestPa = document.getElementById('guest');
const startEl = document.getElementById('start');
const foulsEl = document.getElementById('fouls');
// Stopwatch
const timerEl = document.getElementById('timer');
const btnsEl = document.querySelectorAll('.btns');
let seconds =0;

let homeCount = 0;
let guestCount = 0;
let count = 0;
let foulsTest = null;
let interval;



 for(let btns of btnEl){
    btns.addEventListener('click', displayScore)
    function displayScore(e) {
        scoreBtn = e.currentTarget.classList
        if(scoreBtn.contains('homebtn1')){
            homeCount++;
        }
        else if(scoreBtn.contains('homebtn2')){
            homeCount += 2;
        }
        else if(scoreBtn.contains('homebtn3')){
            homeCount = homeCount + 3;
        }
        homeEl.innerHTML = homeCount;
        if(scoreBtn.contains('guestbtn1')){
            guestCount++
        }
        else if(scoreBtn.contains('guestbtn2')){
            guestCount += 2
        }
        else if(scoreBtn.contains('guestbtn3')){
            guestCount += 3
        }
        guestEl.innerHTML = guestCount;
        if(homeCount > guestCount){
            homePa.style.backgroundColor = 'green';
            guestPa.style.backgroundColor = 'red';
        }
        else if(guestCount > homeCount){
            guestPa.style.backgroundColor = 'green'
            homePa.style.backgroundColor = 'red'
        }
        else{
            homePa.style.backgroundColor = ' darkorange'
            guestPa.style.backgroundColor = 'darkorange'
        }
    }
 }



// STOPWATCH SECTION
for(let btnEl of btnsEl){
    btnEl.addEventListener('click', timer)
    function timer(e) {
        
    const btn = e.currentTarget.classList
    if(btn.contains('start')){
        if(interval){
            return
        }
       interval = setInterval((interval) => {
           render();
        }, 1000);
       
        setTimeout(() => {
            randomFouls() 
        }, 10000);
        
        
    }
    if(btn.contains('stop')) {
        clearInterval(interval)
        interval = null;
    }
    if(btn.contains('reset')){
        clearInterval(interval);
        interval = null;
        seconds = 0;
        timerEl.innerHTML = `00:00:00`
        guestCount = 0;
        homeCount = 0;
        homeEl.innerHTML = 0;
        guestEl.innerHTML = 0;
        homePa.style.backgroundColor = '';
        guestPa.style.backgroundColor = '';
        clearTimeout(interval);
        interval = null;
        secCounter = null;
        startEl.innerHTML = '00';

    }
}
}
function render() {
    seconds++
    let hrs = Math.floor(seconds/3600);
    let mins = Math.floor((seconds-(hrs*3600))/60);
    let secs = (seconds % 60);
    if(hrs < 10){
        hrs = '0' + hrs;
    }
    if(mins < 10){
        mins = '0' + mins;
    }
    if(secs < 10){
        secs = '0' + secs;
    }   
    timerEl.innerHTML = `${hrs}:${mins}:${secs}`
}
function randomFouls(){
    let randomGen = Math.floor(Math.random()*10)
    if(randomGen < 10){
        randomGen = '0' + randomGen;
        startEl.innerHTML = randomGen;
    }
}






 


         
        
        
    
  

   
    
   
           



          
          
      




        
   
        
       
    


        