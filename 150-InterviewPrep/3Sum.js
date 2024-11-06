function ThreeSum(nums) {
  nums.sort((a, b) => a - b);
  let resArr = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          resArr.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  let unieque = resArr.map((arr) => JSON.stringify(arr));
  unieque = unieque.filter((itm, idx, arr) => arr.indexOf(itm) === idx);
  unieque = unieque.map((arr) => JSON.parse(arr));
  return unieque;
}

//console.log(ThreeSum([0, 0, 0]));

// Optimized soln

function ThreeSumOptimized(nums) {
  nums.sort((a, b) => a - b);
  let resArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left_ptr = i + 1;
    let right_ptr = nums.length - 1;

    while (left_ptr < right_ptr) {
      let sum = nums[i] + nums[left_ptr] + nums[right_ptr];

      if (sum === 0) {
        resArr.push([nums[i], nums[left_ptr], nums[right_ptr]]);

        while (left_ptr < right_ptr && nums[left_ptr] === nums[left_ptr + 1])
          left_ptr++;

        while (left_ptr < right_ptr && nums[right_ptr] === nums[right_ptr - 1])
          right_ptr--;

        left_ptr++;
        right_ptr--;
      } else if (sum < 0) {
        left_ptr++;
      } else {
        right_ptr--;
      }
    }
  }
  return resArr;
}
console.log(ThreeSumOptimized([0, 1, 1]));
