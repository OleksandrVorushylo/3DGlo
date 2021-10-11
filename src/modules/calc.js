/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
const calc = (price = 100) => {

	const calcBlock = document.querySelector('.calc-block'),
		calcType = document.querySelector('.calc-type'),
		calcSquare = document.querySelector('.calc-square'),
		calcCount = document.querySelector('.calc-count'),
		calcDay = document.querySelector('.calc-day'),
		optionValue = document.querySelectorAll('select>option')[2],
		totalValue = document.getElementById('total');



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

export default calc;
