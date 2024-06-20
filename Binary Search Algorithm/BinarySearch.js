const BinarySearch = (arr, target) => {
  let left = 0;
  let length = arr.length - 1;

  while (left < length) {
    if (arr[left] === target) {
      console.log(left);
      return;
    } else {
      left++;
    }
  }
  console.log(-1);
  return;
};

//BinarySearch([5, 10, 15, 2, 0, 27, 30], 0);

// Optimized solution

const BinaryOptimized = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  let mid = 0;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
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

BinaryOptimized([1, 10, 10, 10, 20, 20, 40], 20);
