/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
window.addEventListener('DOMContentLoaded', () => {


	function countTimer(deadline) {
		const timerHours = document.getElementById('timer-hours'),
			    timerMinutes = document.getElementById('timer-minutes'),
			    timerSeconds = document.getElementById('timer-seconds');

		function getTimeRemaining() {
      const dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000;
        let seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60); // day = Math.floor(timeRemaining / 60 / 60 / 24), hours %60;
            if (hours < 10) hours = '0' + hours;
					  if (minutes < 10) minutes = '0' + minutes;
					  if (seconds < 10) seconds = '0' + seconds;
            return {
              timeRemaining,
              // eslint-disable-next-line object-shorthand
              'hours': hours,
              minutes,
              seconds
            };
    }

    function updateClock() {
      const timer = getTimeRemaining();

      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;

      if (timer.timeRemaining > 0) {
        setTimeout(updateClock, 1000);
      } else {
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
      }
      
    }
    updateClock();

          
	}

	countTimer('13 september 2021');







});
