//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Write a function which calculates 2^n
*/

function leftShift(num, shift) {
	return num << shift;
}

function exercise(shift) {
	const result = leftShift(1, shift);
	console.log(`shift ${shift} result ${result}, ${result.toString(2)}`);
}

for (let i = 0; i < 5; i++) {
	exercise(i);
}
