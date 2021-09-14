/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */

window.addEventListener('DOMContentLoaded', () => {

  // Таймер
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

	countTimer('15 september 2021');

  // Меню 

  const toggleMenu = () => {
    
    const btnMenu = document.querySelector('.menu'),
          menu = document.querySelector('menu'),
          closeBtn = document.querySelector('.close-btn'),
          menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = function() {
      // if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
      //   menu.style.transform = `translate(0)`;
      // } else {
      //   menu.style.transform = `translate(-100%)`;
      // }
      menu.classList.toggle('active-menu');
    };

    btnMenu.addEventListener('click', handlerMenu);    
    closeBtn.addEventListener('click', handlerMenu);
    // for (let i = 0; i < menuItems.length; i++) {
    //   menuItems[i].addEventListener('click', handlerMenu);
    // }
    menuItems.forEach(elem => {
      elem.addEventListener('click', handlerMenu);
    });

  };
  toggleMenu();

  // popup Модальное окно

  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
          popupBtn = document.querySelectorAll('.popup-btn'),
          popupClose = document.querySelector('.popup-close'),
          popupBackground = document.querySelector('.popup-background'),
          popupContent = document.querySelector('.popup-content'),
          formBtn = document.querySelector('.form-btn');
          let count = 0;

    popupBtn.forEach(elem => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';
        function animationPopUp() {
					count += 8;
					popupContent.style.top = count + 'px';
					if (count <= 200) setTimeout(animationPopUp, 8);
				}
				if (window.screen.width > 768) animationPopUp();
      });
    });

    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
      count = 0;
    });

    popupBackground.addEventListener('click', () => {
      popup.style.display = 'none';
      count = 0;
    });
  };
  togglePopUp();

  // Плавная прокрутка

  const anchors = document.querySelectorAll('a[href*="#"]');

    for (const anchor of anchors) {
      anchor.addEventListener('click', event => {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }

});
