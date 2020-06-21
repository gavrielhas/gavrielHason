import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <React.Fragment>
      <h1>Home Page Content</h1>
      <section>
        <div className="BorderImg">
          <div className=" img-fluid">
            <h1 className="img-text">
              <Link to="/ProductList">
                <button className="ButtonImg">To our nuts</button>
              </Link>
            </h1>
          </div>
        </div>

        <h1 className="">Try our nuts</h1>
        <p>
          Our nuts is well selected, descripiton about the products Lorem Ipsum
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
      </section>
      <section>
        <div></div>
      </section>
    </React.Fragment>
  );
}

export default Homepage;
