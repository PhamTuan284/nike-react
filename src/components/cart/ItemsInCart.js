import { memo } from "react";

let formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
function ItemInCart({ itemsInCart, handleDeleteBtn, handleEditBtn }) {
  return itemsInCart.map((item, index) => (
    <div className="bag-item mb-4 mt-4" key={item.name}>
      <div className="row">
        <div className="col-4 col-md-3 bag-item-img">
          <img src={item.color} alt="" />
        </div>
        <div className="col-8 col-md-5 d-flex flex-column justify-content-between">
          <div className="bag-item-info">
            <strong>{item.name}</strong>
            <p>Size: {item.size}</p>
          </div>

          <div className="bag-item-btn d-flex">
            {/* <p className="me-2" onClick={() => handleEditBtn(index)}>
              {edit === false ? "Edit" : "Save"}
            </p> */}
            <p onClick={() => handleDeleteBtn(index)}>Remove</p>
          </div>
        </div>
        <div className="col-1 col-md-1"></div>
        <div className="col-12 col-md-3 bag-item-price">
          <p>{formatter.format(item.price)}</p>
        </div>

        {/* <div
          className={
            edit === false
              ? "edit-pop-up col-12 row"
              : "edit-pop-up active col-12"
          }
        >
          <div className="edit-pop-up-color col-4">
 
          </div>
          <div className="edit-pop-up-size col-8"></div>
        </div> */}
      </div>
      <hr />
    </div>
  ));
}
export default memo(ItemInCart);
