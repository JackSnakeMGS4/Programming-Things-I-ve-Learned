/* Multiple Pointers Pattern is
	really useful for solving problems that
	require a low space complexity (Big O logN or lower)

	It's only useful for sorted collections: I.E. sorted arrays.
	Essentially, we started by declaring two or more pointers.
	Each one pointing to a different index in the collection.
	From there we do a single loop (no nested loops) and
	iterate through the collection and moving the pointers up or down
	depending on the algorithm's goal/purpose.
*/

// Pointers Start and End of array
function sumZero(sortedArray){
	let left = 0;
	let right = sortedArray.length - 1;

	while(left<right){
		let sum = sortedArray[left] + sortedArray[right];
		if(sum === 0){
			return [sortedArray[left], sortedArray[right]];
		}
		else if(sum > 0){
			right--;
		} 
		else{
			left++;	
		} 
	}
}

// Multiple Pointers That Aren't The Start and End of An Array

// There's definitely a better way of handling this but
// this is best I could do right now.
// I added the additional challenge of NOT being able
// to modify the input sortedArray which made it more challenging
function countUniqueValues(sortedArray){
	let pointer1 = 0;
	let pointer2 = 1;
	let uniqueCounter = 0;

	let a,b;

	for(;pointer2 < sortedArray.length;){
		a = sortedArray[pointer1];
		b = sortedArray[pointer2];

		if(a !== b){
			// console.log(a,b);
			uniqueCounter++;
			// console.log(uniqueCounter);
		}		

		pointer1++;
		pointer2++;
	}

	return sortedArray.length > 0 ? uniqueCounter + 1 : uniqueCounter;
}

countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]); // Expected Output: 7
				// a b

countUniqueValues([-2,-1,-1,0,1]); // Expected Output: 7
				 // a  b