import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a simple palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("handles case-insensitive palindromes", () => {
    expect(isPalindrome("Mom")).toBe(true);
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error for words with non-alphabetic characters", () => {
    expect(() => isPalindrome("hello123")).toThrow("Input must contain only alphabetic characters");
    expect(() => isPalindrome("wow!")).toThrow("Input must contain only alphabetic characters");
  });

  it("throws an error for non-string input", () => {
    expect(() => isPalindrome(12321)).toThrow("Input must be a string");
    expect(() => isPalindrome(null)).toThrow("Input must be a string");
    expect(() => isPalindrome({})).toThrow("Input must be a string");
  });
});

