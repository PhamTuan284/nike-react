import { Link } from "react-router-dom";
import { memo, useContext, useState } from "react";
import { ContextElement } from "../App";
import Summary from "../components/cart/Summary";
import ItemsInCart from "../components/cart/ItemsInCart";

function Cart() {
  let { itemsInCart, setItemsInCart } = useContext(ContextElement);

  let shipping = 20;
  let getSubTotal = (itemsInCart) => {
    let price = itemsInCart.map((item) => item.price);
    if (price.length > 0) {
      return price.reduce((a, b) => a + b);
    }
  };

  const [subTotal, setSubTotal] = useState(getSubTotal(itemsInCart));
  const [edit, setEdit] = useState(false);

  function subTotalCal(items) {
    let newSubTotal = getSubTotal(items);
    setSubTotal(newSubTotal);
  }

  function handleDeleteBtn(index) {
    let newItemsList = [...itemsInCart];
    newItemsList.splice(index, 1);
    setItemsInCart(newItemsList);
    subTotalCal(newItemsList);
    localStorage.setItem("cartItem", JSON.stringify(newItemsList));
  }

  function handleEditBtn(index) {
    setEdit(true);
  }

  let total = subTotal + shipping;

  if (itemsInCart.length > 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <h2 className="mb-3">Bag</h2>
            <div className="bag-items">
              <ItemsInCart
                itemsInCart={itemsInCart}
                handleDeleteBtn={handleDeleteBtn}
                handleEditBtn={handleEditBtn}
                edit={edit}
                setEdit={setEdit}
              />
            </div>
          </div>

          <div className="col-12 col-md-4">
            <Summary subTotal={subTotal} shipping={shipping} total={total} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <h2 className="mb-3">Bag</h2>
            <div className="bag-items">
              <h2>Your bag is empty</h2>
              <Link to="/products">
                <button type="button" className="btn btn-dark">
                  Back to shop
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default memo(Cart);
