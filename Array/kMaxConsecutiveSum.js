const maxSum = (arr, k) => {
  let res = 0;
  let max = 0;

  for (i = 0; i + k - 1 < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      res = arr[i] + arr[i + 1] + arr[i + 2];
      max = Math.max(max, res);
    }
  }
  return max;
};

console.log(maxSum([1, 8, 30, -5, 20, 7], 3));

// Sliding Window technique
