//

function findRandomElement(arr) {
	let ticks = 1;
	return {
		result: arr[Math.floor(Math.random() * arr.length)],
		ticks: ticks,
	};
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
getRunTimeOperations(test, findRandomElement, makeArray(0));
