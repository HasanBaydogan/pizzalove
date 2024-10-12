import React from "react";
import Visa from "../../assets/images/payment-methods/visa-icon.svg";
import MasterCard from "../../assets/images/payment-methods/mastercard-icon.svg";
import ApplePay from "../../assets/images/payment-methods/applepay-icon.svg";
import GooglePay from "../../assets/images/payment-methods/googlepay-icon.svg";

export default class FooterContact extends React.Component {
  render() {
    return (
      <section className="footer-contact  flex-container flex-column">
        <h3>Sorularım var?</h3>
        <p>(+90) 555 555 5555</p>
        <p>support@pizzalove.com</p>
        <p>8:00 - 21:00</p>
        <section className="accepted-payments">
          <img width="50" height="50" src={Visa} alt="Visa card" />
          <img width="50" height="50" src={MasterCard} alt="Mastercard card" />
          <img width="50" height="50" src={ApplePay} alt="Apple pay" />
          <img
            width="50"
            height="50"
            className="googlepay"
            src={GooglePay}
            alt="Google pay"
          />
        </section>
      </section>
    );
  }
}
