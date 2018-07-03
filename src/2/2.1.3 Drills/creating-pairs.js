//

/* eslint-disable no-plusplus, no-console, no-param-reassign */

function createPairs(arr) {
	let ticks = 1;
	for (let i = 0; i < arr.length; i++) {
		ticks++;
		for (let j = i + 1; j < arr.length; j++) {
			ticks++;
			// console.log(`${arr[i]}, ${arr[j]}`);
		}
	}
	return {
		ticks
	};
}

function getRunTimeOperations(test, fn, input) {
	const { ticks } = fn(input);
	console.log(`Test ${test}; With input of size ${input.length}, ${fn.name} clocked ${ticks} ticks.`);
}

function makeArray(size) {
	const arr = [];
	for (let i = 0; i < size; i++) {
		arr[i] = i;
	}
	return arr;
}

let test = 0;
getRunTimeOperations(++test, createPairs, []);

getRunTimeOperations(++test, createPairs, [1]);
getRunTimeOperations(++test, createPairs, makeArray(2));
getRunTimeOperations(++test, createPairs, makeArray(3));
getRunTimeOperations(++test, createPairs, makeArray(4));
getRunTimeOperations(++test, createPairs, makeArray(5));
getRunTimeOperations(++test, createPairs, makeArray(6));

getRunTimeOperations(++test, createPairs, makeArray(10));
getRunTimeOperations(++test, createPairs, makeArray(20));
getRunTimeOperations(++test, createPairs, makeArray(50));
getRunTimeOperations(++test, createPairs, makeArray(75));
getRunTimeOperations(++test, createPairs, makeArray(200));
getRunTimeOperations(++test, createPairs, makeArray(300));
