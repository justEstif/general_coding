function toCamelCase(str) {
  const strArr = str.split("");
  let newStr = "";
  strArr.forEach((el, i) => {
    el.trim();
    el === "-" || (el === "_" && strArr[i + 1] !== undefined)
      ? (strArr[i + 1] = strArr[i + 1].toUpperCase())
      : (newStr += el);
  });
  return newStr;
}
console.log(toCamelCase("hello-you"));
