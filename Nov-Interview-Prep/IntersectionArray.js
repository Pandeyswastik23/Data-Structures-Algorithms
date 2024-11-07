var intersection = function (nums1, nums2) {
  let temp = [];

  //   for (let i = 0; i < nums1.length; i++) {
  //     for (let j = 0; j < nums2.length; j++) {
  //       if (nums1[i] === nums2[j]) {
  //         let isUnieque = true;

  //         for (let k = 0; k < temp.length; k++) {
  //           if (temp[k] === nums1[i]) {
  //             isUnieque = false;
  //             break;
  //           }
  //         }

  //         if (isUnieque) {
  //           temp.push(nums1[i]);
  //         }
  //       }
  //     }
  //   }
  //   return temp;

  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i]) && !temp.includes(nums1[i])) {
      temp.push(nums1[i]);
    }
  }
  return temp;
};

console.log(intersection([1, 2, 3, 4], [4, 2]));
