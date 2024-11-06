function canBeEqual(target, arr) {
  if (target.length !== arr.length) {
    return false;
  }
  let count = 0;
  target.sort((a, b) => a - b);
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target[i]) {
      count += 1;
    }
  }

  if (count === arr.length) {
    return true;
  } else {
    return false;
  }
}

console.log(canBeEqual([392, 360], [392, 360]));
