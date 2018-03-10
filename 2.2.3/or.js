/*
Write a function that takes in two integer values and prints out
the resultant value when you AND the two input values and
then also when you OR the two input values.
*/

function exercise(num1, num2) {
	let ans1 = num1 & num2;
	let ans2 = num1 | num2;
	console.log("num1 ", num1, " num2 ", num2, " ans1 ", ans1, " ans2 ", ans2);
}

exercise(1, 1);
exercise(1, 2);
exercise(2, 1);
exercise(3, 5);

// let item = 0;
// let max = 0;
// console.log("Testing with item ", item);
// for (let test = 0; test < 10; test++) {
// 	exercise(test, item);
// }

// item++;
// console.log("Testing with item ", item);
// for (let test = 0; test < 10; test++) {
// 	exercise(test, item);
// }

// item++;
// console.log("Testing with item ", item);
// for (let test = 0; test < 10; test++) {
// 	exercise(test, item);
// }

// item++;
// console.log("Testing with item ", item);
// for (let test = 0; test < 10; test++) {
// 	exercise(test, item);
// }

// item++;
// console.log("Testing with item ", item);
// for (let test = 0; test < 10; test++) {
// 	exercise(test, item);
// }

// item++;
// console.log("Testing with item ", item);
// for (let test = 0; test < 10; test++) {
// 	exercise(test, item);
// }
