// const mergeSorted = () => {
//   let arr1 = [1, 2, 3, 0, 0, 0];
//   let arr2 = [2, 5, 6];

//   if (arr2.length === 0) {
//     return arr1;
//   }

//   let point1 = arr1.length - (arr2.length - 1);
//   let point2 = arr2.length - 1;

//   let mergeIndex = arr1.length - 1;
//   while (arr1.length > arr2.length) {
//     if (arr1[point1] === 0) {
//       let temp = arr1[point1];
//       arr1[point1] = arr2[point2];
//       arr2[point2] = temp;

//       point1++;
//       point2++;
//     }
//     point1++;
//   }
//   return arr1;
// };

// console.log(mergeSorted());

const mergeSorted = () => {
  let arr1 = [1, 2, 3, 0, 0, 0];
  let arr2 = [2, 5, 6];

  let point1 = arr1.length - arr2.length - 1;
  let point2 = arr2.length - 1;

  let mergeIndex = arr1.length - 1; // Index to merge elements into

  while (point1 >= 0 && point2 >= 0) {
    if (arr1[point1] > arr2[point2]) {
      arr1[mergeIndex] = arr1[point1];
      point1--;
    } else {
      arr1[mergeIndex] = arr2[point2];
      point2--;
    }
    mergeIndex--;
  }

  // If there are remaining elements in arr2, copy them to arr1
  while (point2 >= 0) {
    arr1[mergeIndex] = arr2[point2];
    mergeIndex--;
    point2--;
  }

  return arr1;
};

console.log(mergeSorted());
