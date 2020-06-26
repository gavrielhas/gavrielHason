import React from "react";

function Footer() {
  return (
    <footer className="py-3">
      <div>
        <h3 className="pl-5 pr-5">צרו קשר</h3>
        <p className="pl-5 pr-5">
          אתם יכולים ליצור איתנו קשר לכל מטרה במספר הבא:&nbsp;
          <strong>
            <a href="tel:052-841-0155">052-841-0155</a>
          </strong>
          <br />
          אתם יכולים להזמין באתר האינטרנט בקנייה בטוחה או לבקר בחנות שלנו שנמצאת
          בתל אביב, שדרות הר ציון 110 בשעות הפעילות.
          <br />
          <strong>שעות הפעילות:</strong>
          <br />
          יום א': 8 בבוקר עד 8 בערב
          <br />
          יום ב': 8 בבוקר עד 8 בערב
          <br />
          יום ג': 8 בבוקר עד 8 בערב
          <br />
          יום ד': 8 בבוקר עד 8 בערב
          <br />
          יום ה': 8 בבוקר עד 8 בערב
          <br />
          יום ו': 8 בבוקר עד 5 בערב
          <br /> יום שבת: סגור
          <br />
          השעות עלולות להשתנות בערבי חג
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
