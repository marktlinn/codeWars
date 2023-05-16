const reverseVowels = require("./reverseVowelString");
describe("Code challenge functionality tests", () => {
  it("should return the order of the vowels reversed", () => {
    expect(reverseVowels("hello")).toEqual("holle");
  });
  it("should return the order of the vowels reversed", () => {
    expect(reverseVowels("Reverse Vowels In A String")).toEqual(
      "RivArsI Vewols en e Streng"
    );
  });
  it("should return the order of the vowels reversed", () => {
    expect(reverseVowels("Tomatoes")).toEqual("Temotaos");
  });
  it("should return input string if no vowels found", () => {
    expect(reverseVowels("")).toEqual("");
  });
  it("should return string unchanged if no vowels found", () => {
    expect(reverseVowels("qwrtplsdfghjkkjqwrt")).toEqual("qwrtplsdfghjkkjqwrt");
  });
});
