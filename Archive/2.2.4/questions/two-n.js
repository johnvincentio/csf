/*
Write a function which calculates 2^n
*/

function leftShift(num, shift) {
	return num << shift;
}

function exercise(num) {
	let result = leftShift(1, num);
	console.log(`num ${num}, ${num.toString(2)} result ${result}, ${result.toString(2)}`);
}

for (let i = 0; i < 5; i++) {
	exercise(i);
}

// let test = 0;
// do {
// 	test++;
// 	exercise(test);
// } while (test < 10);

// let arr1 = [-1000000, -30000, -1, 1, 10, 25, 100, 30000, 60000, 100000000000];
// let arr = [-1, -5, -100, -255, -256];
// arr.map(item => {
// 	exercise(item);
// });
