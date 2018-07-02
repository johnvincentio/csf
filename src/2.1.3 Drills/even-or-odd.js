//

/* eslint-disable no-plusplus, no-console */

function isEven(value) {
	const ticks = 1;
	if (value % 2 === 0) {
		return {
			result: true,
			ticks
		};
	}
	return {
		result: false,
		ticks
	};
}

function getRunTimeOperations(fn, input) {
	const { result, ticks } = fn(input);
	// prettier-ignore
	console.log(
		`${fn.name} clocked ${ticks} ticks to generate result of ${result}.`
	);
}

getRunTimeOperations(isEven, 1);
getRunTimeOperations(isEven, 5);
getRunTimeOperations(isEven, 20);
