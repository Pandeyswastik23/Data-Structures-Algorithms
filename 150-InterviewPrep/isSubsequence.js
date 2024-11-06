function isSubquence(s, t) {
  let len1 = s.length;
  let len2 = t.length;

  if (len1 < len2) {
    return false;
  }

  let j = 0;

  for (let i = 0; i < len1 && j < len2; i++) {
    if (s[i] === t[j]) {
      j++;
    }
  }

  if (j === len2) {
    return true;
  } else {
    return false;
  }
}
console.log(isSubquence("ahbgdc", "axc"));
