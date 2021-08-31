import { memo } from "react";

function ProductInfo({
  currentProduct,
  colorValue,
  handleChooseColor,
  sizeValue,
  handleChooseSize,
  handleAddCart,
}) {
  return (
    <>
      <h1>{currentProduct.name}</h1>
      <h4 className="mt-5 b-3">Select color</h4>
      <div className="d-flex">
        {currentProduct.colorimg.map((imgUrl) => {
          return (
            <div className="color-img-wrapper mb-3 me-3 mt-3" key={imgUrl}>
              <img
                src={imgUrl}
                alt="img"
                className={
                  currentProduct.colorimg[colorValue] === imgUrl
                    ? "color-img active"
                    : "color-img"
                }
                onClick={() => handleChooseColor(imgUrl)}
              ></img>
            </div>
          );
        })}
      </div>
      <h4 className="mt-5 mb-3">Select Size</h4>
      <div className="row">
        {currentProduct.size.map((size) => {
          return (
            <div className="col-4" key={size}>
              <button
                type="button"
                className={
                  sizeValue === size
                    ? "btn mb-2 size btn-dark"
                    : "btn mb-2 size btn-outline-dark"
                }
                onClick={() => handleChooseSize(size)}
              >
                {size}
              </button>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className="btn btn-dark mt-5 addcart"
        onClick={handleAddCart}
      >
        Add to cart
      </button>
    </>
  );
}
export default memo(ProductInfo);
