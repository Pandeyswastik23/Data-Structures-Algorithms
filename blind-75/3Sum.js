const ThreeSum = (nums) => {
  var arr = [];
  var newSet = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          arr.push([nums[i], nums[j], nums[k]]);
          arr.sort();
        }
      }
    }
  }
  console.log(arr);
};

ThreeSum([-1, 0, 1, 2, -1, -4]);
