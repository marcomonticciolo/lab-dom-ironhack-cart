// ITERATION 1

function updateSubtotal(product) {
  let priceElement = product.querySelector('.price span');
  let quantityElement = product.querySelector('.quantity input')
 
  let price = priceElement.innerHTML
  let quantity = quantityElement.value 

  let priceTotal = price*quantity
  let subTotalValue = product.querySelector('.subtotal span');

  subTotalValue.innerHTML = priceTotal



  console.log('Calculating subtotal, yey!', priceTotal );

  return priceTotal
}

function calculateAll() {


  const allProducts = document.querySelectorAll('.product');

  let total = 0;

  for (let i = 0; i < allProducts.length; i++){
    total = total + updateSubtotal(allProducts[i])

  
  }

let productValues = document.querySelector("#total-value span");

return productValues.innerHTML = total
}


function removeProduct(event) {
  const target = event.currentTarget;

 target.parentElement.parentElement.remove()

  calculateAll

}

// ITERATION 5

function createProduct() {

  let newProduct = document.querySelector('.product').cloneNode(true)
console.log(newProduct);

  document.querySelector('tbody').appendChild(newProduct)

  let productName = document.querySelector('#product-name').value
  let productPrice = document.querySelector('#product-price').value

  newProduct.querySelector('.price span').innerHTML = productPrice;
  newProduct.querySelector('.name span').innerHTML = productName;
  
 let removeButton = newProduct.querySelector('.btn.btn-remove')

 removeButton.addEventListener('click',removeProduct )

 

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeButton = document.querySelectorAll('.btn.btn-remove')

  for (let i = 0; i < removeButton.length; i++){
    removeButton[i].addEventListener('click', removeProduct)
  }
  console.log('whatsup');

  //
  let createButton = document.querySelector('#create')
  createButton.addEventListener('click',createProduct)
});
