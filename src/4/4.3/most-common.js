//

/* eslint-disable no-plusplus, no-bitwise, no-console, 
no-restricted-properties, no-continue, guard-for-in, no-restricted-syntax
*/

/*
Given a sentence, find the most commonly occurring character.
*/

const str = 'the most commonly occurring character';

function mostCommon(par) {
	if (par.length === 0) {
		return null;
	}
	const s = par.toLowerCase();
	const characters = {};
	for (let i = 0; i < s.length; i++) {
		const character = s.charAt(i);
		const characterCode = s.charCodeAt(i);
		if (characterCode < 97 || characterCode > 122) {
			continue;
		}
		if (!(character in characters)) {
			characters[character] = 1;
		} else {
			characters[character]++;
		}
	}

	let mostCommonCharacter = null;
	let maxOccurrences = 0;
	for (const character in characters) {
		const count = characters[character];
		if (count > maxOccurrences) {
			mostCommonCharacter = character;
			maxOccurrences = count;
		}
	}
	return mostCommonCharacter;
}

console.log('Most common letter = ', mostCommon(str));

const myobj = {};
myobj.w = 3;
myobj.t = 2;
myobj.s = 5;
console.log('myobj ', myobj);
if (!('a' in myobj)) {
	console.log('a not found');
}

myobj.t++;
console.log('myobj ', myobj);

for (const chr in myobj) {
	console.log('chr ', chr);
}
