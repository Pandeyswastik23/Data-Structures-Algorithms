const LongestPalindrome = () => {
  let s = "aba";
  let count = 0;
  let sArray = s.split("").sort().join("");
  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] === sArray[i + 1]) {
      count += 2;
      i++;
    }
  }
  if (count < sArray.length) {
    return count + 1;
  }
  return count;
};

console.log(LongestPalindrome());

// Check first and second index value. If it is same, increment count by 2
// Case 2: If count is less then length of string : "aaaabcccc", count is 8 and length is 9 ; add count + 1
