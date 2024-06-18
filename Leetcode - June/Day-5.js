const countCommon = () => {
  let words = ["bella", "label", "roller"];
  let res = words.map((word) => word.split(""));
  let n = words.length;
  let resArr = [];

  for (let i = 0; i < res.length; i++) {
    if (res[i] === res[i + 1]) {
      count += 2;
      if (count % n === 0) {
        resArr.push[res[i]];
      }
    }
  }
  console.log(resArr);
};

countCommon();
