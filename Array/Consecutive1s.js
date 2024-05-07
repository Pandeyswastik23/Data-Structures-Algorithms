const consecutive1s = (arr) => {
  let count = 0;
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
};

let arr = [3, 1, 0, 1, 1];
console.log(consecutive1s(arr));
