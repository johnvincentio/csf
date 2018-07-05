//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Write an algorithm to shuffle an array into a random order in-place 
	(i.e. without creating a new array).
*/

/*
choose a number of moves to make.
arr.length * a large number.

while (large_number > 0) {

	from = get random number between [0, arr.length)
	to = get random number between [0, arr.length)
	if (from !== to) {
		let tmp = arr[to];
		arr[to] = arr[from];
		arr[from] = tmp;
	}
	large_number--;
}
*/

const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let SWAPS = 10000;

// prettier-ignore
const arr = [
	'S1','S2','S3','S4','S5','S6','S7','S8','S9','S10','SJ','SQ','SK',
	'H1','H2','H3','H4','H5','H6','H7','H8','H9','H10','HJ','HQ','HK',
	'D1','D2','D3','D4','D5','D6','D7','D8','D9','D10','DJ','DQ','DK',
	'C1','C2','C3','C4','C5','C6','C7','C8','C9','C10','CJ','CQ','CK',
];

while (SWAPS > 0) {
	const fromIndex = randomInteger(0, arr.length - 1);
	const toIndex = randomInteger(0, arr.length - 1);
	if (fromIndex !== toIndex) {
		const tmp = arr[toIndex];
		arr[toIndex] = arr[fromIndex];
		arr[fromIndex] = tmp;
		SWAPS--;
	}
}

console.log('(after) arr ', arr);
