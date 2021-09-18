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
    
    const menu = document.querySelector('menu');

    function handlerMenu() {

      menu.classList.toggle('active-menu');
    }

    // btnMenu.addEventListener('click', handlerMenu);    
    // closeBtn.addEventListener('click', event => {
    //   event.preventDefault();
    //   handlerMenu();
    // });

    // menuItems.forEach(elem => {
    //   elem.addEventListener('click', handlerMenu);
    // });

    document.addEventListener('click', event => {
      const target = event.target;
      if (target.closest('.menu')) {
        handlerMenu();
      }
      if (target.closest('.close-btn')) {
        event.preventDefault();
        handlerMenu();
      }
      if (target.closest('UL>LI>A')) {
        handlerMenu();
      }
      // eslint-disable-next-line max-len
      if (!target.closest('.active-menu') && !target.closest('.menu') && target.closest('UL>LI>A')) menu.classList.remove('active-menu');
    });

  };
  toggleMenu();

  // popup Модальное окно

  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
          popupBtn = document.querySelectorAll('.popup-btn'),
          popupContent = document.querySelector('.popup-content'),
          formBtn = document.querySelector('.form-btn');
          let count = 0;

    popupBtn.forEach(elem => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';
        function animationPopUp() {
					count += 7;
					popupContent.style.top = count + 'px';
					if (count <= 200) setTimeout(animationPopUp, 8);
				}
				if (window.screen.width > 768) animationPopUp();
      });
    });

    popup.addEventListener('click', event => {
      let target = event.target;

      // Закрытие формы на крестик
      if (target.classList.contains('popup-close')) {
        popup.style.display = 'none';
        count = 0;
      } else {
        target = target.closest('.popup-content'); 
        if (!target) {
        popup.style.display = 'none';
        count = 0;
        // Закрытие формы нажатием вне формы
        }
      }
    });
  };
  togglePopUp();

  // Плавная прокрутка
  /* jshint ignore:start */
  const scroll = function() {
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (const anchor of anchors) {
      anchor.addEventListener('click', event => {
        event.preventDefault();
        const blockID = anchor.getAttribute('href'),
              btn = document.querySelectorAll('.portfolio-btn');
        // eslint-disable-next-line prefer-const
        let target = event.target;

        if (target.classList.contains('portfolio-btn')) {
          event.preventDefault();   
        } else {
          document.querySelector('' + blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
          });
        }
        
      });
    }
  };
  scroll();
  /* jshint ignore:end */

  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
          tab = document.querySelectorAll('.service-header-tab'),
          tabContent = document.querySelectorAll('.service-tab');

    // Функция смены контента

    const toggleTabContent = index => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };

    // Клики по табам      
    tabHeader.addEventListener('click', event => {
      let target = event.target;
        target = target.closest('.service-header-tab'); // проверяем селектор
          if (target) {
            tab.forEach((item, i) => {
              // eslint-disable-next-line no-undef
              if (item === target) {
                toggleTabContent(i);
              }
            });
				}
		});      

  

  };
  tabs();

  // Слайдер 

  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
          btn = document.querySelectorAll('.portfolio-btn'),
          slider = document.querySelector('.portfolio-content');

    const dots = () => {
      const dots = document.querySelector('.portfolio-dots');
      for (let i = 0; i < slide.length; i++) {
				const li = document.createElement('li');
				li.classList.add('dot');
				dots.appendChild(li);
			}
    };
    dots();

    const dot = document.querySelectorAll('.dot');
    dot[0].classList.add('dot-active');

    let currentSlide = 0, // Номер слайда
        interval; 

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 5000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener('click', event => {
      event.preventDefault();

      const target = event.target;

      if (!target.matches('#arrow-right, #arrow-left, .dot')) {
        return;
      }

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }        
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }        
            
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', event => {
      if (event.target.matches('.portfolio-btn') || 
          event.target.matches('.dot')) {
            stopSlide();
          }
    });
    slider.addEventListener('mouseout', event => {
      if (event.target.matches('.portfolio-btn') || 
          event.target.matches('.dot')) {
            startSlide(6000);
          }   
    
    });


    startSlide(6000);
  };
  
  slider();

});
