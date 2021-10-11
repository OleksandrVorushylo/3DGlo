/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
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
				.then(response => {
					if (response.status !== 200) {
						throw new Error('status network not 200.');
					}
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

		// eslint-disable-next-line arrow-body-style
		const postData = body => {
			return fetch('./server.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				  },
				body: JSON.stringify(body)
			});
		};

		// const postData = body => new Promise((resolve, reject) => {
		//           const request = new XMLHttpRequest();
		//           request.addEventListener('readystatechange', () => {
		//               if (request.readyState !== 4) {
		//                   return;
		//               }
		//               if (request.status === 200) {
		//                   resolve();
		//               } else {
		//                   statusMessage.textContent = errorMessage;
		//                   reject();
		//               }
		//           });
		//           request.open('POST', './server.php');
		//           request.setRequestHeader('Content-Type', 'application/json');
		//           request.send(JSON.stringify(body));
		//       });

	});

};

export default sendForm;
