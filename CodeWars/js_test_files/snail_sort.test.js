const { snailSort } = require("../js_files/snail_sort.js");

describe("testing the snailSort", () => {
  let example, expected, result;
  it.only("checking with nested 1 empty array", () => {
    example = [[]]
    expected = []
    result = snailSort(example)
    expect(result).toEqual(expected)
  })
  it.only("checking with nested 1 array", () => {
    example = [[1]]
    expected = [1]
    result = snailSort(example)
    expect(result).toEqual(expected)
  })
  it.only("checking with nested 1 array", () => {
    example = [[1, 2]]
    expected = [1, 2]
    result = snailSort(example)
    expect(result).toEqual(expected)
  })
  it.only("checking if the snailSort function works for 1 array with 3 x 3 array", () => {
    example = [
      [1, 2],
      [4, 5],
    ];
    expected = [1, 2, 5, 4];
    result = snailSort(example);

    expect(result).toEqual(expected);
  });
  it("checking if the snailSort function works for 1 array with 3 x 3 array", () => {
    example = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];
    result = snailSort(example);

    expect(result).toEqual(expected);
  });
});


for (let i = 0; i < bigArr.length; i++) {
  for (let j = 0; j < bigArr.length; j++) {
    newArr.push(bigArr[i][j])
  }
