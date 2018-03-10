//

function efficientSearch(array, item) {
	let minIndex = 0;
	let maxIndex = array.length - 1;
	let currentIndex;
	let currentElement;
	let ticks = 0;

	while (minIndex <= maxIndex) {
		ticks++;
		currentIndex = Math.floor((minIndex + maxIndex) / 2);
		currentElement = array[currentIndex];

		if (currentElement < item) {
			ticks++;
			minIndex = currentIndex + 1;
		} else if (currentElement > item) {
			ticks++;
			maxIndex = currentIndex - 1;
		} else {
			return {
				result: currentIndex,
				ticks: ticks,
			};
		}
	}
	return {
		result: -1,
		ticks: ticks,
	};
}

function getRunTimeOperations(test, fn, input, item) {
	const { ticks, result } = fn(input, item);

	console.log(
		`Test ${test}; With input of size ${input.length} and item ${item}, ${fn.name} ` +
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
getRunTimeOperations(++test, efficientSearch, [], 1);

getRunTimeOperations(++test, efficientSearch, [1], 2);
getRunTimeOperations(++test, efficientSearch, makeArray(2), 0);
getRunTimeOperations(++test, efficientSearch, makeArray(2), 1);
getRunTimeOperations(++test, efficientSearch, makeArray(2), 2);
getRunTimeOperations(++test, efficientSearch, makeArray(2), 50);

getRunTimeOperations(++test, efficientSearch, makeArray(3), 0);
getRunTimeOperations(++test, efficientSearch, makeArray(3), 1);
getRunTimeOperations(++test, efficientSearch, makeArray(3), 2);
getRunTimeOperations(++test, efficientSearch, makeArray(3), 50);

getRunTimeOperations(++test, efficientSearch, makeArray(5), 0);
getRunTimeOperations(++test, efficientSearch, makeArray(5), 1);
getRunTimeOperations(++test, efficientSearch, makeArray(5), 2);
getRunTimeOperations(++test, efficientSearch, makeArray(5), 50);

getRunTimeOperations(++test, efficientSearch, makeArray(10), 0);
getRunTimeOperations(++test, efficientSearch, makeArray(10), 1);
getRunTimeOperations(++test, efficientSearch, makeArray(10), 2);
getRunTimeOperations(++test, efficientSearch, makeArray(10), 50);

console.log("just test worst case scenario, item is not in the array");

let item = 100000;
getRunTimeOperations(++test, efficientSearch, makeArray(1), item);
getRunTimeOperations(++test, efficientSearch, makeArray(2), item);
getRunTimeOperations(++test, efficientSearch, makeArray(3), item);
getRunTimeOperations(++test, efficientSearch, makeArray(5), item);
getRunTimeOperations(++test, efficientSearch, makeArray(10), item);
getRunTimeOperations(++test, efficientSearch, makeArray(20), item);
getRunTimeOperations(++test, efficientSearch, makeArray(50), item);
getRunTimeOperations(++test, efficientSearch, makeArray(100), item);
getRunTimeOperations(++test, efficientSearch, makeArray(500), item);
getRunTimeOperations(++test, efficientSearch, makeArray(1000), item);
getRunTimeOperations(++test, efficientSearch, makeArray(5000), item);
