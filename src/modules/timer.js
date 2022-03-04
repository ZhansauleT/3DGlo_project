const timer = function(deadline){
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  
  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaning = (dateStop - dateNow)/1000;
    let hours = Math.floor(timeRemaning/3600);
    let minutes = Math.floor((timeRemaning/60) % 60);
    let seconds = Math.floor(timeRemaning % 60);

    if(timeRemaning < 0){
      timeRemaning = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    }

    return { timeRemaning, hours, minutes, seconds };
  };


  const updateClock = () => {
    let getTime = getTimeRemaining();
    
    timerHours.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;

    if(getTimeRemaining === 0){
      timerHours.textContent = "0"+getTime.hours;
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    }
      

    if(getTime.timeRemaning > 0) {
      setTimeout(updateClock, 1000);
    }

  };

  updateClock();

}; 

export default timer;
