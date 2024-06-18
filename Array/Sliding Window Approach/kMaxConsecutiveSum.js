const kMax = (arr, k) => {
  let currentWindow = 0;
  for (let i = 0; i < k; i++) {
    currentWindow += arr[i];
  }
  let res = currentWindow;

  for (let i = k; i < arr.length; i++) {
    currentWindow = currentWindow + arr[i] - arr[i - k];
    res = Math.max(res, currentWindow);
  }
  return res;
};

console.log(kMax([1, 5, 3, -2, 1000, -10], 3));
