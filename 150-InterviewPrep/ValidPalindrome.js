// s = "A man, a plan, a canal: Panama";
// let newText = s.replace(/[^\p{L}]/gu, "").toLowerCase();

function ValidPalindrome(s) {
  s = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
  console.log(s);

  let rev = s.split("");
  rev = rev.reverse();
  rev = rev.join("");

  if (rev === s) {
    return true;
  } else {
    return false;
  }
}

console.log(ValidPalindrome("0P"));
