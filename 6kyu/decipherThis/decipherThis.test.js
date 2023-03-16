const { decipherThis, parseNumsForLetters } = require("./decipherThis");

describe("Should decipher a string and return the correct expected result", () => {
  it("Test return output of test => should decipher correctly", () => {
    expect(
      decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o")
    ).toBe("Have a go at this and see how you do");
  });
  it("Test return output of test => should decipher correctly", () => {
    expect(decipherThis("72olle 103doo 100ya")).toBe("Hello good day");
  });
  it("Test return output of test => should decipher correctly", () => {
    expect(decipherThis("82yade 115te 103o")).toBe("Ready set go");
  });
});
