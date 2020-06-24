import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <React.Fragment>
      <h1 className="text-center header py-3">Pai-delivery</h1>
      <section className="py-3">
        <div className="BorderImg">
          <div className=" img-fluid2">
            <h1 className="img-text">
              <Link to="/ProductList">
                <button className="ButtonImg">To our nuts</button>
              </Link>
            </h1>
          </div>
        </div>

        <h1 className="pl-5 pr-5 py-3">Try our nuts</h1>
        <p className="pl-5 pr-5">
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
        <div>
          <div className="BorderImg">
            <div className=" img-fluid3">
              <h1 className="img-text">
                <Link to="/DryProductList">
                  <button className="ButtonImg">To our dry fruits</button>
                </Link>
              </h1>
            </div>
          </div>

          <h1 className="pl-5 pr-5 py-3">Try our Dry fruits</h1>
          <p className="pl-5 pr-5">
            Our nuts is well selected, descripiton about the products Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Homepage;
