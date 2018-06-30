/*
Write a function that takes an integer value and checks to see if 
it is even or odd using the bit-wise AND operator.
Hint: Think about what the value of the least-significant bit will be for even and odd numbers.
*/

function exercise(num) {
	let odd = !!(num & 1);
	console.log("num ", num, " odd ", odd);
}

let test = 0;
do {
	exercise(++test);
} while (test < 10);
