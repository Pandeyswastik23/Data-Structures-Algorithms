// let arr = [1, 2, 3, 6, 2, 3, 4, 7, 8];
// arr.sort();
// console.log(arr);

// let middleIndex = Math.ceil(arr.length / 3);
// let firstHalf = arr.splice(0, middleIndex);
// let secondHalf = arr.splice(middleIndex, 0);
// console.log(firstHalf);
// console.log(secondHalf);

let hand = [1, 2, 3, 6, 2, 3, 4, 7, 8];
let groupSize = 3;
hand.sort();
const index = Math.ceil(hand / groupSize);
console.log(index);

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

chunk;
