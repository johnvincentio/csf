//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Write an algorithm to group a list of words into anagrams.

For example, if the input was 
	['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], 

the output should be: 
	[['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].
*/

function exercise(arr) {
	const map = new Map();
	arr.forEach(element => {
		const newstr = element.toLowerCase().replace(/[^a-z0-9]+/g, '');
		const key = newstr
			.split('')
			.sort()
			.join('');

		const list = map.get(key);
		if (list) {
			list.push(newstr);
			map.set(key, list);
		} else {
			map.set(key, [newstr]);
		}
	});

	const result = [];
	map.forEach((value, key) => {
		result.push(value);
	});

	return result;
}

console.log('exercise test1 ', exercise(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));
