function naiveSearch(array, item) {
	let ticks = 1;
	for (let i = 0; i < array.length; i++) {
		ticks++;
		if (array[i] === item) {
			return {
				result: i,
				ticks: ticks,
			};
		}
	}
	return {
		result: -1,
		ticks: ticks,
	};
}

function getRunTimeOperations(test, fn, input1, input2) {
	const { ticks, result } = fn(input1, input2);
	console.log(
		`Test ${test}; With input of size ${input1.length} and item ${input2}, ${fn.name} ` +
			`clocked ${ticks} ticks to generate result of ${result}.`
	);
}

let test = 0;
getRunTimeOperations(++test, naiveSearch, [], 1);

getRunTimeOperations(++test, naiveSearch, [0], 1);
getRunTimeOperations(++test, naiveSearch, [1], 1);
getRunTimeOperations(++test, naiveSearch, [1], [2]);

getRunTimeOperations(++test, naiveSearch, [0, 1], 1);
getRunTimeOperations(++test, naiveSearch, [0, 1], 2);

getRunTimeOperations(++test, naiveSearch, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0);

getRunTimeOperations(
	++test,
	naiveSearch,
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
	0
);

getRunTimeOperations(
	++test,
	naiveSearch,
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
	10
);

getRunTimeOperations(
	++test,
	naiveSearch,
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
	50
);
