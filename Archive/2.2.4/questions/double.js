/*
Write a function which doubles an integer.
*/

function leftShift(num, shift) {
	return num << shift;
}

function exercise(num) {
	let result = leftShift(num, 1);
	console.log(`num ${num}, ${num.toString(2)} result ${result}, ${result.toString(2)}`);
}

let test = 0;
do {
	test++;
	exercise(test);
} while (test < 10);

let arr1 = [-1000000, -30000, -1, 1, 10, 25, 100, 30000, 60000, 100000000000];
let arr = [-1, -5, -100, -255, -256];
arr.map(item => {
	exercise(item);
});
