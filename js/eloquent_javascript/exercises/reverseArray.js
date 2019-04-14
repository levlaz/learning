/**
 * Reversing An Array
 */
function reverseArray(array) {
	newArray = [];
	for (let item of array) {
		newArray.unshift(item);
	}
	return newArray;
}

function reverseArrayInPlace (array) {
	let half = Math.floor(array.length/2);
	for (i = 0; i < half; i++) {
		let tmp = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = tmp;
	}
}

// console.log(reverseArray(["A", "B", "C"]))

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
// console.log(arrayValue);

module.exports = reverseArray;
