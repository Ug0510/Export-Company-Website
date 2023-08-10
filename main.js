

// Js for category carousel
function changeCategory(idd){
  btnReset();
  var button = document.getElementById(idd);
  button.style.backgroundColor = "#D2AE6D"; 
  button.style.color = "black";
  button.style.fontWeight = "900";
  if(idd=='btn-category1')
  {
    let box = document.getElementById('carouselExampleInterval1');
    box.classList.remove('d-none');
  }
  else if(idd=='btn-category2')
  {
    let box = document.getElementById('carouselExampleInterval2');
    box.classList.remove('d-none');
  }
  else if(idd=='btn-category3')
  {
    let box = document.getElementById('carouselExampleInterval3');
    box.classList.remove('d-none');
  }
  else if(idd=='btn-category4')
  {
    let box = document.getElementById('carouselExampleInterval4');
    box.classList.remove('d-none');
  }
    
}
function btnReset(){
  for(let i = 1; i < 5; i++)
  {
    let name = "btn-category" + i;
    var button = document.getElementById(name);
    button.style.backgroundColor="transparent";
    button.style.color = "#D2AE6D";
    button.style.fontWeight = '400';
  }
  let box = document.getElementById('carouselExampleInterval1');
  box.classList.add('d-none');
  box = document.getElementById('carouselExampleInterval2');
  box.classList.add('d-none');
  box = document.getElementById('carouselExampleInterval3');
  box.classList.add('d-none');
  box = document.getElementById('carouselExampleInterval4');
  box.classList.add('d-none');
}

//popUp js
let popup1=document.getElementById("prodid9");
function openPopUp(item){
  if(item!=null)
  {
    popup1=document.getElementById(item);
  }
    popup1.classList.add("open-popup");
}
function closePopUp(){
    popup1.classList.remove("open-popup");
}


// cart system js

window.onload = function() {
  let cartValue = localStorage.getItem('cartValue');
  if (cartValue === null) {
    cartValue = 0;
  } else {
    cartValue = parseInt(cartValue);
  }
  let cartValues = document.querySelectorAll('#cartValue');
  for (let i = 0; i < cartValues.length; i++) {
    cartValues[i].innerHTML = cartValue;
  }
  document.getElementById('btn-category1').style.color= 'black';
  let button = document.getElementById('btn-category1');
  if (button != null) {
    button.style.backgroundColor = "#D2AE6D";
    button.style.color = "black";
  } else {
    console.log();
  }
  
};

function addToCart(button) {
  // get the product ID from the button's parent element
  const productId = button.parentElement.id;
  // get the product name from the h2 element
  const productName = button.parentElement.querySelector('h2').textContent;
  // get the existing cart items from local storage or initialize an empty array
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // check if the current product is already in the cart
  const existingItemIndex = cartItems.findIndex(item => item.id === productId);

  if (existingItemIndex !== -1) {
    // if the product is already in the cart, increase the quantity by 1
    cartItems[existingItemIndex].quantity += 1;
  } else {
    // if the product is not in the cart, add it to the cart with quantity 1
    cartItems.push({ id: productId, name: productName, quantity: 1 });
  }

  // save the updated cart items to local storage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  let cartValue = localStorage.getItem('cartValue');
  if (cartValue === null) {
    cartValue = 0;
  } else {
    cartValue = parseInt(cartValue);
  }
  cartValue += 1;
  localStorage.setItem('cartValue', cartValue);
  let cartValues = document.querySelectorAll('#cartValue');
  for (let i = 0; i < cartValues.length; i++) {
    cartValues[i].innerHTML = cartValue;
  }
  console.log(cartItems);
  closePopUp();
}

const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');

const images = document.querySelectorAll('.popup');
images.forEach(image => {
  image.addEventListener('click', () => {
    popupImage.src = image.src;
    popup.style.display = 'block';
  });
});

const close = document.getElementsByClassName('close')[0];
close.addEventListener('click', () => {
  popup.style.display = 'none';
});