//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
The share price for a company over a week's trading is as follows: 
		[128, 97, 121, 123, 98, 97, 105].

If you had to buy shares in the company on one day, and sell the shares 
on one of the following days, write an algorithm to work out 
what the maximum profit you could make would be.
*/

function maxPrice(arr) {
	if (!arr || arr.length < 1) {
		return 0;
	}
	return arr.reduce((a, b) => Math.max(a, b));
}

function exercise() {
	const prices = [128, 97, 121, 123, 98, 97, 105];
	let maxProfit = 0;

	while (prices.length) {
		const buyPrice = prices.shift();
		const profit = maxPrice(prices) - buyPrice;
		if (profit > maxProfit) {
			maxProfit = profit;
		}
	}
	console.log('maxProfit ', maxProfit);
}

exercise();
