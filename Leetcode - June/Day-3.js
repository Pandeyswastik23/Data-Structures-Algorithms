const appendSub = () => {
  let str1 = "zbc";
  let str2 = "abc";

  let n = str1.length;
  let m = str2.length;
  let j = 0;

  for (let i = 0; i < n; i++) {
    if (j < m && str1[i] === str2[j]) {
      j++;
    }
  }

  if (j === m) {
    console.log(0);
  } else {
    console.log(m - j);
  }
};

appendSub();
