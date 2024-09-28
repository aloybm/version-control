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
      evenArr.push(value); // Even index
    } else {
      oddArr.push(value); // Odd index
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

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function calculateAverage(arr) {
  const total = calculateTotal(arr);
  return total / arr.length;
}

function compareArrays(evenArr, oddArr) {
  const evenMin = findMin(evenArr);
  const oddMin = findMin(oddArr);

  const evenMax = findMax(evenArr);
  const oddMax = findMax(oddArr);

  const evenTotal = calculateTotal(evenArr);
  const oddTotal = calculateTotal(oddArr);

  const evenAvg = calculateAverage(evenArr);
  const oddAvg = calculateAverage(oddArr);

  console.log("\nPerbandingan Array:");
  console.log(`Min lebih besar array genap: ${evenMin > oddMin}`);
  console.log(`Max lebih besar array ganjil: ${oddMax > evenMax}`);
  console.log(
    `Total memiliki nilai sama antara array genap dan ganjil: ${
      evenTotal === oddTotal
    }`
  );
  console.log(`Rata rata lebih besar array ganjil: ${evenAvg > oddAvg}`);
}

function main() {
  const randomArray = generateRandomArray(100, 1, 50);

  const { evenArr, oddArr } = splitArrayByIndex(randomArray);

  console.log("Array dengan jumlah index 100:", randomArray);
  console.log("Array genap dengan jumlah index 50:", evenArr);
  console.log("Array ganjil dengan jumlah index 50:", oddArr);

  console.log("\nGenap Array Stats:");
  console.log("Min:", findMin(evenArr));
  console.log("Max:", findMax(evenArr));
  console.log("Total:", calculateTotal(evenArr));
  console.log("Rata-rata:", calculateAverage(evenArr));

  console.log("\nGanjil Array Stats:");
  console.log("Min:", findMin(oddArr));
  console.log("Max:", findMax(oddArr));
  console.log("Total:", calculateTotal(oddArr));
  console.log("Rata-rata:", calculateAverage(oddArr));

  compareArrays(evenArr, oddArr);
}

main();
