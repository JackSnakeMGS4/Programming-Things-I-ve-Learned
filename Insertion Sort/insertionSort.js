// Insertion is good for data that's partially sorted already
// On the other hand, it's just as bad as bubble and selection sorts
// for completely random data.

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > current; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = current;
    }

    return arr;
}

insertionSort([34,22,10,19,17]);
/* 
    i: 1
    current: 22
    j: 0
    arr[j]: 34

    when j loop finishes of first pass, j is -1

    Result after first i loop iteration:
    [22,34,10,19,17]

    Second iteration of i loop (initial values):
    i: 2
    current: 10
    j: 1
    arr[j]: 34

    [22,10,34,19,17]

    j is now index 0 (22)
    Result of j loop:
    [22,22,34,19,17]
    j is now index -1

    End of 2nd i loop iteration:
    [10,22,34,19,17]

    And so on...
*/