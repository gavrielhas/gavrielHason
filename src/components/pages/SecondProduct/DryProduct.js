import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
import PropTypes from "prop-types";

export default class DryProduct extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.Dryproduct;

    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container p-5"
                onClick={() => value.DryhandleDetail(id)}
              >
                <Link to="/details2">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.DryaddToCart(id);
                    value.openDryModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="inCartproduct text-capitalize mb-0" disabled>
                      בעגלה
                    </p>
                  ) : (
                    <p className="inCartproduct text-capitalize mb-0">
                      הוסף לעגלה
                    </p>
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          {/* card footer*/}
          <div className="card-footer d-flex justify-content-between">
            <h5 className="font-italic mb-0">
              <span className="ml-1">₪ {price}</span>
            </h5>
            <p className="align-self-center mb-0">{title}</p>
          </div>
        </div>
      </div>
    );
  }
}

DryProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
