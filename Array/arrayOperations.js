// Searching in an unsorted array
const search = (arr, target) => {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(search([20, 4, 67, 8, 5], 833));
