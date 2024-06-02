const scoreOfString = (s) => {
  let newArr = s.split("");
  function getAsciiValue(array) {
    return array.map((char) => char.charCodeAt(0));
  }

  const values = getAsciiValue(newArr);
  console.log(values);

  let left = 0;
  let right = 1;
  let length = newArr.length;

  let res = 0;
  let diff = 0;

  while (right < length) {
    diff = Math.abs(values[left] - values[right]);
    res = res + diff;

    left++;
    right++;
  }
  console.log(res);
};

scoreOfString("hello");
