const subArray = () => {
  const arr = [23, 2, 6, 4, 7];
  const k = 13;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  if (count % k === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};

subArray();
