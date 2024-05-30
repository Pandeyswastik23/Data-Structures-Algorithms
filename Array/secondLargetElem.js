const secondLargestElem = (arr) => {
  let res = -1;
  let largest = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[largest]) {
      res = largest;
      largest = i;
    } else if (arr[i] !== arr[largest]) {
      if (res === -1 || arr[i] > arr[largest]) {
        res = i;
      }
    }
  }
  console.log("Index of second largest element is:", res);
  console.log("Second largest element is: ", arr[res]);
};

console.log(secondLargestElem([10, 5, 8, 20]));
