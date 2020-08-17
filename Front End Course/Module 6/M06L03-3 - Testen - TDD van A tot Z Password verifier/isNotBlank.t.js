const {
    isNotBlank,    
} = require("./isNotBlank.js");

test("check if password is empty", () => {
    expect (isNotBlank(null)).toBe(false);
});

test("check if password is empty", () => {
    expect(isNotBlank("a")).toBe(true);
});

    // const password = [
    //     "henkie1",
    //     "1234a",
    //     "z",
    //     "henkie1234",
    //     "HENKhenk",
    //     "HENK33$",
    //     "1234",
    //     " "
    //     ] 
    // const expected = [true, true, true, true, true, true, true, false]

    // const output = isNotBlank()

