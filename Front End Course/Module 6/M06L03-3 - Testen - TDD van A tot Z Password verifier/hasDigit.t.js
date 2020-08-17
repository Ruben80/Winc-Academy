const {
    hasDigit,    
} = require("./hasDigit.js");

test("check if password has digits", () => {
    expect(hasDigit("1")).toBe(true);
});

test("check if password has multiple digits", () => {
    expect(hasDigit("12")).toBe(true);
});

test("check if password has no digits", () => {
    expect(hasDigit("a")).toBe(false);
});

test("check if password has digits", () => {
    expect(hasDigit("a1")).toBe(true);
});