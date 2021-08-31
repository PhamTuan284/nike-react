import React, { memo } from "react";
import { Link } from "react-router-dom";

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function Table({ products }) {
  return products.map((product) => (
    <div className="col-6 col-md-4 mt-3" key={product.id}>
      <Link to={"/products/" + product.id}>
        <div className="card product">
          <img
            src={product.thumbnail}
            className="card-img-top"
            alt="thumbnail"
          />

          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.color} Colour</p>
            <b className="card-text">{formatter.format(product.price)}</b>
          </div>
        </div>
      </Link>
    </div>
  ));
}
export default memo(Table);
