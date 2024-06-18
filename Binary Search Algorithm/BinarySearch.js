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

BinarySearch([5, 10, 15, 20, 22, 27, 30], 19);
