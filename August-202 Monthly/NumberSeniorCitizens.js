function countSeniors(details) {
  let count = 0;

  for (let i = 0; i < details.length; i++) {
    let ageCount = details[i].substring(11, 13);
    if (ageCount > 60) {
      count++;
    }
  }
  return count;
}

console.log(countSeniors(["65-12-34-1234", "70-12-34-1234", "20-12-34-1234"]));



