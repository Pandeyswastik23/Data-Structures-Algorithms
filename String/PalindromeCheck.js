// To check wether the string or number is palindrome, it's reverse should be same as the original string / number
// ex: "ABCDCBA", it's reverse is: "ABCDCBA"
// similary for numbers: 121 and 121 are palindrome because the reverse is same as the original number.

const palindromeCheck = () => {
  let str = "ABCDCBA";
  str = str.toLocaleLowerCase();
  let strArr = str.split(""); // it will split the string into substring and return as array

  let reverseStr = strArr.reverse(); // it will reverse the array

  let strJoin = reverseStr.join(""); // It will join all the elements of an array into string.

  if (strJoin === str) {
    console.log("string is palindrome");
  } else {
    console.log("string is not palindrome");
  }
};

//palindromeCheck();

// Optimized approach - using two pointers

const optimizedSol = () => {
  let str = "geeks";

  let start = str.charAt(0);

  let end = str.charAt(str.length - 1);

  while (start < end) {
    if (start !== end) {
      console.log(false);
      return;
    } else {
      start++;
      end--;
    }
  }
  console.log(true);
};

optimizedSol();
