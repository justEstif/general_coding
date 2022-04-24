let result = "hello";

result = Boolean(100);

result = "";
result = Boolean(result);
console.log(result, typeof result);
