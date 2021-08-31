import { memo } from "react";
import { Link } from "react-router-dom";

function AddCartMessage({ addItemToCartMessage, setAddItemToCartMessage }) {
  return (
    <div
      className={
        addItemToCartMessage === false
          ? "add-cart-messeage text-center"
          : "add-cart-messeage text-center active"
      }
    >
      <div className="add-cart-message-overlay"></div>
      <div className="add-cart-message-pop-up">
        <h4 className="mb-3">Add item to cart successfully!</h4>
        <div className="d-flex justify-content-center">
          <Link to="/cart">
            <button
              type="button"
              className="btn btn-dark me-5"
              onClick={() => {
                document.body.classList.toggle("stopScrolling");
                setAddItemToCartMessage(false);
              }}
            >
              View Cart
            </button>
          </Link>

          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={() => {
              document.body.classList.toggle("stopScrolling");
              setAddItemToCartMessage(false);
            }}
          >
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
}
export default memo(AddCartMessage);
