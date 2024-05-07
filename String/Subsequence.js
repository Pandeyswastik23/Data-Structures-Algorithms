// The idea is to, get all the subsequence of the first string. Now check if the second string comes in first
// then will return true

const isSubsequence = () => {
  let str1 = "ahbgdc";
  let str2 = "axc";
  let n = str1.length;
  let m = str2.length;

  let j = 0;

  if (n < m) {
    console.log(false);
    return;
  }

  for (let i = 0; (i < n) & (j < m); i++) {
    if (str1[i] === str2[j]) {
      j++;
    }
  }
  console.log(j === m);
  return;
};

isSubsequence();
