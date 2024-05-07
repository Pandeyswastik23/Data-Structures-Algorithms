const FactorialNum = (num) => {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result = result * i;
  }
  return result;
};

let num = 10;
console.log(FactorialNum(num));
