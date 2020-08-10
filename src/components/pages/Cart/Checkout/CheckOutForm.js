import React from "react";
import PayPalButton from "../PayPalButton";

export default function CheckOutForm({ value, history }) {
  const { cartTotal, clearCart, addCartdata } = value;

  return (
    <div className="container-fluid">
      <form className="form-style-9">
        <ul>
          <li>
            <input
              dir="rtl"
              type="text"
              name="field1"
              className="field-style field-split align-left"
              placeholder="שם משפחה"
              ref={lname}
            />
            <input
              dir="rtl"
              type="text"
              name="field2"
              className="field-style field-split align-right"
              placeholder="שם פרטי"
              ref={fname}
            />
          </li>
          <li>
            <input
              dir="rtl"
              type="text"
              name="field3"
              className="field-style field-split align-left"
              placeholder="עיר"
              ref={city}
            />
            <input
              dir="rtl"
              type="text"
              name="field4"
              className="field-style field-split align-right"
              placeholder="פלאפון"
              ref={phone}
            />
          </li>
          <li>
            <input
              dir="rtl"
              type="text"
              name="field3"
              className="field-style field-full align-none"
              placeholder="רחוב ומספר דירה"
              ref={street}
            />
          </li>
          <li>
            <textarea
              dir="rtl"
              name="field5"
              className="field-style"
              placeholder="בקשה מיוחדת"
              ref={SpecialReq}
            ></textarea>
          </li>
          <li>
            <button onClick={addCartdata}>Checkk</button>
            <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              addCartdata={addCartdata}
              history={history}
            />
          </li>
        </ul>
      </form>
    </div>
  );
}
