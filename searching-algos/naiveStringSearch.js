'use strict'

/**
 * Finds a substring (pattern)  within a given string (input), returns count
 */

const stringSearch = (input, pattern) => {
	let count = 0;
	for (let i = 0; i < input.length; i++) {
		for (let j = 0; j < pattern.length; j++) {
			if (pattern[j] !== input[i + j]) {
				break;
			}
			if (j === pattern.length - 1) {
				count++;
			}
		}
	}
	return count;
}

const input = "you're a wizard harry";
const pattern = "ard";

console.log(stringSearch(input, pattern));
