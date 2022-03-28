// map method
// iterates over an array and returns an updated value for each item of the array and them pushes the updated value into a new array

const prices = [20, 10, 30, 25, 15, 40, 80, 5];
const salePrices = prices.map((price) => {
  return price / 2;
});

const products = [
  { name: "gold star", price: 20 },
  { name: "mushroom", price: 40 },
  { name: "green shells", price: 30 },
  { name: "banana skin", price: 10 },
  { name: "red shells", price: 50 },
];

const halfPricedOver30 = products.map((product) => {
  if (product.price > 30) {
    return { name: product.name, price: product.price / 2 };
  } else {
    return { name: product.name, price: product.price };
  }
});
console.log(halfPricedOver30);
