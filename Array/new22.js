// var a = 1;
// function a() {}

// console.log(typeof a);

// var b;
// function b() {}
// b = 1;

// console.log(typeof b);

// function c() {}
// var c = 1;

// console.log(typeof c);

// var d = 1;

// (function () {
//   d = "2";
//   console.log(typeof d);
//   function d() {}
// })();

// console.log(typeof d);

// var e = 1;
// const f = function e() {};

// console.log(typeof e);

// (() => {
//   if (!fn) {
//     function fn() {
//       console.log("2");
//     }
//   }
//   fn();
// })();

// function fn() {
//   console.log("1");
// }

// // another one
// function fn1() {
//   console.log("3");
// }

// for (let i = 0; i < 4; i++) {
//   console.log(i);
// }
// console.log(i);

// for (var i = 0; i < 4; i++) {
//   console.log("Inside", i);
// }
// console.log("Outside", i);

// function smallestUniqueSubstr(str) {
//   let arr = str.split(", ");
//   let newSet = new Set(...arr);
//   console.log(newSet);
//   const str1 = Array.from(newSet).join("");
//   console.log(str1);
// }
// smallestUniqueSubstr("xyzabcxyzabc");

const orignalObj = {
  a: 1,
  b: {
    c: 2,
  },
};

const shallowCopy = { ...orignalObj };
// console.log("Original obj", orignalObj);
shallowCopy.a = 36;
shallowCopy.b.c = 45;
// console.log("Shallow copy", shallowCopy);
// console.log("Original obj", orignalObj);

// const newObj = {
//   a: 10,
//   b: 60,
//   c: {
//     d: 3,
//     e: 56,
//     f: {
//       g: 89,
//     },
//   },
// };
// console.log(newObj);
// const deepObj = JSON.parse(JSON.stringify(orignalObj));
// console.log(deepObj);
// deepObj.e = 80;
// deepObj.g = 109;

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
var z = x();
console.log(z);
