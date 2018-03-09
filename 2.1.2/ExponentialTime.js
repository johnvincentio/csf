function countTriangle(layers) {
	let ticks = 1;

	let count = 0; // The number of dots we've counted so far
	let layer = 0; // The current layer we're on
	let lastLayer = 1; // The number of dots we counted in the previous layer
	while (layer < layers) {
		ticks++;
		let newLayer = 0; // The number of dots we've counted so far in the current layer
		for (let i = 0; i < lastLayer; i++) {
			ticks++;
			newLayer += 2;
		}
		lastLayer = newLayer;
		count += lastLayer;
		layer++;
	}
	return { result: count, ticks };
}

function getRunTimeOperations(fn, input) {
	const { ticks, result } = fn(input);
	console.log(`With input of size ${input}, ${fn.name} ` + `clocked ${ticks} ticks to generate result of ${result}.`);
}

getRunTimeOperations(countTriangle, 2);
getRunTimeOperations(countTriangle, 4);
getRunTimeOperations(countTriangle, 16);
