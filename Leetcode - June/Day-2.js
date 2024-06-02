let arr = ["H", "a", "n", "n", "a", "h"];

let low = 0;
let high = arr.length - 1;

//console.log("Before reverseal", arr);

while (low < high) {
  let temp = arr[low];
  arr[low] = arr[high];
  arr[high] = temp;
  low++;
  high--;
}

//console.log("After reverseal", arr);

let st = "hello";
let v = st.split();

let unieque = new Set(...v);
let uniequeArr = Array.from(unieque);
console.log(uniequeArr);
