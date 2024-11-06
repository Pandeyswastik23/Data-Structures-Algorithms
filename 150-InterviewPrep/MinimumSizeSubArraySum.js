function MinSubArr(nums, k) {
  let res = 0;
  for (let i = 0; i + k - 1 < nums.length; i++) {
    let current = 0;
    for (let j = 0; j < k; j++) {
      current += nums[i + j];
      res = Math.max(res, current);
    }
  }
  return res;
}

//console.log(MinSubArr([5, -10, 6, 90, 3], 2));

//optimized:

function minSubArr(nums, k, target) {
  let curr = 0;
  for (let i = 0; i < k; i++) {
    curr += nums[i];
    let res = curr;
  }

  for (let j = k; j < nums.length; j++) {
    curr = curr + nums[k] - nums[i - k];
    res = Math.max(res, curr);
  }

  if (res === target) {
    return true;
  } else {
    false;
  }
}
