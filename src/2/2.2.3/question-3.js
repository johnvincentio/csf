//

/* eslint-disable no-plusplus, no-bitwise, no-console */

/*
Write a function which clears (sets to zero) the third bit of a number.
*/

function exercise(num) {
	const mask = 0b100;
	const set = !!(num & mask); // true => 3rd bit is set
	const result = set ? num - mask : num;
	console.log(`mask ${mask.toString(2)}; num ${num}, ${num.toString(2)} result ${result}, ${result.toString(2)}`);
}

let test = 0;
do {
	exercise(++test);
} while (test < 100);

exercise(0b1110);
