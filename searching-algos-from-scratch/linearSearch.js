const linearSearch = (arr, val) => {
	// loop through the entire ray && check for value
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			return i;
		}
	}
	return -1;
}

const arr = [1, 12, 15, 20, 2, 4, 8, 16, 52, 31, 7];
const target = 8;

console.log(linearSearch(arr, target));

