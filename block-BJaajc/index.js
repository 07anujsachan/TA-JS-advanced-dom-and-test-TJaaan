 function getFullName(firstName,lastName){
  let fullName = `${firstName} ${lastName}`;
  return fullName;
};

console.log(getFullName("anuj", "sachan"));

module.exports = getFullName;
