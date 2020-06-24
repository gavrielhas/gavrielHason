import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import "./dist/css/style.css";
import Header from "./components/headerComponents/header";
import Footer from "./components/footerComponents/footer";
import Homepage from "./components/pages/Home/Homepage";
import Details from "./components/pages/Details/Details";
import Cart from "./components/pages/Cart/Cart";
import ProductList from "./components/pages/FirstProducts/ProductList";
import Modal1 from "./components/pages/Modal/Modal1";
import Modal2 from "./components/pages/Modal/Modal2";
import Default from "./components/pages/Default/Default";
import DryProductList from "./components/pages/SecondProduct/DryProductList";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/ProductList" component={ProductList} />
        <Route path="/DryProductList" component={DryProductList} />
        <Route path="/Details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal1 />
      <Modal2 />
      <Footer />
    </React.Fragment>
  );
}

export default App;
