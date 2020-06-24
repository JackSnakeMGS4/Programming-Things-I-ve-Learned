/* Helper Method Recursion is a design pattern that's useful
	when you want compile a result into an array or another data
	structures relating to collections	
*/

// Showcasing Helper Method Recursion vs. Pure Recursion Solution
// Of Same Problem

// Helper Method Recursion
function collectEvenValues(arr){
	let evens = [];

	// This is the helper method recursion
	function helper(helperInput){
		if(helperInput.length === 0) return;

		if(helperInput[0] % 2 === 0){
			evens.push(helperInput[0]);
		}

		helper(helperInput.slice(1));
	}

	helper(arr);

	return evens;
}

// Pure Recursion
function collectEvenValues(arr){
	let evens = [];

	if(arr.length === 0) return;

	if(arr[0] % 2 === 0) evens.push(arr[0]);

	evens = evens.concat(collectEvenValues(arr.slice(1)));

	return evens;
}