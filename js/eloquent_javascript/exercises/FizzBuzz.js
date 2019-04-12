/**
 * FizzBuzz 
 *
 * Print 1 - 100
 * 	For numbers divisible by 3, print "Fizz"
 * 	For numbers divisible by 5, print "Buzz"
 * 	For numbers divisible by both 3 and 5, print "FizzBuzz"
 */
let output = "";

for (i = 1; i <= 100; i+=1) {

	if (i % 3 === 0 && i % 5 === 0) {
		output = output + "FizzBuzz ";
	} else if (i % 3 === 0) {
		output = output + "Fizz ";
	} else if ( i % 5 === 0) {
		output = output + "Buzz ";
	} else {
		output = output + i + " ";
	}
}

console.log(output);
