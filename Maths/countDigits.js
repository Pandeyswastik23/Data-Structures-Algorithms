function count1(n) {
  let result = 0;

  while (n > 0) {
    n = Math.floor(n / 10);
    result = result + 1;
  }
  return result;
}
console.log(count1(123));
