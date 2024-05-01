const Palindrome = (num) => {
  let lastDigit = 0;
  let reverse = 0;
  let temp = num;

  if (num.length === 1) {
    return true;
  }
  if (num < 0) {
    return false;
  }
  while (num !== 0) {
    lastDigit = Math.floor(num % 10);
    reverse = reverse * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  if (reverse === temp) {
    return true;
  } else {
    return false;
  }
};
let num = 121;
console.log(Palindrome(num));
