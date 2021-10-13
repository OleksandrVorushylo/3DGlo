
import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import scroll from './modules/scroll';
import tabs from './modules/tabs';
import slider from './modules/slider';
import command from './modules/command';
import validation from './modules/validation';
import calc from './modules/calc';
import sendForm from './modules/sendForm';


// Таймер
countTimer('16 october 2021');
// Меню
toggleMenu();
// popup Модальное окно
togglePopUp();
// Плавная прокрутка
scroll();
// Табы
tabs();
// Слайдер
slider();
// Наша команда
command();
// Валидация
validation();
// Калькулятор
calc(100);
//  send-AJAX-form
sendForm();
