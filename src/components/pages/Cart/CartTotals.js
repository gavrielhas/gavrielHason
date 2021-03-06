import React from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";

export default function CartTotals({ value, history }) {
  const { cartTotal, clearCart, addCartdata, clearAndAdd } = value;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right py-3">
            <Link to="/ProductList">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => {
                  clearCart();
                }}
              >
                clear cart
              </button>
            </Link>
            {/*

            <h5>
              <span className="text-title">subtotal:</span>
              <strong>${cartSubTotal}</strong>
            </h5>
            */}
            {/*
            <h5>
              <span className="text-title">tax:</span>
              <strong>₪{cartTax}</strong>
            </h5>
            */}
            <h5>
              <span className="text-title">מחיר כולל:</span>
              <strong>₪{cartTotal}</strong>
            </h5>
            <PayPalButton
              total={cartTotal}
              clearAndAdd={clearAndAdd}
              history={history}
            />
            <Link to="/Checkout">
              <button addCartdata={addCartdata}>Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
