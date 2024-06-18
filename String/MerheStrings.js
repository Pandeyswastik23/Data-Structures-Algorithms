const mergeStrings = () => {
  let str1 = "ab";
  let str2 = "pqrs";

  let res = [];

  let maxLength = Math.max(str1.length, str2.length);

  for (let i = 0; i < maxLength; i++) {
    res.push(str1[i]);
    res.push(str2[i]);
  }
  return res.join("");
};

console.log(mergeStrings());

// let words = ["bella", "label", "roller"];
// let res = words.split(",");
// console.log(res);
