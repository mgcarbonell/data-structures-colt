const insertionSort = (arr) => {
	// start by picking the second element in the array
	for (let i = 1; i < arr.length; i++) {
		let current = arr[i];
		for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--){
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currentVal;
	}
	return arr;
}
