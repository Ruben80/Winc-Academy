const {
    isLessThen8Chars,    
} = require("./isLessThen8Chars.js");

test("isLessThen8Chars", () => {
    expect(isLessThen8Chars("12345678")).toBe(true);
});

test("isLessThen8Chars", () => {
    expect(isLessThen8Chars("123456789")).toBe(false);
});