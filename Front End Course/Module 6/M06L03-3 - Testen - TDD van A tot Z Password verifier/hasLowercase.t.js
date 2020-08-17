const {
    hasLowercase,    
} = require("./hasLowercase.js");

test("check if password has lowercase", () => {
    expect(hasLowercase("A")).toBe(false);
});

test("check if password has lowercase", () => {
    expect(hasLowercase("Ab")).toBe(true);
});

test("check if password has lowercase", () => {
    expect(hasLowercase("a")).toBe(true);
});