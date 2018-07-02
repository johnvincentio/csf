//

/* eslint-disable no-plusplus, no-bitwise, no-console */

/*
Write a function that takes an integer value and checks to see if it is even or odd using
the bit-wise AND operator.

Hint: Think about what the value of the least-significant bit will be for even and odd numbers.
*/

function isOdd(num) {
	const mask = 1;
	const bool = !!(num & mask);
	console.log('num ', num, ' bool ', bool);
}

let test = 0;
do {
	isOdd(++test);
} while (test < 10);
