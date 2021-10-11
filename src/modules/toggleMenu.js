/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
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

export default toggleMenu;
