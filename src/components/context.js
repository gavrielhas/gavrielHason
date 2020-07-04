import React, { Component } from "react";
import { dryFruitProducts, nutsProducts, detailProduct } from "../data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    Dryproducts: [],
    detailProduct: detailProduct,
    cart: [],
    DrymodalOpen: false,
    DrymodalProduct: detailProduct,
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };
  componentDidMount() {
    this.setProducts();
    this.setDryProducts();

    const cart = localStorage.getItem("myCart");

    this.setState(
      { cart: JSON.parse(cart) ? JSON.parse(cart) : [] },

      this.addTotals
    );
  }
  setProducts = () => {
    let tempProducts = [];
    nutsProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };
  /* Try begin*/
  setDryProducts = () => {
    let DrytempProducts = [];
    dryFruitProducts.forEach((item) => {
      const singleItem = { ...item };
      DrytempProducts = [...DrytempProducts, singleItem];
    });
    this.setState(() => {
      return { Dryproducts: DrytempProducts };
    });
  };
  getDryItem = (id) => {
    const Dryproduct = this.state.Dryproducts.find((item) => item.id === id);
    return Dryproduct;
  };
  DryhandleDetail = (id) => {
    const Dryproduct = this.getDryItem(id);
    this.setState(() => {
      return { detailProduct: Dryproduct };
    });
  };
  DryaddToCart = (id) => {
    let DrytempProducts = [...this.state.Dryproducts];
    const index = DrytempProducts.indexOf(this.getDryItem(id));
    const Dryproduct = DrytempProducts[index];
    Dryproduct.inCart = true;
    Dryproduct.count = 1;
    const price = Dryproduct.price;
    Dryproduct.total = price;
    this.setState(
      () => {
        return {
          Dryproducts: DrytempProducts,
          cart: [...this.state.cart, Dryproduct],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => this.setDryProducts(),
      this.addTotals
    );
  };
  /* 
  productID = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    const specificProduct = product.id;
    if(specificProduct)
  };
  */

  removeDryItem = (id) => {
    let DrytempProducts = [...this.state.Dryproducts];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);
    const index = DrytempProducts.indexOf(this.getDryItem(id));
    let removedDryProduct = DrytempProducts[index];
    removedDryProduct.inCart = false;
    removedDryProduct.count = 0;
    removedDryProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          Dryproducts: [...DrytempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  openDryModal = (id) => {
    const product = this.getDryItem(id);
    this.setState(() => {
      return { DrymodalProduct: product, DrymodalOpen: true };
    });
  };
  closeDryModal = () => {
    this.setState(() => {
      return { DrymodalOpen: false };
    });
  };
  /* Try ends*/

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);

    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;

    if (product.count === 0) {
      if (product.id < 25) {
        this.removeItem(id);
      }
      if (product.id > 24) {
        this.removeDryItem(id);
      }
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => this.setProducts(),
      this.addTotals
    );
  };
  addTotals = () => {
    let subTotal = 0;

    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0;
    const tax = parseFloat(tempTax.toFixed(2));
    const tempTotal = subTotal + tax;
    const total = parseFloat(tempTotal.toFixed(2));
    this.setState(() => {
      localStorage.setItem("myCart", JSON.stringify(this.state.cart));

      return { cartSubTotal: subTotal, cartTax: tax, cartTotal: total };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          DryhandleDetail: this.DryhandleDetail,
          DryaddToCart: this.DryaddToCart,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openDryModal: this.openDryModal,
          closeDryModal: this.closeDryModal,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          removeDryItem: this.removeDryItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
