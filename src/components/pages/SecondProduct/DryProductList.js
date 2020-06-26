import React, { Component } from "react";

import DryProduct from "./DryProduct";
import { ProductConsumer } from "../../context";

export default class DryProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <h1 className="header text-capitalize text-center "> פאי-משלוחים</h1>
          <div className="container">
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.Dryproducts.map((Dryproduct) => {
                    return (
                      <DryProduct key={Dryproduct.id} Dryproduct={Dryproduct} />
                    );
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
