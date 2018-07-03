//

/* eslint-disable no-plusplus, no-bitwise, no-console */

/*
Write a function which tells you whether the third bit of a number is set
*/

function exercise(num) {
	const mask = 0b100;
	const result = !!(num & mask); // true => 3rd bit is set
	console.log(`mask ${mask.toString(2)}; num ${num}, ${num.toString(2)} result ${result}`);
}

let test = 0;
do {
	exercise(++test);
} while (test < 100);
