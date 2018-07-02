//

/* eslint-disable no-plusplus, no-console */

function isPrime(n) {
	let ticks = 0;
	// if n is less than 2 or a decimal, it's not prime
	if (n < 2 || n % 1 !== 0) {
		ticks++;
		return { result: false, ticks };
	}
	// otherwise, check if `n` is divisible by any integer between 2 and n.
	for (let i = 2; i < n; ++i) {
		ticks++;
		if (n % i === 0) {
			ticks++;
			return { result: false, ticks };
		}
	}
	return { result: true, ticks };
}

function getRunTimeOperations(test, fn, input) {
	const { ticks, result } = fn(input);
	console.log(
		`Test ${test}; With input of ${input}, ${fn.name} clocked ${ticks} ticks to generate result of ${result}.`
	);
}

let test = 0;
do {
	getRunTimeOperations(++test, isPrime, test);
} while (test < 50);
