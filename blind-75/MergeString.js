const MergeString = (str1, str2) => {
  let arr = [];

  let maxLength = Math.max(str1.length, str2.length);

  for (let i = 0; i < maxLength; i++) {
    let temp = str1.charAt(i) + str2.charAt(i);
    arr.push(temp);
  }
  arr = arr.join("");
  console.log(arr);
};

MergeString("abcd", "pq");
