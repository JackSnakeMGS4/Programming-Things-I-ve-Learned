/*
    If helps to draw out a diagram of merge sort, once drawn you can see
    how the recursion works in a more user-friendly manner. As far Big O,
    merge sort is a good sorting method with O(n log n) in all time cases.
    The log n is in relation to the number of decompositions (the number of times
        we had to split arrays in half to end with n number of single value arrays).
    The n is in relation to the number of comparisons made in the merge() calls.
    The downside to it is a linear space complexity O(n).
*/

function merge(arr1,arr2){
    // NOTE: Parameters must be sorted arrays
    let results = [];
    let i = j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            results.push(arr1[i]);
            i++;
        }
        else{
            results.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }

    return results;
}

// merge([1,10,50],[2,14,99,100]);

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    //mergeSort call recursively halves the input until base case is met
    // arrRight's mergeSort isn't performed until the arrLeft's mergeSort
    // returns an array
    let arrLeft = mergeSort(arr.slice(0,Math.floor(arr.length/2)));
    let arrRight = mergeSort(arr.slice(Math.floor(arr.length/2)));

    // Once both recursive calls return something, left and right 
    // sides are merged
    return merge(arrLeft, arrRight);
}