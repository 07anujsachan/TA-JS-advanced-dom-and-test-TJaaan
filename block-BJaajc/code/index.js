function getFullName(firstName, lastName) {
  return '${"firstName"}  ${"lastName"}';
}
function isPalindrome(str) {
  let length = str.length - 1;
  for (let i = 0; i < length / 2; i++) {
    let x = str[i];
    let y = str[length - i];
    if (x != y) {
      return false;
    } else {
      return true;
    }
  }
}
function getCircumference(radius) {
  let circumference = 2 * 3.14 * radius;
  return `The circumference is ${circumference}`;
}
function getArea(radius) {
  let area = 3.14 * radius * radius;
  return `The area is ${area}`;
}

module.exports = getFullName , isPalindrome , getCircumference, getArea;
