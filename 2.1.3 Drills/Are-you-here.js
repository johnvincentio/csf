//

function areYouHere(arr1, arr2) {
	let ticks = 0;
	for (let i = 0; i < arr1.length; i++) {
		ticks++;
		const el1 = arr1[i];
		for (let j = 0; j < arr2.length; j++) {
			ticks++;
			const el2 = arr2[j];
			if (el1 === el2)
				return {
					result: true,
					ticks: ticks,
				};
		}
	}
	return {
		result: false,
		ticks: ticks,
	};
}

function getRunTimeOperations(msg, fn, input1, input2) {
	const { ticks, result } = fn(input1, input2);
	// prettier-ignore
	console.log(
		`Test ${msg}; With input of size ${input1.length} and ${input2.length}, ${fn.name} ` +
			`clocked ${ticks} ticks to generate result of ${result}.`
	);
}

getRunTimeOperations("Test1", areYouHere, [1], [1]);
getRunTimeOperations("Test2", areYouHere, [1], [2]);
getRunTimeOperations("Test3", areYouHere, [1, 2], [1, 2]);
getRunTimeOperations("Test4", areYouHere, [1, 2], [3, 4]);
getRunTimeOperations("Test5", areYouHere, [1, 2, 3], [1, 2, 3]);
getRunTimeOperations("Test6", areYouHere, [1, 2, 3], [3, 2, 1]);
getRunTimeOperations("Test7", areYouHere, [1, 2, 3], [3, 2, 1, 6, 8, 9]);
getRunTimeOperations("Test7a", areYouHere, [1, 2, 3], [3, 2, 1, 6, 8, 9, 4, 12, 13, 45, 67, 54, 32, 67, 876]);
getRunTimeOperations("Test8", areYouHere, [1, 2, 3], [5, 6, 7]);
getRunTimeOperations("Test8a", areYouHere, [1, 2, 3], [5, 6, 7]);

getRunTimeOperations("Test9", areYouHere, [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 23, 24], [5, 6, 7]);
