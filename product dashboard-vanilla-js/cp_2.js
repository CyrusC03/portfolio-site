// first function part of dstep 3

function fetchProductsThen() {
fetch('https://www.course-api.com/javascript-store-products')
.then((res) => res.json())
.then((data) => {
console.log("Products (then):");
data.slice(0, 5).forEach((product) => {
console.log(product.fields.name);
});
})
.catch((error) => {
console.error("Error fetching products with .then():", error);
});
}