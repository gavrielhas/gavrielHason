import React from "react";

function Footer() {
  return (
    <footer className="py-3">
      <div>
        <h3 className="pl-5 pr-5">Contact us</h3>
        <p className="pl-5 pr-5">
          you can always contact us through this number for any concern:&nbsp;
          <strong>
            <a href="tel:052-841-0155">052-841-0155</a>
          </strong>
          <br />
          We are located at hartzion street 110, You can order securly online or
          visit our store at the operating hours . <br />
          Operating Hours:
          <br />
          <strong>
            Sunday - thursday : 8AM - 8PM <br />
            Friday: 8AM- 5PM
          </strong>
        </p>
        <br />
        <p className="text-center">
          <strong> Copyright &copy; 2020</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
