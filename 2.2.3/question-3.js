/*
Write a function which clears (sets to zero) the third bit of a number.
*/

function exercise(num) {
	let mask = 0b100;
	let set = !!(num & mask);
	let result = set ? num - mask : num;
	console.log(`mask ${mask.toString(2)}; num ${num}, ${num.toString(2)} result ${result}, ${result.toString(2)}`);
}

let test = 0;
do {
	exercise(++test);
} while (test < 20);
