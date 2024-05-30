//with the sorted array
const largestElem = (arr) => {
  let temp = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr[arr.length - 2];
};
console.log(largestElem([1, 0, 34, 76, 23, 5, 7]));

// with unsorted array
const unsortedLargest = (array) => {
  let largest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
};

console.log(unsortedLargest([1, 0, 3040, 199, 23, 908, 7]));
