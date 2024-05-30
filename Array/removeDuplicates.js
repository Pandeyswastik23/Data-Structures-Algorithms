// const duplicates = (arr) => {
//   let result = 1;

//   for (let i = 1; i < arr.length - 1; i++) {
//     if (arr[result - 1] !== arr[result]) {
//       arr[result] = arr[i];
//       result++;
//     }
//   }

//   console.log(arr);
// };

// duplicates([1, 1, 2]);

function removeDuplicates(array, n) {
  let res = 1;
  for (let i = 1; i < n; i++) {
    if (array[res - 1] != array[i]) {
      array[res] = array[i];
      res++;
    }
  }

  return res;
}

console.log(removeDuplicates([1, 1, 2], 3));
