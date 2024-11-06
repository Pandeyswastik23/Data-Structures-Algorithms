// function deepCopy(obj) {
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }

//   if (typeof obj === "" || typeof obj === number) {
//     return obj;
//   }

//   let copiedArr = Array.isArray(obj) ? [] : {};

//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       copiedArr.push(obj);
//     }
//   }
//   return copiedArr;
// }

// let originalObj = {
//   a: 1,
//   b: {
//     c: 2,
//   },
// };

// console.log(deepCopy([1, 2, 3]));

// console.log(deepCopy("Hello"));

function deepCopy2(target) {
  if (Array.isArray(target)) {
    let copiedArr = [];
    for (let value of target) {
      const abc = deepCopy2(value);
      copiedArr.push(abc);
    }
    return copiedArr;
  }

  if (typeof target === "object") {
    let copiedObj = {};
    for (let item in target) {
      const copiedVal = deepCopy2(target[item]);
      copiedObj[item] = copiedVal;
    }
    return copiedObj;
  }

  return target;
}

const regArr = [1, 2, 3, [1, 2, 3, 4], 1];
const copiedArr = deepCopy2(regArr);
console.log(copiedArr);

const origObj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
  },
};

let copiedObj = deepCopy2(origObj);
console.log(copiedObj);
