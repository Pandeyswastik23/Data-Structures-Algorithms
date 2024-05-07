const Anagaram = () => {
  let str1 = "listen";
  let str2 = "silent";

  let obj1 = {};
  let obj2 = {};

  if (str1.length !== str2.length) {
    console.log(false);
    return;
  }

  for (let i = 0; i < str1.length; i++) {
    if (obj1[str1[i]] == undefined) {
      obj1[str1[i]] = 1;
    } else {
      obj1[str1[i]] += 1;
    }
  }

  for (let j = 0; j < str2.length; j++) {
    if (obj2[str2[j]] == undefined) {
      obj2[str2[j]] = 1;
    } else {
      obj2[str2[j]] += 1;
    }
  }

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    console.log(false);
    return;
  }
  for (let key in obj1) {
    if (!(key in obj2) || obj1[key] !== obj2[key]) {
      return false;
    }
  }
  console.log(true);
  return;
};

Anagaram();
