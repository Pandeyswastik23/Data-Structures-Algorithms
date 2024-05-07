const TrailingZeros = (num) => {
  let result = 1;
  let count = 0;
  let countZero = 0;
  let lastDigit = 0;
  for (let i = 2; i <= num; i++) {
    result = result * i;
  }

  while (result !== 0) {
    lastDigit = result % 10;
    countZero = countZero * 10 + lastDigit;
    if (lastDigit > 0) {
      break;
    }
    if (lastDigit === 0) {
      count = count + 1;
    } else {
      return 0;
    }
    result = result / 10;
  }

  return count;
};

let num = 30;
console.log(TrailingZeros(num));
