import React, { Component } from "react";
import axios from "axios";

const url = "http://localhost:3000/api/contact/add.php";

export default class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      email: "",
      message: "",
      formError: false,
      error: null,
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.SpecialReq === ""
    ) {
      this.setState({
        formError: true,
      });
      return false;
    } else {
      this.setState({
        formError: false,
      });
      const obj = {
        fname: this.state.fname,
        email: this.state.email,
        SpecialReq: this.state.SpecialReq,
      };
      console.log(obj);
      axios
        .post(url, obj)
        .then((res) => console.log(res.data))
        .catch((error) => this.setState({ error: error.SpecialReq }));

      this.setState({
        fname: "",
        email: "",
        SpecialReq: "",
      });
    }
  };

  // Functions to  get the input values
  getName = (e) => {
    let fname = e.target.value;
    this.setState({
      fname: fname,
    });
    console.log(this.state.fname);
  };

  getEmail = (e) => {
    let email = e.target.value;
    // eslint-disable-next-line no-useless-escape
    if (
      email.match(
        /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
      )
    ) {
      this.setState({
        email: email,
      });
    } else {
      this.setState({
        email: "",
      });
      console.log("Incorrect e-mail, must match expression");
    }

    console.log(this.state.email);
  };

  getMessage = (e) => {
    let SpecialReq = e.target.value;
    this.setState({
      SpecialReq: SpecialReq,
    });
    console.log(this.state.SpecialReq);
  };

  render() {
    return (
      <form id="contact">
        {/* I am just sending a basic error message */}
        {this.state.formError && (
          <p className="error">Fill all the input fields please.</p>
        )}
        {/* <p>Fill in the next form to send us a message</p> */}
        <div>
          <label htmlFor="name">fName</label>
          <input
            type="text"
            name="name"
            placeholder=""
            onChange={this.getName}
            value={this.state.fname}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder=""
            onChange={this.getEmail}
            value={this.state.email}
          />
        </div>
        <div>
          <label htmlFor="name">SpecialReq</label>
          <textarea
            onChange={this.getMessage}
            maxLength="450"
            value={this.state.SpecialReq}
          ></textarea>
        </div>
        <div>
          <p>We will answer as soon as possible</p>
          <input
            type="submit"
            name="submit"
            value="Send"
            onClick={this.handleFormSubmit}
          />
        </div>
      </form>
    );
  }
}
