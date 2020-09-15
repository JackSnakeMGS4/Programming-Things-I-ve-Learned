// Like bubble sort, selection sort is also not an efficient sorting algorithm
// Both bubble sort and selection sort end up having an O(n^2)

/*
	The key difference between bubble and selection sorts is how they sort data
	Where bubble sort constantly swaps items to get the largest value to the
	end of the collection, selection sort only swaps items once per loop but both 
	still iterate through the data in the same fashion.
*/
function selectionSort(arr){
	const swap = (arr, idx1, idx2) => 
	([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

	for(let i = 0; i < arr.length; i++){
		let idxOfLowest = i;
		for (let j = i+1; j < arr.length; j++){
			if(arr[idxOfLowest] > arr[j]) idxOfLowest = j; 
		}
		if(i !== idxOfLowest) swap(arr, i, idxOfLowest);
	}

	return arr;
}

selectionSort([34,22,10,19,17]);