import { it, expect, describe } from "@jest/globals";
const { pigIt } = require('../js_files/simple_pig_latin')

/**
 * get a string
 ** divide the string into words getWords()
 *** forEach word => split into letters getLetters()
 **** move the first letter to the end and  moveFirstToLast()
 ***** add 'ay' to the end addAy()
 * */

describe("pigIt will return the correct answers", () => {
  it("pigIt('') will return ''", () => {
    let result = pigIt("")
    let expected = ""
    expect(result).toBe(expected)
  })
  it("pigIt('Hello world !') will return 'elloHay orldway !'", () => {
    let result = pigIt("Hello world !")
    let expected = "elloHay orldway !"
    expect(result).toBe(expected)
  })
  it("pigIt('Hello world !') will return 'elloHay orldway !'", () => {
    let result = pigIt('Pig latin is cool');
    let expected = "igPay atinlay siay oolcay"
    expect(result).toBe(expected)
  })
})

