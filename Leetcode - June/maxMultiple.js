// const maxMultiple = () => {
//   const arr = [-8, 6, 3, 1, -10, 9, -3];

//   let res = 0;
//   let product = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       product = arr[i] * arr[j];
//       res = Math.max(res, product);
//     }
//   }
//   return res;
// };

// console.log(maxMultiple());

function greet() {
  let x = 10;

  function closeBox() {
    console.log(x);
  }
  return closeBox();
}

greet();
