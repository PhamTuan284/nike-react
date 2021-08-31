import { memo } from "react";

let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
function Summary({ subTotal, shipping, total }) {
  return (
    <>
      <h2 className="mb-3">Summary</h2>
      <div className="subtotal d-flex justify-content-between">
        <p>Subtotal</p>
        <p>{formatter.format(subTotal)}</p>
      </div>
      <div className="shipping d-flex justify-content-between">
        <p>Shipping</p>
        <p>{formatter.format(shipping)}</p>
      </div>
      <hr />
      <div className="total d-flex justify-content-between">
        <p>Total</p>
        <p>{formatter.format(total)}</p>
      </div>
      <button type="button" className="btn btn-dark checkout-btn">
        Checkout
      </button>
    </>
  );
}
export default memo(Summary);