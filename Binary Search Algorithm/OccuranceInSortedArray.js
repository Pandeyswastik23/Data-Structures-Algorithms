const occuranceInSorted = (arr, target) => {
  function firstOccurance() {
    let low = 0;
    let high = arr.length - 1;
    let mid = 0;
    let result = 0;

    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) {
        result = mid;
        high = mid - 1;
      } else if (arr[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return result;
  }

  function lastOccurance() {
    let low = 0;
    let high = arr.length - 1;
    let mid = 0;
    let result = 0;

    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) {
        result = mid;
        low = mid + 1;
      } else if (arr[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return result;
  }

  let firstIndex = firstOccurance();
  let lastIndex = lastOccurance();

  console.log(lastIndex - firstIndex + 1);
};

occuranceInSorted([10, 20, 20, 20, 20, 30, 30, 40, 50, 65], 30);
