// function twoSum(numbers, target) {
//   let resArr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         resArr.push(i + 1, j + 1);
//         return resArr;
//       }
//     }
//   }
// }

// console.log(twoSum([-10, -8, -2, 1, 2, 5, 6], 0));

// Optimized:

function twoSumOptimized(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

console.log(twoSumOptimized([2, 7, 11, 15], 9));
