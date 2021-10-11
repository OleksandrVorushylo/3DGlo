/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
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

export default tabs;
