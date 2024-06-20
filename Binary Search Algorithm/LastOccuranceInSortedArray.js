const lastOccurance = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  let mid = 0;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] === target && arr[mid] !== arr[mid + 1]) {
      console.log(mid);
      return;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  console.log(-1);
  return;
};

lastOccurance([1, 2, 3, 4, 5, 6, 6, 6, 7, 8], 6);
