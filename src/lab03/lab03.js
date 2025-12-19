console.log("Lab 03");


const product1 = {
    name: "Laptop",
    price: 1200,
    isStock: true
};

const product2 = {
    name: "Smartphone",
    price: 800,
    isStock: false
};

const product3 = {
    name: "Tablet",
    price: 500,
    isStock: true
};

const products = [product1, product2, product3];

console.log("Q1:");
console.log("First product: ", product1.name);

console.log("======================");
console.log("Q2:");
product2.price =150;
console.log("Updated price of product2: ", product2.price);

console.log("======================");
console.log("Q3:");

products.push({
    name: "Smartwatch",
    price: 300,
    isStock: true
})
console.log("Products after adding new product: ", products);

console.log("======================");
console.log("Q4:");

products.pop();
console.log("Products after removing last product: ", products);

console.log("======================");
console.log("Q5:");

products.forEach((value, index) => {
    console.log(`${value.name}`)
})

console.log("======================");
console.log("Q6:");
const productPrices = products.map((value) => {
    return value.price;
})
console.log("Array of product prices: ", productPrices);

console.log("======================");
console.log("Q7:");
const inStockProducts = products.filter((value) => {
    return value.isStock === true;
})
console.log("Products in stock: ", inStockProducts);

console.log("======================");
console.log("Q8:");

for (let key in product1) {
    console.log(key, product1[key]);
}