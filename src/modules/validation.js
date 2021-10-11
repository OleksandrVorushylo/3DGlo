/* eslint-disable max-len */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
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

export default validation;
