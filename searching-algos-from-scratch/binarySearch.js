'use strict'

const binarySearch = (arr, value) => {
	// create our pointers
	let end = arr.length - 1;
	let start = 0;
	let middle = Math.floor((start + end) / 2);

	while(arr[middle] !== value && start <= end) {
		if (value < arr[middle]){
			end = middle - 1;
		} else {
			start = middle + 1;
		}
		middle = Math.floor((start + end) / 2);
	}

	if (arr[middle] === value) {
		return middle;
	}
	// return (if nothing is found -1)
	return -1
}


const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const target = 12;

console.log(binarySearch(arr, target));

