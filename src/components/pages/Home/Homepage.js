import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <React.Fragment>
      <h1 className="text-center header py-3">
        <span dir="rtl">פאי משלוחים</span>
      </h1>
      <section className="py-3">
        <div className="BorderImg">
          <div className=" img-fluid2">
            <h1 className="img-text">
              <Link to="/ProductList">
                <button className="ButtonImg">
                  <span dir="rtl">לפיצוחים שלנו</span>
                </button>
              </Link>
            </h1>
          </div>
        </div>

        <h1 className="pl-5 pr-5 py-3">
          <span dir="rtl">קצת על המוצרים שלנו</span>
        </h1>
        <p className="pl-5 pr-5">
          <span dir="rtl">
            לורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין - הנקרא לפעמים גם דמי
            טקסט או ג'יבריש - ומיועד להיות ממוקם בסקיצות עיצוביות - של עלונים,
            מגזינים, מודעות, אתרי אינטרנט וכו' - במקום הטקסט האמיתי הסופי - עד
            שיהיה טקסט אמיתי
          </span>
        </p>
      </section>
      <section>
        <div>
          <div className="BorderImg">
            <div className=" img-fluid3">
              <h1 className="img-text">
                <Link to="/DryProductList">
                  <button className="ButtonImg">
                    <span dir="rtl">לפירות היבשים שלנו</span>
                  </button>
                </Link>
              </h1>
            </div>
          </div>
          <span dir="rtl">
            <h1 className="headingHome pl-5 pr-5 py-3">
              קצת על הפירות יבשים שלנו
            </h1>
          </span>
          <p className="pl-5 pr-5">
            <span dir="rtl">
              לורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין - הנקרא לפעמים גם
              דמי טקסט או ג'יבריש - ומיועד להיות ממוקם בסקיצות עיצוביות - של
              עלונים, מגזינים, מודעות, אתרי אינטרנט וכו' - במקום הטקסט האמיתי
              הסופי - עד שיהיה טקסט אמיתי
            </span>
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Homepage;
