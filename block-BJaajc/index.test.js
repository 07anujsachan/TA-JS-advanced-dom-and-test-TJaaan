const {
    getFullName,
    isPalindrome,
    getCircumfrence,
    getArea,
  } = require("./index");
  
  test("accepts firstName and lastName and returns fullName", () => {
    expect(getFullName("Anuj", "Sachan")).toBe("Anuj Sachan");
  });
  test("accepts firstName and lastName and returns fullName", () => {
    expect(getFullName("Anurag", "Sachan")).toBe("Anurag Sachan");
  });
  
  
  test("checks if the  function returns true or false if the string when  read from forwards as well as backwards is same", () => {
    expect(isPalindrome("dad")).toBe(true);
  });
  
  test("checks if the  function returns true or false if the string when  read from forwards as well as backwards is same", () => {
    expect(isPalindrome("kanak")).toBe(true);
  });
  
  test("checks if the  function returns true or false if the string when  read from forwards as well as backwards is same", () => {
    expect(isPalindrome("hello")).toBe(false);
  });
  
  test("takes the radius of a circle and returns circumference", () => {
    expect(getCircumfrence(5)).toBe("The circumference is 31.41592653589793");
  });
  
  test("takes the radius of a circle and returns circumference", () => {
    expect(getCircumfrence(8)).toBe("The circumference is 50.26548245743669");
  });
  
  test("takes the radius of a circle and returns circumference", () => {
    expect(getCircumfrence(10)).toBe("The circumference is 62.83185307179586");
  });
  
  test("takes the radius of a circle and returns area", () => {
    expect(getArea(10)).toBe("The area is 314.1592653589793");
  });
  
  test("takes the radius of a circle and returns area", () => {
    expect(getArea(12)).toBe("The area is 452.3893421169302");
  });
  
  test("takes the radius of a circle and returns area", () => {
    expect(getArea(15)).toBe("The area is 706.8583470577034");
  });