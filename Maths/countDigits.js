function count1(n) {
  let result = 0;

  while (n > 0) {
    n = n / 10;
    result = result + 1;
  }
  console.log(n);
  return result;
}
console.log(count1(6));
