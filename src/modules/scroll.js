/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
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
/* jshint ignore:end */

export default scroll;
