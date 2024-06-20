const firstOccurance = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      if (arr[mid - 1] === target) {
        console.log(mid - 1);
        return;
      } else {
        console.log(mid);
        return;
      }
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  console.log(-1);
  return;
};

firstOccurance([10, 15, 20, 20, 20, 20, 30, 35], 20);
