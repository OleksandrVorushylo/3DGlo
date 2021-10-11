/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
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

export default command;
