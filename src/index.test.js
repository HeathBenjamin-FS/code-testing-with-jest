const { sumOfArray, reverseStr, capitalizeWords, purgeDuplicates } = require("./logic");

test("Test function: sumOfArray", () => {
  const testArray = [1, 2, "test", 45, 10];

  const testResult = sumOfArray(testArray);

  expect(testResult).toBe(58);
});

describe("sumOfArray common issues", () => {
  test("test should return 0 for an empty array", () => {
    expect(sumOfArray([])).toBe(0);
  });

  test("test should return 0 for null/undefined", () => {
    expect(sumOfArray(null)).toBe(0);
    expect(sumOfArray(undefined)).toBe(0);
  });

  test("test should handle negative values", () => {
    expect(sumOfArray([5, 5, -5])).toBe(5);
  });
});

test("Test function: reverseStr", () => {
  const testStr = "test";

  const testStrResult = reverseStr(testStr);

  expect(testStrResult).toBe("tset");
});

describe("reverseStr common issues", () => {
  test("test should return empty string if nothing is passed", () => {
    expect(reverseStr("")).toBe("");
  });

  test("test should reverse a boolean after converting it to a string", () => {
    expect(reverseStr(true)).toBe("eurt");
  });
});

test("Test function: capitalizeWords", () => {
  const testPhrase = "i like the pokemon rayquaza";

  const testPhraseResult = capitalizeWords(testPhrase);

  expect(testPhraseResult).toBe("I Like The Pokemon Rayquaza");
});

describe("capitalizeWords common issues", () => {
  test("test should correct all caps arguments", () => {
    expect(capitalizeWords("TESTING THIS FUNCTION")).toBe("Testing This Function");
  });

  test("test should handle numbers in arguments", () => {
    expect(capitalizeWords("i have 10000 dogs")).toBe("I Have 10000 Dogs");
  });

  test("test should handle whitespace", () => {
    expect(capitalizeWords(" testing this out ")).toBe(" Testing This Out ");
  });

  test("test should handle only numbers being passed", () => {
    expect(capitalizeWords(1234)).toBe("1234");
  });

  test("test should handle multiple whitespaces", () => {
    expect(capitalizeWords("   this   is   a   test   ")).toBe("   This   Is   A   Test   ");
  });
});

test("Test function: purgeDuplicates", () => {
  const testArrayDupes = ["hello", 42, "test", "hello", 42, true];

  const testDupesResult = purgeDuplicates(testArrayDupes);

  expect(testDupesResult).toEqual(["hello", 42, "test", true]);
});

describe("purgeDuplicates common issues", () => {
  test("test should return an empty Array if an empty Array is passed as an argument", () => {
    expect(purgeDuplicates([])).toEqual([]);
  });

  test("test should handle no input at all", () => {
    expect(purgeDuplicates()).toEqual([]);
  });

  test("test should complete correctly even if there are numerous duplicates", () => {
    const testDupesArr = [1, 1, 1, 1, 1, 1, 1, 1];
    expect(purgeDuplicates(testDupesArr)).toEqual([1]);
  });

  test("test should honor types in Sets", () => {
    const testDupesAgain = [1, "1", 2, "2"];
    expect(purgeDuplicates(testDupesAgain)).toEqual([1, "1", 2, "2"]);
  });
});
