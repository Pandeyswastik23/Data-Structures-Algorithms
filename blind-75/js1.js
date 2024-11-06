const arr = [85, 87, 44, 37, 76, 60];
let sum = 0;

for (el of arr) {
  sum = sum + el;
}
console.log(sum);
let avg = Math.floor(sum / arr.length);
console.log(avg);
