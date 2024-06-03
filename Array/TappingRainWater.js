const maxArea = (arr) => {
  let max = 0;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let area = Math.min(arr[left], arr[right]) * (right - left);
    max = Math.max(max, area);

    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
