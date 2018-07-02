//

/* eslint-disable no-plusplus, no-bitwise, no-console */

/*
Write a function that takes in two integer values and prints out the resultant value 
when you AND the two input values 
and then also 
when you OR the two input values.
*/

function exercise(num1, num2) {
	const ans1 = num1 & num2;
	const ans2 = num1 | num2;
	console.log(' num1 ', num1, ' num2 ', num2, ' ans1 ', ans1, ' ans2 ', ans2);
}

exercise(1, 1);
exercise(1, 2);
exercise(2, 1);
exercise(3, 5);
