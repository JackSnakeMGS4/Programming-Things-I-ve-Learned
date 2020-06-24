function sumRange(num){
	return num === 1 ? 1 : num + sumRange(num - 1);
}

// sumRange(5)
// 5 + sumRange(4)
// 5 + 4 + sumRange(3)
// 5 + 4 + 3 + sumRange(2)
// 5 + 4 + 3 + 2 + sumRange(1)
// 5 + 4 + 3 + 2 + 1;
// Result: 15


function factorialOfNum(num){
	return num === 1 ? 1 : num * factorialOfNum(num - 1);
}

// factorialOfNum(5)
// Expected Output: 120;