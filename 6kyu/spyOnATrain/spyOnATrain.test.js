const lengthOfRailway = require("./spyOnATrain");

describe("first", () => {
  it("should return 150", () => {
    expect(
      lengthOfRailway("呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当")
    ).toBe(150);
  });
  it("should return 300", () => {
    expect(
      lengthOfRailway(
        "呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当"
      )
    ).toBe(300);
  });
  it("should return 150", () => {
    expect(
      lengthOfRailway(
        "呜呜呜哐当哐当面包饮料矿泉水了啊，哐当桶面火腿肠茶叶蛋了啊哐当哐当呜呜呜哐当哐当哐当北京站到了，下车的旅客请带好您的行李，准备下车哐当哐当"
      )
    ).toBe(150);
  });
});
