function removeDuplicates(nums) {
  let initial = 0;
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i - 1] === nums[i] && nums[i] === nums[i + 1]) {
      initial++;
    } else {
      count++;
    }
  }
  return initial + count;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));

