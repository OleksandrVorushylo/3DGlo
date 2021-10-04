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

  // Наша команда

  const command = () => {
    const commandPhoto = document.querySelectorAll('.command__photo');
    commandPhoto.forEach(item => {
        let photoSrc;
        item.addEventListener('mouseover', event => {
        photoSrc = event.target.src;
        event.target.src = event.target.dataset.img;
      });
        item.addEventListener('mouseout', event => {
        event.target.src = photoSrc;
      });
    });

    // commandPhoto.addEventListener('mouseenter', event => {
    //   event.target.src = event.target.dataset.img;
    // });
  };
  command();

  // Валидация

  const validation = () => {
    // Валидация калькулятора
    const inputCalc = document.querySelectorAll('.calc-item');
    inputCalc.forEach(item => {
      item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/g, '');
      });  
    });
    // Валидация формы
    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          btn = document.querySelectorAll('.btn');
    const phoneForm1 = document.querySelectorAll('.form-phone')[0],
          phoneForm2 = document.querySelectorAll('.form-phone')[1],
          phoneForm3 = document.querySelectorAll('.form-phone')[2];
          
    phoneForm1.setAttribute('minlength', '10');
    phoneForm2.setAttribute('minlength', '10');
    phoneForm3.setAttribute('minlength', '10');

    forms.forEach(item => {
            const errorMsg = document.createElement('div');
        errorMsg.className = ('error-phone');
        errorMsg.textContent = `Номер должен быть в формате +7(XXX)XXX-XX-XX
                              Количество символов: 10`;
        errorMsg.style.fontSize = '10px';
        errorMsg.style.color = 'white';

      item.addEventListener('input', event => {
        const input = event.target;
        // eslint-disable-next-line max-len
        if (input.id === 'form2-name' || input.id === 'form2-message' || input.id === 'form1-name' || input.id === 'form3-name') {
          input.value = input.value.replace(/[^а-яё -,.]/ig, '');
        }
        if (input.id === 'form2-email' || input.id === 'form1-email' || input.id === 'form3-email') {
          input.value = input.value.replace(/[^a-z0-9@-_.!~*']/ig, '');
        }
        if (input.id === 'form1-phone' || input.id === 'form2-phone' || input.id === 'form3-phone') {
          input.value = input.value.replace(/^\+?[0378]([-()]*\d){9,11}$/ig, '');
          item.addEventListener('input', () => {
            if (input.value.length < 18) {
            btn[0].disabled = true;
            btn[4].disabled = true;
            btn[5].disabled = true;
            input.insertAdjacentElement('afterend', errorMsg);
            errorMsg.style.display = 'block';
            }
            if (input.value.length >= 18) {
              btn[0].disabled = false;
              btn[4].disabled = false;
              btn[5].disabled = false;
              errorMsg.style.display = 'none';
            }
            // if (errorMsg.classList.('error-phone')) {
            //   errorMsg.classList.remove('error-phone');
            //   console.log(1);
            // }
          });
          
        }
        
      });
    });
    inputs.forEach(item => {
      item.addEventListener('blur', event => {
        const input = event.target;
        if (input.id === 'form2-name' || input.id === 'form1-name' || input.id === 'form3-name') {
          input.value = input.value.replace(/[^а-яё -]/ig, '');
          input.value = input.value.trim();
          input.value = input.value.replace(/\s+/ig, ' ');
          
              if (input.value.match(/^-+|-+$/)) {
              input.value = input.value.replace(/^-+|-+$/g, '');
              if (input.value.match(/^\s+|\s+$/)) {
                input.value = input.value.replace(/^\s+|\s+$/g, '');
              }
            } else {
              input.value = input.value.replace(/-+/g, '-');
            }

          // input.value = input.value.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');

        }
        if (input.id === 'form2-message') {
          input.value = input.value.replace(/[^а-яё -,.]/ig, '');
          input.value = input.value.trim();
          input.value = input.value.replace(/\s+/ig, ' ');
        }
        if (input.id === 'form2-email' || input.id === 'form1-email' || input.id === 'form3-email') {
          input.value = input.value.replace(/[^a-z0-9@-_.!~*']/ig, '');
          input.value = input.value.trim();
          input.value = input.value.replace(/\s+/ig, ' ');
        }
        if (input.id === 'form1-phone' || input.id === 'form2-phone' || input.id === 'form3-phone') {
          input.value = input.value.replace(/^\+?[0378]([-()]*\d){9,11}$/ig, '');
          input.value = input.value.trim();
          input.value = input.value.replace(/\s+/ig, ' ');
        }
      });

    });
    
  };
  validation();

  // Калькулятор

  const calc = (price = 100) => {

    const calcBlock = document.querySelector('.calc-block'),
          calcType = document.querySelector('.calc-type'),
          calcSquare = document.querySelector('.calc-square'),
          calcCount = document.querySelector('.calc-count'),
          calcDay = document.querySelector('.calc-day'),
          optionValue = document.querySelectorAll('select>option')[2],
          totalValue = document.getElementById('total');

          console.log('optionValue: ', optionValue);

    const countSum = () => {

            let total = 0,
                countValue = 1,
                dayValue = 1;

            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            let typeVal;
            if (calcType.selectedIndex === 2) {
              typeVal = typeValue - 1.6;
            } else {
              typeVal = typeValue;
            }
            if (calcType.selectedIndex === 0) {
              calcCount.value = '';
              calcSquare.value = '';
              calcDay.value = '';
            }


            if (typeValue && squareValue) {
                total = price * typeVal * squareValue * countValue * dayValue;
            }

            totalValue.textContent = Math.round(total);
        };

    calcBlock.addEventListener('change', event => {
      const target = event.target;

      // if (target === calcType || target === calcSquare || target === calcCount || target === calcDay) {
      //   console.log('1');
      // }

      // if (target.matches('.calc-type') || target.matches('.calc-square') ||
      //  target.matches('.calc-count') || target.matches('.calc-day')) {
      //   console.log('1');
      // }

      if (target.matches('select') || target.matches('input')) {


        countSum();
      }
    });
          
  };
  calc(100);


  //  send-AJAX-form

  const sendForm = () => {
    const errorMessage = 'Что то пошло не так',
        loadMessage = 'Загрузка...',
        succesMessage = 'Спасибо! Мы скоро с вами свяжемся!';
        

    const forms = document.querySelectorAll('form');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = `font-size: 2rem;
                                  color: white;`;

    forms.forEach(form => {

        const popup = document.querySelector('.popup');

        form.addEventListener('submit', event => {
        event.preventDefault();
        form.appendChild(statusMessage);

        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        const body = {};  // Если серверу нужен JSON формат

        // for (const val of formData.entries()) {
        //   body[val[0]] = val[1];
        // }

        formData.forEach((val, key) => {
          body[key] = val;
        });
        // eslint-disable-next-line no-use-before-define
        // postData(body, () => {
        //   statusMessage.textContent = succesMessage;
        //   setTimeout(() => { statusMessage.textContent = ''; }, 3000);
        //   setTimeout(() => { popup.style.display = 'none'; }, 6000);
        // }, error => {
        //   statusMessage.textContent = errorMessage;
        //   console.error(error);
        //   setTimeout(() => { statusMessage.textContent = ''; }, 3000);
        //   setTimeout(() => { popup.style.display = 'none'; }, 6000);

        // });
        // eslint-disable-next-line no-use-before-define
        postData(body)
					.then(() => {
            statusMessage.textContent = succesMessage;
            setTimeout(() => { statusMessage.textContent = ''; }, 3000);
            setTimeout(() => { popup.style.display = 'none'; }, 6000);
          })
					.catch(error => {
						statusMessage.textContent = errorMessage;
						console.error(error);
            setTimeout(() => { statusMessage.textContent = ''; }, 3000);
            setTimeout(() => { popup.style.display = 'none'; }, 6000);
					});

        [...form].forEach(input => {
					input.value = '';
				});

      });

      const postData = body => new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.addEventListener('readystatechange', () => {
                    if (request.readyState !== 4) {
                        return;
                    }
                    if (request.status === 200) {
                        resolve();
                    } else {
                        statusMessage.textContent = errorMessage;
                        reject();
                    }
                });
                request.open('POST', './server.php');
                request.setRequestHeader('Content-Type', 'application/json');
                request.send(JSON.stringify(body));
            });

    });

  };

  sendForm();

});
