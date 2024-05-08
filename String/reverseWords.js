/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // Helper function to reverse a portion of the string
  const reverse = (str, start, end) => {
    while (start < end) {
      const temp = str[start];
      str[start] = str[end];
      str[end] = temp;
      start++;
      end--;
    }
  };

  // Convert the string to an array of characters
  const trimmedArr = s.trim(); // removing leading and trailing whitespaces
  const strArray = trimmedArr.split("");

  let start = 0;
  const n = strArray.length;

  // Iterate through the string to reverse individual words
  for (let end = 0; end < n; end++) {
    if (strArray[end] === " ") {
      reverse(strArray, start, end - 1);
      start = end + 1;
    }
  }

  // Reverse the last word and then the entire string
  reverse(strArray, start, n - 1);
  reverse(strArray, 0, n - 1);

  // Join the array back into a string
  return strArray.join("").replace(/\s+/g, " ");
};
