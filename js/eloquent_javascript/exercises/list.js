/**
 * Lists and Arrays
 */
const reverse = require('./reverseArray.js');

function arrayToList(array) {
	let thisArray = reverse(array);
	let list = {};

	for (let item of thisArray){
		if (thisArray.indexOf(item) === 0) {
			list = {value: item, rest: null}
		} else {
			list = {value: item, rest: list}
		}
	}

	return list;
}

function listToArray(list) {
	array = [];

	for (let node = list; node; node = node.rest) {
		array.push(node.value);
	}
	return array;
}

function prepend(item, list) {
	list = {value: item, rest: list}
	return list;
}

function nth(list, number) {
	let index = 0;

	for (let node = list; node; node = node.rest) {
		if (index === number) {
			return node.value;
		}
		index += 1;
	}
}

function rnth(list, number) {
	// recursive nth
	if (!list) return undefined;
	else if (number === 0) return list.value;
	else return rnth(list.rest, number - 1);
}


console.log(arrayToList([10, 20]));
console.log("### PREPEND ###");
console.log(prepend(10, prepend(20, null)));
console.log("### Nth ###");
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(rnth(arrayToList([10, 20, 30]), 1));



let testList = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: null
		}
	}
};

console.log("### LIST TO ARRAY ###");
console.log(listToArray(testList));
console.log(listToArray(arrayToList([10, 20])));
