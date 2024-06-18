// const z = {
//   b: 1,
//   display: function () {
//     console.log("display=", this.b);
//   },
//   display2: () => {
//     console.log("display=", this.b);
//   },
// };
// z.display();
// z.display2();

// let a = 4;
// let b = 10;
// function greet() {
//   console.log(a);
//   console.log(b);
//   //console.log(c);
//   var b = "hello";
//   let c = 20;
// }
// greet();
// console.log(b);
// 4 hello undefined 10   by Swastik
// 11:24 am
// Swastik
// 4
// hello
// undefined
// 10

console.log("A");
Promise.resolve().then(() => {
  console.log("B");
  setTimeout(() => {
    console.log("C");
  }, 0);
});
console.log("D");
setTimeout(() => {
  console.log("E");
}, 1000);
setTimeout(() => {
  console.log("F");
}, 0);
// A, B, C, F, E by Swastik
// 11:27 am
// Swastik
// A, B, C, F, E
// A, D, B, C, F, E by Swastik
// 11:28 am
// Swastik
// A, D, B, C, F, E
// function greet(){   let a = 10; let b = 20;... by Swastik
// 11:31 am
// Swastik
// function greet(){

// let a = 10;
// let b = 20;
// let c;
// c = a+b;
// retyrn c;

// }
// greet()
// const arr = [-8, 6, 3, 1, -10, 9, -3], by Ankur Gautam
// Ankur Gautam
// 11:34 am
// const arr = [-8, 6, 3, 1, -10, 9, -3],
// const arr = [1, 2, 4, 5, 7, 8, 9], There ... by Ankur Gautam
// Ankur Gautam
// 11:52 am
// const arr = [1, 2, 4, 5, 7, 8, 9],
// There will be 2 buttons,
// 1. Start: on clicking start it will show 1 element from array and increase counter by 1 in 1 sec
// 2. Pause: on clicking pause it will pause the changing of element
// On again clicking start it will start from counter where it was pause
// Link https://codesandbox.io/p/sandbox/trust... by Swastik
// 12:21 pm
// Swastik
// https://codesandbox.io/p/sandbox/trusting-montalcini-tx5l23?file=%2Fsrc%2FCounter.js%3A13%2C1-16%2C16
// has context menu
