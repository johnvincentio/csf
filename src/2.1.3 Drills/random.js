//

/* eslint-disable no-plusplus, no-console, no-param-reassign */

function findRandomElement(arr) {
	const ticks = 1;
	return { result: arr[Math.floor(Math.random() * arr.length)], ticks };
}

function getRunTimeOperations(msg, fn, input) {
	const { ticks, result } = fn(input);
	console.log(
		`Test ${msg}; With input of size ${input.length}, ${fn.name} ` +
			`clocked ${ticks} ticks to generate result of ${result}.`
	);
}

function makeArray(size) {
	const arr = [];
	for (let i = 0; i < size; i++) {
		arr[i] = i;
	}
	return arr;
}

let test = 0;
getRunTimeOperations(++test, findRandomElement, []);

getRunTimeOperations(++test, findRandomElement, [1]);
getRunTimeOperations(++test, findRandomElement, makeArray(2));
getRunTimeOperations(++test, findRandomElement, makeArray(3));
getRunTimeOperations(++test, findRandomElement, makeArray(4));
getRunTimeOperations(++test, findRandomElement, makeArray(5));
getRunTimeOperations(++test, findRandomElement, makeArray(6));

getRunTimeOperations(++test, findRandomElement, makeArray(10));
getRunTimeOperations(++test, findRandomElement, makeArray(20));
getRunTimeOperations(++test, findRandomElement, makeArray(50));
getRunTimeOperations(++test, findRandomElement, makeArray(75));
getRunTimeOperations(++test, findRandomElement, makeArray(200));
getRunTimeOperations(++test, findRandomElement, makeArray(300));
