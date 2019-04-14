/**
 * Sum of a Range
 */

function isNegative(number) {
	return (number < 0 ? true : false)
}

function range(start, end, step) {
	let numbers = [];
	if (step === undefined) {
		for (i = start; i <= end; i++) {
			numbers.push(i);
		}
		return numbers;
	} else if (isNegative(step)) {
		for (i = end; i <= start; i-= step) {
			numbers.unshift(i);
		}
		return numbers;
	} else {
		for (i = start; i <= end; i+= step) {
		numbers.push(i);
		}
		return numbers;
	}
}

function sum(numbers) {
	let result = 0;
	for (let number of numbers) {
		result = result + number;
	}
	return result;
}


console.log(sum(range(1,10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(range(10, 1, -2));
