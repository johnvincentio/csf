//

function doubleArrayValues(array) {
	let ticks = 1;
	for (let i = 0; i < array.length; i++) {
		array[i] *= 2;
		ticks++;
	}
	return {
		result: array,
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

getRunTimeOperations("Test1", doubleArrayValues, []);

getRunTimeOperations("Test2", doubleArrayValues, [1]);

getRunTimeOperations("Test3", doubleArrayValues, [1, 2]);

getRunTimeOperations("Test4", doubleArrayValues, [1, 2]);
getRunTimeOperations("Test5", doubleArrayValues, [1, 2, 3]);
getRunTimeOperations("Test6", doubleArrayValues, [1, 2, 3, 4]);
getRunTimeOperations("Test7", doubleArrayValues, [1, 2, 3, 4, 5]);
getRunTimeOperations("Test8", doubleArrayValues, [1, 2, 3, 4, 5, 6]);

getRunTimeOperations("Test8", doubleArrayValues, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
