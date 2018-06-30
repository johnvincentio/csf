/*
Implement a function that takes in an integer and prints out its two's complement 
value by following the algorithm described above.
Hint: to invert the bits of a number you can use the "~" operator.
For example ~25 will invert the bits of the integer 25.
*/

function exercise(num) {
	let result = ~num + 1;
	console.log("num ", num, " result ", result);
}

let test = 0;
do {
	exercise(++test);
} while (test < 10);
