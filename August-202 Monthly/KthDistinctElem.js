function kthDistinct(arr, k) {
  // arr.sort();
  let resArr = [];

  if (arr.length === 0) {
    return "";
  }

  if (arr[0] !== arr[1]) {
    resArr.push(arr[0]);
  }

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
      resArr.push(arr[i]);
    }
  }

  if (arr[arr.length - 1] !== arr[arr.length - 2]) {
    resArr.push(arr[arr.length - 1]);
  }
  if (resArr.length < k) {
    return "";
  } else {
    return resArr[k - 1];
  }
}

console.log(kthDistinct(["a", "b", "a"], 3)); // a, b, c, c, d
