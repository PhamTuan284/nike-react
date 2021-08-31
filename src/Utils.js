export function checkItemsInCart() {
  let itemCard = localStorage.getItem("cartItem");
  //eslint-disable-next-line
  if (itemCard == null || itemCard == "") {
    localStorage.setItem("cartItem", "[]");
    itemCard = "[]";
  }
  return JSON.parse(itemCard);
}

export function addItemToCart(addedItem) {
  const itemsInCart = JSON.parse(localStorage.getItem("cartItem"));
  itemsInCart.push(addedItem);
  localStorage.setItem("cartItem", JSON.stringify(itemsInCart));
  return itemsInCart;
}
