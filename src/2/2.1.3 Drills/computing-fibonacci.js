//

/* eslint-disable no-plusplus, no-console, no-param-reassign */

function generateFib(num) {
	let ticks = 1;
	const result = [];
	for (let i = 1; i <= num; i++) {
		ticks++;
		// we're adding the first item to the result list, append the number 0 to results
		if (i === 1) {
			ticks++;
			result.push(0);
		}
		// ...and if it's the second item append 1
		else if (i === 2) {
			ticks++;
			result.push(1);
		}

		// otherwise, sum the two previous result items, and append that value to results.
		else {
			ticks++;
			result.push(result[i - 2] + result[i - 3]);
		}
	}
	return { result, ticks };
}

function getRunTimeOperations(test, fn, input) {
	const { ticks, result } = fn(input);
	console.log(`Test ${test}; With input of ${input}, ${fn.name} clocked ${ticks} ticks.`);
	// console.log(`Test ${test}; With input of ${input}, ${fn.name} clocked ${ticks} ticks to generate result of ${result}.`);
}

let test = 0;
do {
	getRunTimeOperations(++test, generateFib, test);
} while (test < 50);
