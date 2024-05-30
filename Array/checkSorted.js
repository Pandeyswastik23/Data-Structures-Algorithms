const checkArrSort = (arr) => {
  let min = arr[0];
  let flag = 0;

  if (arr.length === 1) {
    console.log("Array is sorted");
    return;
  }

  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      flag += 1;
    }
    min = arr[i];
  }

  if (flag > 0) {
    console.log("Array is not sorted");
    return;
  } else {
    console.log("Array is sorted");
  }
};

checkArrSort([8, 12, 15, 8]);
