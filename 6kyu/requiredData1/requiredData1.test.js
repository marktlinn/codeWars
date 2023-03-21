const countSel = require("./requiredData1");

describe("Sample tests for requiredData challenge", () => {});
it("The output array should be  [10,7,5,[[-5], 3],]", () => {
  expect(countSel([-3, -2, -1, 3, 4, -5, -5, 5, -1, -5])).toEqual([
    10,
    7,
    5,
    [[-5], 3],
  ]);
});
it("The output should be [10,7,4,[[-2, -1, 5], 2],]", () => {
  expect(countSel([5, -1, 1, -1, -2, 5, 0, -2, -5, 3])).toEqual([
    10,
    7,
    4,
    [[-2, -1, 5], 2],
  ]);
});

it("The output should be ([10,6,3,[[-2], 3],])", () => {
  expect(countSel([-2, 4, 4, -2, -2, -1, 3, 5, -5, 5])).toEqual([
    10,
    6,
    3,
    [[-2], 3],
  ]);
});

it("The output should be 10,5,1,[[4], 3],]", () => {
  expect(countSel([4, -5, 1, -5, 2, 4, -1, 4, -1, 1])).toEqual([
    10,
    5,
    1,
    [[4], 3],
  ]);
});
it(" The output should be [14,8,4,[[2, 4], 3],]", () => {
  expect(countSel([4, 4, 2, -3, 1, 4, 3, 2, 0, -5, 2, -2, -2, -5])).toEqual([
    14,
    8,
    4,
    [[2, 4], 3],
  ]);
});
