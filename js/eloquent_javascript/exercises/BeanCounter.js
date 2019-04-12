/**
 * String Counter
 */
function countBs(string) {
	let bCount = 0;

	for (i = 0; i <= string.length; i+=1) {
		if (string[i] === "B") {
			bCount += 1
		}
	}
	return bCount
}

function countChar(string, character) {
	let characterCount = 0;

	for (i = 0; i <= string.length; i+=1) {
		if (string[i] === character) {
			characterCount +=1
		}
	}
	return characterCount;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
