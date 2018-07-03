//

/* eslint-disable no-plusplus, no-bitwise, no-console */

/*
Write a function that takes in an integer value and prints out its complement value.
What do you notice about the numbers which are output?
What about if you give a large input value?
*/

function exercise(num) {
	const result = ~num;
	console.log('num ', num, ' result ', result);
}

let test = 0;
do {
	exercise(++test);
} while (test < 10);

exercise(30000);
exercise(1000000000); // -1000000001

exercise(3000000000); // 1294967295

const a2 = 2 ** 31;
console.log('a2 ', a2);
exercise(a2 - 1); // -2147483648
exercise(a2); // 2147483647
