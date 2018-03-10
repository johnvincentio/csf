/*
Write a function that takes in an integer value and prints out its complement value.
*/

function exercise(num) {
	let result = ~num;
	console.log("num ", num, " result ", result);
}

let test = 0;
do {
	exercise(++test);
} while (test < 10);

exercise(30000);
exercise(1000000);
exercise(1000000000);
exercise(1000000000000);
