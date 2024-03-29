const {
  verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
} = require("./passwordVerifier.js");

// test("Paswoord heeft een minimale score van 3", () => {

//   const expectedScore = 3;

//   const output = myFunctions("Ben" + 99);
//   // const output = myFunctions("Ben");

//   console.log('Expected Score = ' + expectedScore + ' Output Score = '  + output.score)
  
//   expect(output.score).toBeGreaterThanOrEqual(expectedScore);
//   expect(output.valid).toBe(true)

// });

describe("Password verifier utility functions", () => {
  test("hasRightLength", () => {
      expect(hasRightLength("123456789")).toBe(false);
  });

  test("hasRightLength, path 1", () => {
      expect(hasRightLength("12345678")).toBe(true);
  });

  test("hasRightLength, path 2", () => {
      expect(hasRightLength("")).toBe(true);
  });

  test("hasRightLength, null", () => {
      expect(hasRightLength(null)).toBe(false);
  });

  test("isNotNull", () => {
      expect(isNotNull(null)).toBe(false);
  });

  test("isNotNull, path", () => {
      expect(isNotNull("a")).toBe(true);
  });

  test("hasUpperCaseCharacter", () => {
      expect(hasUpperCaseCharacter("a")).toBe(false);
  });

  test("hasUpperCaseCharacter, path 1", () => {
      expect(hasUpperCaseCharacter("A")).toBe(true);
  });

  test("hasUpperCaseCharacter, path 2", () => {
      expect(hasUpperCaseCharacter("Ab")).toBe(true);
  });

  test("hasUpperCaseCharacter, only digits", () => {
      expect(hasUpperCaseCharacter("12")).toBe(false);
  });

  test("hasUpperCaseCharacter, null", () => {
      expect(hasUpperCaseCharacter(null)).toBe(false);
  });

  test("hasLowerCaseCharacter", () => {
      expect(hasLowerCaseCharacter("Z")).toBe(false);
  });

  test("hasLowerCaseCharacter, path 1", () => {
      expect(hasLowerCaseCharacter("z")).toBe(true);
  });

  test("hasLowerCaseCharacter, path 2", () => {
      expect(hasLowerCaseCharacter("Zy")).toBe(true);
  });

  test("hasLowerCaseCharacter, only digits", () => {
      expect(hasLowerCaseCharacter("12")).toBe(false);
  });

  test("hasLowerCaseCharacter, null", () => {
      expect(hasLowerCaseCharacter(null)).toBe(false);
  });

  test("hasDigit", () => {
      expect(hasDigit("a")).toBe(false);
  });

  test("hasDigit, path 1", () => {
      expect(hasDigit("1")).toBe(true);
  });

  test("hasDigit, path 2", () => {
      expect(hasDigit("a1")).toBe(true);
  });

  test("hasDigit, null", () => {
      expect(hasDigit(null)).toBe(false);
  });
});

describe("Check combination of conditions", () => {
  test("minimumConditionsReached, all conditions false", () => {
      const conditions = [false, false, false, false, false];
      expect(minimumConditionsReached(conditions)).toBe(false);
  });

  test("minimumConditionsReached under cutoff", () => {
      const conditions = [true, true, false, false, false];
      expect(minimumConditionsReached(conditions)).toBe(false);
  });

  test("minimumConditionsReached on cutoff", () => {
      const conditions = [true, true, true, false, false];
      expect(minimumConditionsReached(conditions)).toBe(true);
  });

  test("minimumConditionsReached over cutoff", () => {
      const conditions = [true, true, true, true, false];
      expect(minimumConditionsReached(conditions)).toBe(true);
  });
});

describe("Verify password", () => {
  test("verifyPassword null", () => {
      expect(verifyPassword(null)).toBe(false);
  });

  test("verifyPassword '1'", () => {
      expect(verifyPassword("1")).toBe(false);
  });

  test("verifyPassword only digits", () => {
      expect(verifyPassword("12345678")).toBe(false);
  });

  test("verifyPassword only uppercase", () => {
      expect(verifyPassword("ABC")).toBe(false);
  });

  test("verifyPassword only lowercase", () => {
      expect(verifyPassword("abc")).toBe(true);
  });

  test("verifyPassword only lowercase, but too long", () => {
      expect(verifyPassword("abcdefghi")).toBe(false);
  });

  test("verifyPassword lowercase and uppercase, but too long", () => {
      expect(verifyPassword("Ab")).toBe(true);
  });

  test("verifyPassword, correct password", () => {
      expect(verifyPassword("Ab1")).toBe(true);
  });
});