import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import "./dist/css/style.css";
import Header from "./components/headerComponents/header";
import Footer from "./components/footerComponents/footer";
import Homepage from "./components/pages/Homepage";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import ProductList from "./components/ProductList";
import Modal from "./components/Modal";
import Default from "./components/Default";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/ProductList" component={ProductList} />
        <Route path="/Details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
      <Footer />
    </React.Fragment>
  );
}

export default App;
