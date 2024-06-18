const LongestPalindrome = () => {
  let s = "abccccdd";
  let count = 0;

  if (s.length === 1) {
    return 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count += 2;
    }
  }
  if (count < s.length) {
    return count + 1;
  }
  return count;
};

console.log(LongestPalindrome());

// Check first and second index value. If it is same, increment count by 2
// Case 2: If count is less then length of string : "aaaabcccc", count is 8 and length is 9 ; add count + 1
