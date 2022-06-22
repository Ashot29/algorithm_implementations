const arr = [33, 0, -2, 3, 80, 5, 17, -7];

function insertionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j ++) {
            if (arr[i] < arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }

    return arr
}

console.log(insertionSort(arr))
