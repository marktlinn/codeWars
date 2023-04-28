const midtownNav = require("./midtownNavigator");

describe("Code challenge functionality tests", () => {
  it("should ", () => {
    expect(
      midtownNav("8th Ave and W 38th St", "7th Ave and W 36th St")
    ).toEqual("Walk 2 blocks south, and 1 blocks east");
  });
  it("should ", () => {
    expect(
      midtownNav("5th Ave and W 46th St", "7th Ave and E 58th St")
    ).toEqual("Walk 12 blocks north, and 2 blocks west");
  });
});
