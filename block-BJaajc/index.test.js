const {getFullName} = require("./index");
  
  test("accepts firstName and lastName and returns fullName", () => {
    expect(getFullName("Anuj", "Sachan")).toBe("Anuj Sachan");
  });