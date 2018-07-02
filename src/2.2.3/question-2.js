//

/* eslint-disable no-plusplus, no-bitwise, no-console */

/*
Write a function which toggles the third bit of a number.

The XOR produces 1 in the truth table when both bits are different; 
that is when one of the bits is a 1 and the other is a 0
*/

function exercise(num) {
	const mask = 0b100;
	const result = num ^ mask;
	console.log(`mask ${mask.toString(2)}; num ${num}, ${num.toString(2)} result ${result}, ${result.toString(2)}`);
	// console.log('number ', num, ' result ', result);
}

let test = 0;
do {
	exercise(++test);
} while (test < 10);

exercise(0b1110);
