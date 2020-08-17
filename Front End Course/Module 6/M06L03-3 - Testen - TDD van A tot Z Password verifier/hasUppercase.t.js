const {
    hasUppercase,    
} = require("./hasUppercase.js");

test("check if password has no uppercase", () => {
    expect(hasUppercase("a")).toBe(false);
});

test("check if password has uppercase", () => {
    expect(hasUppercase("Ab")).toBe(true);
});

test("check if password has uppercase", () => {
    expect(hasUppercase("A")).toBe(true);
});