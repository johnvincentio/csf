/*
Write a function which tells you whether the third bit of a number is set.
*/

function exercise(num) {
	let mask = 0b100;
	let result = !!(num & mask);
	console.log(`mask ${mask.toString(2)}; num ${num}, ${num.toString(2)} result ${result}, ${result.toString(2)}`);
}

let test = 0;
do {
	exercise(++test);
} while (test < 20);
