function isEven(value) {
	let ticks = 1;
	if (value % 2 == 0) {
		return {
			result: true,
			ticks: ticks,
		};
	}
	return {
		result: false,
		ticks: ticks,
	};
}

function getRunTimeOperations(fn, input) {
	const { ticks, result } = fn(input);
	console.log(`With input of size ${input}, ${fn.name} ` + `clocked ${ticks} ticks to generate result of ${result}.`);
}

getRunTimeOperations(isEven, 0);
getRunTimeOperations(isEven, 1);
getRunTimeOperations(isEven, -1);
getRunTimeOperations(isEven, -2);

getRunTimeOperations(isEven, 5);
getRunTimeOperations(isEven, 16);
