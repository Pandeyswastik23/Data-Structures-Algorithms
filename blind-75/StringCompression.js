function StringCompression(str) {
  let firstChar = str[0];
  let count = 1;
  let compressStr = [];

  for (let i = 1; i < str.length; i++) {
    let current = str[i];
    let previous = str[i - 1];

    if (current === previous) {
      count++;
    } else {
      if (count > 1) {
        compressStr.push(firstChar);
        compressStr.push(count.toString());
        count = 1;
      } else {
        compressStr.push(firstChar);
      }
    }
    firstChar = current;
  }
  if (count > 1) {
    compressStr.push(firstChar);
    compressStr.push(count.toString());
    count = 1;
  } else {
    compressStr.push(firstChar);
  }
  console.log(compressStr.length);
  return compressStr;
}

console.log(
  StringCompression([
    "a",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
  ])
);
