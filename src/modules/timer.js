const timer = function(deadline){
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");
  const timerAction = document.getElementsByClassName("timer-action")[0];

  
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

      timerAction.textContent = "Акция закончилась...";
    }

    return { timeRemaning, hours, minutes, seconds };
  };


  const updateClock = () => {
    let getTime = getTimeRemaining();

    if(getTime.hours < 10){
      timerHours.textContent = "0"+getTime.hours;
    }else{
      timerHours.textContent = getTime.hours;
    }

    if(getTime.minutes < 10){
      timerMinutes.textContent = "0"+getTime.minutes;
    }else{
      timerMinutes.textContent = getTime.minutes;
    }

    if(getTime.seconds < 10){
      timerSeconds.textContent = "0"+getTime.seconds;
    }else{
      timerSeconds.textContent = getTime.seconds;
    }


    if(getTime.timeRemaning > 0) {
      setTimeout(updateClock, 1000);
    }

  };

  updateClock();

}; 

export default timer;
