const firstAndLast = (nums, target) => {
  let arr = [];

  function firstOccurance() {
    let low = 0;
    let high = nums.length - 1;
    let mid = 0;
    let result = -1;
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      if (nums[mid] === target) {
        result = mid;
        high = mid - 1;
      } else if (nums[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return result;
  }

  function lastOccurance() {
    let low = 0;
    let high = nums.length - 1;
    let mid = 0;
    let result = -1;
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      if (nums[mid] === target) {
        result = mid;
        low = mid + 1;
      } else if (nums[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return result;
  }

  let firstindex = firstOccurance();
  let lastIndex = lastOccurance();

  arr.push(firstindex, lastIndex);

  console.log(arr);
};

firstAndLast([], 0);
