const { moveZeros } = require("../js_files/move_zeros");

describe("testing inital ideas", () => {
  it("should return the arr", () => {
    let testArr = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
    let newArr = moveZeros(testArr);
    const expectedArr = [false, 1, 1, 2, 1, 3, "a", 0, 0];
    expect(newArr).toEqual(expectedArr);
  });
  it("should return the arr", () => {
    let testArr = [1, 2, 0, 1, 0, 1, 0, 3, 0, 1];
    let newArr = moveZeros(testArr);
    const expectedArr = [1, 2, 1, 1, 3, 1, 0, 0, 0, 0];
    expect(newArr).toEqual(expectedArr);
  });
});
