import React, { Component } from "react";
import axios from "axios";

class Checkout extends Component {
  /*
  constructor(props) {
    super(props);
    this.addFormData = this.addFormData.bind(this);
  }
  addFormData(evt) {
    evt.preventDefault();
    const fd = new FormData();
    fd.append("fname", this.refs.fname.value);
    fd.append("email", this.refs.email.value);

    var headers = {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "http://localhost:8080/index.php",
    };
    axios.post("http://localhost:8080/index.php", fd, headers).then((res) => {
      alert(res.data.data);
    });
  }
*/
  documentData;
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addCartdata = this.addCartdata.bind(this);
    this.state = {
      fname: "",
      lname: "",
      phone: " ",
      city: "",
      street: "",
      SpecialReq: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // on form submit...
  handleFormSubmit(e) {
    e.preventDefault();
    localStorage.setItem("document", JSON.stringify(this.state));
  }
  addCartdata = () => {
    const cartData = JSON.parse(localStorage.getItem("myCart"));
    const price = cartData.map((data) => data.total);
    const title = cartData.map((data) => data.title);
    const amount = cartData.map((data) => data.count);

    const fd = new FormData();

    fd.append("title", title);
    fd.append("price", price);
    fd.append("amount", amount);

    var headers = {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "http://localhost:8080/index.php",
    };
    axios.post("http://localhost:8080/index.php", fd, headers).then((res) => {
      alert(res.data.data);
    });
  };

  // React Life Cycle
  componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem("document"));

    if (localStorage.getItem("document")) {
      this.setState({
        fname: this.documentData.fname,
        lname: this.documentData.lname,
        phone: this.documentData.phone,
        city: this.documentData.city,
        street: this.documentData.street,
        SpecialReq: this.documentData.SpecialReq,
      });
    } else {
      this.setState({
        fname: "",
        lname: "",
        phone: "",
        city: "",
        street: "",
        SpecialReq: "",
      });
    }
  }

  render() {
    return (
      <div className="CheckoutBackground">
        <form className="form-style-9" onSubmit={this.handleFormSubmit}>
          <ul>
            <li>
              <input
                name="fname"
                type="text"
                className="field-style field-split align-left"
                placeholder="first name"
                value={this.state.fname}
                onChange={this.handleChange}
              />
              <input
                name="lname"
                type="text"
                className="field-style field-split align-right"
                placeholder="last Name"
                value={this.state.lname}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <input
                name="phone"
                type="text"
                className="field-style field-split align-left"
                placeholder="Phone"
                value={this.state.phone}
                onChange={this.handleChange}
              />
              <input
                name="city"
                type="text"
                className="field-style field-split align-right"
                placeholder="city"
                value={this.state.city}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <input
                name="street"
                type="text"
                className="field-style field-full align-none"
                placeholder="street"
                value={this.state.street}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <textarea
                name="SpecialReq"
                className="field-style"
                placeholder="Message"
                value={this.state.SpecialReq}
                onChange={this.handleChange}
              ></textarea>
            </li>

            <li>
              <input type="submit" onClick={this.addCartdata} />
            </li>
          </ul>
        </form>
        ;
      </div>
    );
  }
}

export default Checkout;
