//start of FAQ show answer
const showQuestionBtns = document.querySelectorAll(".show-question-button");

showQuestionBtns.forEach((btn) => {
  btn.addEventListener("click", showAnswer);
});
function showAnswer(e) {
  const answerArea = e.target.parentElement.nextElementSibling;
  answerArea.classList.toggle("showAnswer");
}

//end of FAQ show answer

// start of mobile nav script
const mobileNavBtn = document.querySelector("#mobile-nav-btn");
mobileNavBtn.addEventListener("click", openMobileNav);

function openMobileNav() {
  const mobileNav = document.querySelector("#mobile-nav");
  mobileNav.classList.toggle("animation-class");
}
// end of mobile nav script

// start of backgroud dimmer script
const backgroundDimmer = document.querySelector("#background-dimmer");

function showDimmer() {
  backgroundDimmer.style.opacity = "85%";
  backgroundDimmer.style.zIndex = "0";
}

function hideDimmer() {
  backgroundDimmer.style.opacity = "0%";
  backgroundDimmer.style.zIndex = "-1";
}
// end of backgroud dimmer script

//start of  validation

//user constructor
function User(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
}

//array containing user prototypes
let users = [
  { name: "Chad", email: "chad@gmail.com", password: "apple" },
  { name: "Steph", email: "steph@gmail.com", password: "orange" },
  { name: "Dave", email: "dave@gmail.com", password: "peach" },
  { name: "Izzy", email: "izzy@gmail.com", password: "pear" },
];

//start of login validation

//keep track of users array index
let currentUserIndex = 0;

//validation status
let emailValidator = false;

function loginEmailValidation(email, password) {
  //loop through each user in the users array
  for (user of users) {
    //if the email from the input matches
    if (user.email == email) {
      //save the users array index
      currentUserIndex = users.indexOf(user);
      //update the validation status
      emailValidator = true;
    }
  }
  checkValidator(password);
}

function checkValidator(password) {
  //if the valiation failed (did not change)
  if (emailValidator == false) {
    alert("user not found");
  } else {
    //if the validation status is true then run next function
    validatePassword(password);
  }
}

function validatePassword(password) {
  /*if the password for the users index that was just saved matches entered password
     then alert a successful login and change the href so a new html page loads */
  if (users[currentUserIndex].password == password) {
    alert("successful login");
    runLoginBtn.href = "lobby.html";
  } else {
    //if the passwords dont match, alert incorrect password
    alert("Incorrect Password");
  }
}

const runLoginBtn = document.querySelector("#exe-login-btn");
//catch null event
if (runLoginBtn) {
  runLoginBtn.addEventListener("click", () => {
    const userEmail = document.querySelector("#user-email").value;
    const userPassword = document.querySelector("#user-password").value;

    loginEmailValidation(userEmail, userPassword);
  });
}
//end of null check

//end of login validation

//start of signup validation script

const runSignupBtn = document.querySelector("#exe-signup-btn");
if (runSignupBtn) {
  runSignupBtn.addEventListener("click", () => {
    const name = document.querySelector("#new-user-name").value;
    const email = document.querySelector("#new-user-email").value;
    const password = document.querySelector("#new-user-password").value;
    signupEmailValidation(name, email, password);
  });
}
//end of null check

function signupEmailValidation(name, email, password) {
  for (user of users) {
    //if the entered email already exists in the users array, alert the user and end the function
    if (user.email == email) {
      alert(`${email}  is already registered`);
      return;
    }
  }
  addNewUser(name, email, password);
}

/*create a new object for the user, add the object to the users array, alert the user and change 
  the href to change load a new page*/

function addNewUser(name, email, password) {
  users.push(new User(name, email, password));
  alert(`Welcome to The Drop Off, ${name}`);
  runSignupBtn.href = "lobby.html";
}
//end of signup validation

//vars for login btn
const showLoginBtn = document.querySelector("#login-btn");

//start of err check
if (showLoginBtn) {
  showLoginBtn.addEventListener("click", showLoginPopup);
}
//end of err check

// showLoginBtn.addEventListener("click", showLoginPopup);
const closeLoginPopupBtn = document.querySelector("#login-container-close-btn");

//start of err check
if (closeLoginPopupBtn) {
  closeLoginPopupBtn.addEventListener("click", hideLoginPopup);
}
//end of err check

// closeLoginPopupBtn.addEventListener("click", hideLoginPopup);
const loginPopup = document.querySelector("#login-popup");

//show the login popup
function showLoginPopup() {
  //if the signup is showing then close the sign up
  hideSignupPopup();

  loginPopup.style.display = "block";
  loginPopup.style.zIndex = "1";
  showDimmer();
}

//hide the login popup
function hideLoginPopup() {
  loginPopup.style.display = "none";
  loginPopup.style.zIndex = "-1";
  hideDimmer();
}

//vars for signup btn
const showSignupBtn = document.querySelector("#signup-btn");
//start of err check
if (showSignupBtn) {
  showSignupBtn.addEventListener("click", showSignupPopup);
}
//end of err check

// showSignupBtn.addEventListener("click", showSignupPopup);
const closeSignupPopupBtn = document.querySelector(
  "#signup-container-close-btn"
);

// start of err check
if (closeSignupPopupBtn) {
  closeSignupPopupBtn.addEventListener("click", hideSignupPopup);
}
// end of err check

// closeSignupPopupBtn.addEventListener("click", hideSignupPopup);
const signupPopup = document.querySelector("#signup-popup");

//show the signup popup
function showSignupPopup() {
  //if the signup is showing then close the sign up
  hideLoginPopup();

  signupPopup.style.display = "block";
  signupPopup.style.zIndex = "1";
  showDimmer();
}

//hide the signup popup
function hideSignupPopup() {
  signupPopup.style.display = "none";
  signupPopup.style.zIndex = "-1";
  hideDimmer();
}

//vars for logout button
const logoutBtn = document.querySelector("#log-out-btn");
//start of err check
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    const logoutPopup = document.querySelector("#logout-popup");
    logoutPopup.style.display = "flex";
    logoutPopup.style.zIndex = "100";
    showDimmer();

    const yesBtn = document.querySelector("#yes-btn");
    const noBtn = document.querySelector("#no-btn");

    yesBtn.addEventListener("click", goToHomePage);
    noBtn.addEventListener("click", stayOnCurrentPage);

    function goToHomePage() {
      logoutPopup.style.display = "none";
      logoutPopup.style.zIndex = "-1";
      hideDimmer();
      yesBtn.href = "index.html";
    }

    function stayOnCurrentPage() {
      logoutPopup.style.display = "none";
      logoutPopup.style.zIndex = "-1";
      hideDimmer();
    }
  });
}
//end of err check

//vars for the add to cart buttons on the products page
const addToCartBtns = document.querySelectorAll(
  ".product-card .add-to-cart-btn"
);
//the button will run two functions.
//it listens to call the function to add items then it call the popup function
addToCartBtns.forEach((addToCartBtn) =>
  addToCartBtn.addEventListener("click", addItemToCart)
);

//vars for the cart button in the nav
const cartBtn = document.querySelector("#cart-button");

// start of err check
if (cartBtn) {
  cartBtn.addEventListener("click", showShoppingCart);
}
//end of err check

// cartBtn.addEventListener("click", showShoppingCart);

//function to show the "item added popup" on the products page
function showItemAddedPopUp(e) {
  const addedPopUp = document.querySelector("#added-to-cart-pop-up");
  const addedProductNameText = document.querySelector("#added-product");
  const addedproductImg = document.querySelector("#added-img");

  const productImg = e.target.parentElement.querySelector(".prod-img");
  const productName = e.target.parentElement.querySelector(".prod-name");

  addedProductNameText.innerHTML = productName.innerHTML;
  addedproductImg.src = productImg.src;

  //show the added to cart popup
  addedPopUp.style.display = "flex";
  addedPopUp.style.zIndex = "1";
  showDimmer();

  //remove the popup
  const continueShopping = document.querySelector("#continue-shopping-btn");
  continueShopping.addEventListener("click", removeItemAddedPopUp);

  function removeItemAddedPopUp() {
    addedPopUp.style.display = "none";
    addedPopUp.style.zIndex = "-1";
    hideDimmer();
  }
  //end of showItemAddedPopUp() below
}

//an array of the products in the cart
//only used to check for duplicate items
let cartItemNames = [];

function showDuplicateItemPopup(popup) {
  popup.style.display = "block";
  popup.style.zIndex = "1";
  showDimmer();
}

//function that adds items to the shopping cart
function addItemToCart(e) {
  const itemList = document.querySelector("#cart-items-area");
  //grab all the info in the div that the clicked button is in.
  let clickedItemImg = e.target.parentElement.querySelector(".prod-img");
  let clickedItemName = e.target.parentElement.querySelector(".prod-name");
  let clickedItemPrice = e.target.parentElement.querySelector(".prod-price");

  //vars for the duplicate item popup
  const popup = document.querySelector("#item-already-added-pop-up");
  const continueShoppingBtn = document.querySelector(
    "#duplicate-continue-shopping"
  );
  continueShoppingBtn.addEventListener("click", removeDuplicatePopup);

  //remove the duplicate item popup
  function removeDuplicatePopup() {
    popup.style.display = "none";
    popup.style.zIndex = "-1";
    hideDimmer();
  }

  //if the clicked item is not in the cartItemNames array
  if (cartItemNames.indexOf(clickedItemName.innerHTML) === -1) {
    cartItemNames.push(clickedItemName.innerHTML);

    //create new elements for the cart
    const newCartItem = document.createElement("div");
    const newCartItemImg = document.createElement("img");
    const newItemInfoArea = document.createElement("div");
    const newItemDescription = document.createElement("h3");
    const newItemPriceQtyArea = document.createElement("div");
    const newItemPriceText = document.createElement("h2");
    const newCartForm = document.createElement("form");
    const newFormLabel = document.createElement("label");
    const newFormInput = document.createElement("input");
    const newRemoveItemBtn = document.createElement("button");
    const newSpaceDiv = document.createElement("div");

    //give the new elements their appropriate attibutes
    newCartItem.setAttribute("class", "cart-item");
    newCartItemImg.setAttribute("class", "cart-item-img");
    newItemInfoArea.setAttribute("class", "item-info-area");
    newItemDescription.setAttribute("class", "cart-item-description");
    newItemPriceQtyArea.setAttribute("class", "item-price-qty-area");
    newItemPriceText.setAttribute("class", "cart-item-price");
    //the data-attribute is needed to calculate the total price * qty
    //the original price is needed to calculate the cumulative price
    newItemPriceText.setAttribute(
      "data-price",
      `${clickedItemPrice.innerHTML}`
    );
    newSpaceDiv.setAttribute("class", "space-div");
    newCartForm.setAttribute("class", "form-item");
    newFormInput.setAttribute("class", "cart-item-qty-input");
    newFormInput.setAttribute("type", "number");
    newFormInput.setAttribute("min", "1");
    newFormInput.setAttribute("value", "1");
    newRemoveItemBtn.setAttribute("class", "remove-item-button");

    //add the img and text to the new items
    newCartItemImg.src = clickedItemImg.src;
    newItemDescription.innerHTML = clickedItemName.innerHTML;
    newItemPriceText.innerHTML = clickedItemPrice.innerHTML;
    newFormLabel.innerHTML = "Qty:";
    newRemoveItemBtn.innerHTML = "Remove";

    newSpaceDiv.appendChild(newFormLabel);
    newSpaceDiv.appendChild(newFormInput);

    newItemPriceQtyArea.appendChild(newItemPriceText);
    newItemPriceQtyArea.appendChild(newSpaceDiv);

    newItemPriceQtyArea.appendChild(newCartForm);
    newSpaceDiv.appendChild(newRemoveItemBtn);

    newItemInfoArea.appendChild(newItemDescription);
    newItemInfoArea.appendChild(newItemPriceQtyArea);
    newCartItem.appendChild(newCartItemImg);
    newCartItem.appendChild(newItemInfoArea);
    itemList.appendChild(newCartItem);

    showItemAddedPopUp(e);
  } else {
    //if the clicked item is already in the cartItemNames array
    //display the already added popup
    showDuplicateItemPopup(popup);
  }

  //end of addItemToCart(e)
}

//remove the item
function removeCartItem(e) {
  //get the index of the removed item
  const delThisIndex = cartItemNames.indexOf(
    e.target.parentElement.parentElement.parentElement.children[0].innerHTML
  );
  //remove the item from the cartItemNames array so that it can be added again if needed
  cartItemNames.splice(delThisIndex, 1);

  //remove the item by removing all its parents
  e.target.parentElement.parentElement.parentElement.parentElement.remove();

  //update the cart total
  totalCartPrice();
}

//calculte the total price of all the items in the cart
function totalCartPrice() {
  const itemPrices = document.querySelectorAll(".cart-item-price");
  const itemCount = document.querySelector("#item-count");
  const subTotalPriceText = document.querySelector("#sub-total-price");
  const cartTotalText = document.querySelector("#total-price");
  let subCartPrice = 0;

  itemPrices.forEach((itemPrice) => {
    subCartPrice += parseFloat(itemPrice.innerHTML);
  });

  itemCount.innerHTML = `(${itemPrices.length} items)`;
  subTotalPriceText.innerHTML = `R${subCartPrice.toFixed(2)}`;
  cartTotalText.innerHTML = `R${(subCartPrice + 60).toFixed(2)}`;

  //if there are items in the cart
  if (itemPrices.length > 0) {
    //update the carts totol price
    cartTotalText.innerHTML = `R${(subCartPrice + 60).toFixed(2)}`;
  } else {
    //if there are no items in the cart
    cartTotalText.innerHTML = "R0.00";
  }
}

function calcEachCartItemPrice() {
  const items = document.querySelectorAll(".cart-item");
  items.forEach((item) => {
    //grab the price that is store as a data-attribute
    let thePrice = item.children[1].children[1].children[0].dataset.price;
    let theQty = item.children[1].children[1].children[1].children[1].value;

    //mutiply the price and qty
    //parseFloat returns NaN if the str includes letters
    const itemTotalPrice =
      parseFloat(thePrice.replace("R", " ")) * parseInt(theQty);

    //change the displayed price to the calculated price
    item.children[1].children[1].children[0].innerHTML = itemTotalPrice;

    //calculate the total of the cart
    totalCartPrice();
  });
  // END of calcEachCartItemPrice()
}

//vars for the shopping carts close button
const closeCartBtn = document.querySelector("#close-cart-btn");
// start of err check
if (closeCartBtn) {
  closeCartBtn.addEventListener("click", closeShoppingCart);
}
// end of err check

//function that closes the shopping cart; works on all pages after login
function closeShoppingCart() {
  const shoppingCart = document.querySelector("#shopping-cart-pop-up");
  shoppingCart.classList.add("hide");
  hideDimmer();
}

//function to show the shopping cart when the cart button in the nav is clicked
//works on all pages after login
function showShoppingCart() {
  const shoppingCart = document.querySelector("#shopping-cart-pop-up");

  shoppingCart.classList.remove("hide");
  showDimmer();

  //vars for the input on each cart item
  const inputs = document.querySelectorAll(".cart-item-qty-input");
  //listen for everytime the inputs value changes the calculate the price of each cart item
  inputs.forEach((input) => {
    input.addEventListener("change", calcEachCartItemPrice);
  });

  //remove a cart item
  //vars for the remove buttons
  const removeItemBtns = document.querySelectorAll(".remove-item-button");
  //listen for a click on the remove button then execute  removeCartItem()
  removeItemBtns.forEach((btn) => {
    btn.addEventListener("click", removeCartItem);
  });

  //caluculate each items price
  calcEachCartItemPrice();

  //end of showShoppingCart()
}

//vars for the purchase button
const purchaseBtn = document.querySelector("#purchase-items-btn");

// start of err check
if (purchaseBtn) {
  purchaseBtn.addEventListener("click", purchaseItems);
}
// end of err check

function purchaseItems() {
  const totalPrice = document.querySelector("#total-price").innerHTML;
  const paymentMethodPopup = document.querySelector("#payment-method-popup");

  //if there are no items in the cart dont allow a purchase
  if (parseFloat(totalPrice.replace("R", " ")) < 1) {
    alert("You have no items in your cart");
  } else {
    paymentMethodPopup.style.display = "flex";
    paymentMethodPopup.style.zIndex = "100";
  }
}

const finalisePaymentBtn = document.querySelector("#finalise-payment-btn");
if (finalisePaymentBtn) {
  finalisePaymentBtn.addEventListener("click", finalisePayment);
}

function finalisePayment() {
  const successfulPurchasePopup = document.querySelector(
    "#successful-purchase-pop-up"
  );
  const paymentMethods = document.querySelectorAll(".payment-method input");
  paymentMethods.forEach((method) => {
    if (method.checked == true) {
      //  show the successful popup
      successfulPurchasePopup.style.display = "flex";
      successfulPurchasePopup.style.zIndex = "100";
    }
  });
}

//vars to go back to the lobby
const endPurchaseBtn = document.querySelector("#end-purchase-btn");

//start of err check
if (endPurchaseBtn) {
  endPurchaseBtn.addEventListener("click", goBackToLobby);
}
//end of err check

function goBackToLobby() {
  const successfulPurchasePopup = document.querySelector(
    "#successful-purchase-pop-up"
  );

  endPurchaseBtn.href = "lobby.html";
}
