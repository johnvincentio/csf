//

/* eslint-disable no-plusplus, no-bitwise, no-console */

/*
Write a function which sets the third bit of a number.
*/

function exercise(num) {
	const mask = 0b100;
	const result = num | mask;
	console.log(`mask ${mask.toString(2)}; num ${num}, ${num.toString(2)} result ${result}, ${result.toString(2)}`);
	// console.log('number ', num, ' result ', result);
}

let test = 0;
do {
	exercise(++test);
} while (test < 10);
