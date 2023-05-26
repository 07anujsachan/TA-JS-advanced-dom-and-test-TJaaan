
function getFullName(firstName, lastName) {
  let fullName = `${firstName} ${lastName}`;
  return fullName;
}

function isPalindrome(str) {
  let string = str.split("");

  let reverseArr = string.reverse();

  let reverseStr = reverseArr.join("");

  if (str === reverseStr) {
    return true;
  } else {
    return false;
  }
}

function getCircumfrence(radius) {
  let circumference = 2 * Math.PI * radius;
  return `The circumference is ${circumference}`;
}

function getArea(radius) {
  let area = radius * radius * Math.PI;
  return `The area is ${area}`;
}

module.exports = {
  getFullName,
  isPalindrome,
  getCircumfrence,
  getArea,
};