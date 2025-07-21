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
async function fetchProductsAsync() {

  try {

    const response = await fetch('https://www.course-api.com/javascript-store-products');

    const data = await response.json();

    displayProducts(data.slice(0, 5));

  } catch (error) {

    handleError(error);

  }

}
function displayProducts(products) {

  const container = document.getElementById('product-container');

  container.innerHTML = ''; // previous content clear


  products.forEach((product) => {

    const { name, price, image } = product.fields;


    const card = document.createElement('div');

    card.classList.add('product-card');
    card.innerHTML = `

      <img src="${image[0].url}" alt="${name}" />
      <h3>${name}</h3>
      <p>$${(price / 100).toFixed(2)}</p>

    `;


    container.appendChild(card);

  });

function handleError(error) {
console.error(`An error occurred: ${error.message}`);
}

document.addEventListener('DOMContentLoaded', () => {
fetchProductsAsync();
});

}