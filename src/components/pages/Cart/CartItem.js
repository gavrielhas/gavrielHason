import React from "react";
import trash from "./icons8-trash-24.png";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem, removeDryItem } = value;

  return (
    <div className="row my-2 text-capitalize text-center pl-5">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">מוצר:</span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">מחיר :</span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div
          className="cart-icon"
          onClick={() => {
            if (id < 25) {
              removeItem(id);
            }
            if (id > 24) {
              removeDryItem(id);
            }
          }}
        >
          <img src={trash} alt="trash" className="trash" />
          {/* <i className="fas fa-trash" />*/}
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong> ₪ {total}</strong>
      </div>
    </div>
  );
}
