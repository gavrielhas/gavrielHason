import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block pr-5">
      <div className="row">
        <div className="col-10 mx-0-auto col-lg-2">
          <p className="text-uppercase">מוצרים</p>
        </div>
        <div className="col-10 mx-0-auto col-lg-2">
          <p className="text-uppercase">שם המוצר</p>
        </div>
        <div className="col-10 mx-0-auto col-lg-2">
          <p className="text-uppercase">מחיר</p>
        </div>
        <div className="col-10 mx-0-auto col-lg-2">
          <p className="text-uppercase">כמות</p>
        </div>
        <div className="col-10 mx-0-auto col-lg-2">
          <p className="text-uppercase">מחק מוצר</p>
        </div>
        <div className="col-10 mx-0-auto col-lg-2">
          <p className="text-uppercase">מוצרים</p>
        </div>
      </div>
    </div>
  );
}
