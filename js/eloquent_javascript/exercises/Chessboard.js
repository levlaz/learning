/**
 * Program that creates a "chessboard" grid of any size
 */
let size = 8;

for (i = 1; i <= size; i+=1) {
	let string = "";

	for (j = 1; j <= size; j +=1) {
		if ( i % 2 !== 0 && j % 2 !== 0 ) {
			string = string + " ";
		} else if ( i % 2 !== 0 && j % 2 === 0) {
			string = string + "#";
		} else if ( i % 2 === 0 && j % 2 !== 0) {
			string = string + "#";
		} else {
			string = string + " ";
		}
	}
	console.log(string);
}

/**
 * I intentionally did not use any functions here since they were not 
 * yet covered in the text. I am sure there is a more elegant solution 
 * for this problem, but its a decent start.
 */
