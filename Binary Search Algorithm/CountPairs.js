const countPairs = (arr, target) => {
  //   arr = arr.sort(); // -1,-2,-6,-7,2,3,5

  //   let low = 0;
  //   let high = arr.length - 1;
  //   let count = 0;

  //   console.log(arr);
  let count = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] < target) {
        count += 1;
      }
    }
  }
  console.log(count);
};

countPairs([-1, 1, 2, 3, 1], 2);
