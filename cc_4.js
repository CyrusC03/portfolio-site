//step 2
const product1 = {name:"Laptop",category:"electronics",price:799.99,inventory:15,discount:0.00};
const product2 = {name:"T-shirt",category:"apparel",price:29.99,inventory:10,discount:0.00};
const product3 = {name:"Energy drink",category:"groceries",price:7.99,inventory:25,discount:0.00};
const product4 = {name:"Vacuum cleaner",category:"household",price:79.99,inventory:15,discount:0.00};
const product5 = {name:"Gaming chair",category:"furniture",price:99.99,inventory:10,discount:0.00};
let products=[product1,product2,product3,product4,product5];
console.log("step 2 completed");
//step3
var discount=0;
for(const [index,product] of products.entries()) {
    switch (product.category) {
        case "electronics":
            product.discount=0.20; 
            break;                       
        case "apparel":
            product.discount=0.15;
            break;
        case "groceries":
            product.discount=0.10;
            break;
        case "household":
            product.discount=0.10;
            break;
        default:
            break;
    }  
}
console.log("step 3 completed");

//step4

function getOverallDiscount(customerType) {
    if (customerType='student') {
        return 0.05;
    } else if (customerType='senior') {
        return 0.07;
    } else {
        return 0;
    }
}

console.log("step 4 completed");
//step 5 and 6
const customer1={name:"John Doe", customerType:'regular', cart:[product5]};
const customer2={name:"Jane Smith",customerType:'student',cart:[product1]};
const customer3={name:"Mike Banning",customerType:'senior',cart:[product2]};
let customers=[customer1,customer2,customer3];
var count=0;
var totalPrice;

while (count < customers.length) {
    var product = customers[count].cart[0];
    console.log(product.name);
    //calculate price after discounts
    totalPrice = product.price * (1-product.discount-getOverallDiscount(customers[count].customerType));
    //round to two decimal places
    totalPrice=totalPrice.toFixed(2);
    product.inventory=product.inventory-1;
    console.log(`Name:${customers[count].name}`);
    console.log("Total Cost:" + `${totalPrice}`);
    count++;

    continue;
}
console.log("step 5 completed");
console.log('\n');
//Step 6
let step6Product = products[0];
for(let key in step6Product) {
    console.log(`${key}:${step6Product[key]}`);
}
console.log("step 6 completed");
console.log('\n');

//Step 7
console.log("Printing products after inventory update");
for(let product of products) {
    for(let [index,item] of Object.entries(product)) {
        console.log(`${index}:${item}`);
    }
}
console.log("step 7 completed");
