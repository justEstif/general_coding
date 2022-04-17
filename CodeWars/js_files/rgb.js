function rgb(...args) {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let hex = "#"
  args.forEach(value => {
    let a = Math.floor(value / 16)
    let b = 16 * ((value / 16) - Math.floor(a))
    if (a > 9) a = alphabet[parseInt(a - 10)]
    if (b > 9) b = alphabet[parseInt(b - 10)]
    hex += `${a}${b}`
  })
  return hex
}
