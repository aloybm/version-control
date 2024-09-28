function generateRandomArray(size, min, max) {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

function splitArrayByIndex(arr) {
    const evenArr = [];
    const oddArr = [];
    
    arr.forEach((value, index) => {
        if (index % 2 === 0) {
            evenArr.push(value);  // Even index
        } else {
            oddArr.push(value);   // Odd index
        }
    });

    return { evenArr, oddArr };
}

function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function main() {
    const randomArray = generateRandomArray(100, 1, 50);
    
    const { evenArr, oddArr } = splitArrayByIndex(randomArray);
    
    console.log("Array dengan jumlah index 100:", randomArray);
    console.log("Array genap dengan jumlah index 50:", evenArr);
    console.log("Array ganjil dengan jumlah index 50:", oddArr);
  
    console.log("Min:", findMin(evenArr));
    console.log("Max:", findMax(evenArr));

}

main();