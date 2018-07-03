//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Write an algorithm to check whether any permutation of a string is a palindrome.

A palindrome is a string that reads the same forwards and backwards: 
	for example, "madam" or "racecar".

Algorithm needs to check if any permutation of the string is a palindrome.
Given the string "acecarr", the algorithm should return true, because the 
letters in "acecarr" can be rearranged to "racecar", which is a palindrome.

In contrast, given the word "north", the algorithm should return false, because 
there's no way to rearrange those letters to be a palindrome.
*/

function reverse(str) {
	return str
		.split('')
		.reverse()
		.join('');
}

function exercise(str) {
	const newstr = str.toLowerCase().replace(/[^a-z0-9]+/g, '');
	return newstr === reverse(newstr);
}

console.log(`exercise hello ${exercise('hello')}`);
console.log(`exercise racecar ${exercise('racecar')}`);
console.log(`exercise acecarr ${exercise('acecarr')}`);
console.log(`exercise aaa ${exercise('aaa')}`);

function palindrome(str) {
	const arr = str
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '')
		.split('');
	const map = new Map();
	arr.forEach(element => {
		let count = map.get(element);
		if (count) {
			map.set(element, ++count);
		} else {
			map.set(element, 1);
		}
	});
	let odds = 0;
	map.forEach((value, key) => {
		if (value % 2 !== 0) {
			odds++;
		}
	});
	return odds < 2;
}

console.log(`palindrome hello ${palindrome('hello')}`);
console.log(`palindrome racecar ${palindrome('racecar')}`);
console.log(`palindrome a ${palindrome('a')}`);
console.log(`palindrome aa ${palindrome('aa')}`);
console.log(`palindrome aaa ${palindrome('aaa')}`);
console.log(`palindrome acecarr ${palindrome('acecarr')}`);
console.log(`palindrome acecarr ${palindrome('accarr')}`);
