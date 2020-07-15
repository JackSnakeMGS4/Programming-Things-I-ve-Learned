function selectionSort(arr){
	let i = arr.length;
	let j = 0;
	let noSwaps;
	
	for(;i > 0; i--){
		noSwaps = true;
		for(;j < i-1; j++){
			if(arr[j] > arr[j+1]){
				let temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
				noSwaps = false;
			}
		}
		j = 0;
		if(noSwaps) break;
	}

	return arr;
}