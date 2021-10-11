/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
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

export default togglePopUp;
