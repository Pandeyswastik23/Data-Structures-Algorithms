function reverseNum(n) {
  let reverse = 0;
  let lastDigit = 0;

  while (n !== 0) {
    lastDigit = Math.floor(n % 10);
    reverse = reverse * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  return reverse;
}
console.log(reverseNum(6856));
