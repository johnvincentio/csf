/*
Extend the previous function further by adding logic for the XOR operation
when two integer values are input.
Add a third parameter which denotes which type of operation to execute.
Print out the resultant value for the associated operation type.
*/

function and(num1, num2) {
	return num1 & num2;
}
function or(num1, num2) {
	return num1 | num2;
}
function xor(num1, num2) {
	return num1 ^ num2;
}
function exercise(fn, num1, num2) {
	const result = fn(num1, num2);
	console.log(`${fn.name} of ${num1}, ${num2} = ${result}`);
}

exercise(and, 1, 1);
exercise(and, 1, 2);
exercise(and, 2, 1);
exercise(and, 3, 5);
exercise(and, 3, 8);
exercise(and, 3, 12);

exercise(or, 1, 1);
exercise(or, 1, 2);
exercise(or, 2, 1);
exercise(or, 3, 5);
exercise(or, 3, 8);
exercise(or, 3, 12);

exercise(xor, 1, 1);
exercise(xor, 1, 2);
exercise(xor, 2, 1);
exercise(xor, 3, 5);
exercise(xor, 3, 8);
exercise(xor, 3, 12);
