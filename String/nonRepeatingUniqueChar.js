const uniqueChars = () => {
  let str = "aabb";

  for (let i = 0; i < str.length; i++) {
    let flag = false;

    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        flag = true;
        break;
      }
    }
    if (flag == false) {
      console.log(i);
      return;
    }
  }
  console.log(-1);
  return;
};
uniqueChars();
