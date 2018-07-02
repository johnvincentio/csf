//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Write a function that takes in a decimal value and a value that represents the number 
of bit positions to shift left with.
Return or print out the final base 10 value after the shift.
*/

function checker(num, shift) {
	return num * Math.pow(2, shift);
}

function leftShift(num, shift) {
	return num << shift;
}

function exercise(shift) {
	let test = 0;
	do {
		test++;
		const result = leftShift(test, shift);
		const checked = checker(test, shift);
		console.log(`test ${test.toString(2)} shift ${shift} result ${result}, ${result.toString(2)}`);
		if (result !== checked) {
			console.error('ERROR');
		}
	} while (test < 20);
}

let shift = 0;
do {
	exercise(++shift);
} while (shift < 5);
