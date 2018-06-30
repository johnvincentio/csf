/*
Modify your existing shift function to also calculate a zero-fill right-shifted value.
Compare the values which you get from your three different type of shift operator.

For non-negative numbers, does the zero-fill right shift operator differ from the
right shift operator in terms of producing the end result? 
Why or why not? 
Eg. 11 >>> 4 vs 11 >> 4
*/

function leftShift(num, shift) {
	return num << shift;
}

function rightShift(num, shift) {
	return num >> shift;
}

function zeroFillRightShift(num, shift) {
	return num >>> shift;
}

function exercise(item, shift) {
	let left = leftShift(item, shift);
	let right = rightShift(item, shift);
	let zero = zeroFillRightShift(item, shift);
	// prettier-ignore
	console.log(
		`shift ${shift}, (item ${item}, ${item.toString(2)}) (left ${left}, ${left.toString(2)}} (right ${right}, ${right.toString(2)}) (zero ${zero}, ${zero.toString(2)})`
	);
}

let arr1 = [-1000000, -30000, -1, 1, 10, 25, 100, 30000, 60000, 100000000000];
let arr = [0, 1, 2, 10, 255, 256, -1];
arr.map(item => {
	let shift = 2;
	do {
		exercise(item, shift);
		shift++;
	} while (shift < 3);
});

exercise(11, 4);
