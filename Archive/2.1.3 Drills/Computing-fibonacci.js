//

function generateFib(num) {
	let result = [];
	let ticks = 1;
	for (let i = 1; i <= num; i++) {
		ticks++;

		// we're adding the first item
		// to the result list, append the
		// number 0 to results
		if (i === 1) {
			result.push(0);
		} else if (i == 2) {
			// ...and if it's the second item
			// append 1
			result.push(1);
		} else {
			// otherwise, sum the two previous result items, and append that value to results.
			result.push(result[i - 2] + result[i - 3]);
		}
		ticks++;
	}
	// once the for loop finishes
	// we return `result`.
	return {
		result,
		ticks: ticks,
	};
}

function getRunTimeOperations(test, fn, input) {
	const { ticks, result } = fn(input);
	console.log(`Test ${test}; With input of ${input}, ${fn.name} ` + `clocked ${ticks} ticks.`);
}

function makeArray(size) {
	const arr = [];
	for (let i = 0; i < size; i++) {
		arr[i] = i;
	}
	return arr;
}

let test = 0;
do {
	getRunTimeOperations(++test, generateFib, test);
} while (test < 50);
