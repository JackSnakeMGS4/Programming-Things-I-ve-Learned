/*
    Big O of Quick sort (Time):
    Worst - O(n^2) but we can decrease the odds of a worst case happening
    by randomizing the odds of the algorithms always picking the minimum or
    maximum values in the input array
    
    Avg and Best - O(n log n)

    Space Big O: O(log n)
*/

function partition(arr, startIndex = 0, endIndex = arr.length + 1){
    function swap(array,i,j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // Note: With quick sort the pivot element chosen impacts the algi's efficiency
    let pivot = arr[startIndex];
    let indexOfPivot = startIndex;

    let i = startIndex + 1;
    while(i < arr.length){
        if(pivot > arr[i]){
            indexOfPivot++;
            swap(arr,indexOfPivot,i);
        }
        i++;
    }
    swap(arr,startIndex,indexOfPivot);

    return indexOfPivot;
}

// partition([4,8,2,1,5,7,6,3])

function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
        let pivotIdx = partition(arr, left, right);
        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);
    }

    return arr;
}