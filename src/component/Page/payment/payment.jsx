import "./payment.css";
import './tailwindcss-colors.css'
import PaymentRight from "./paymentRight";
import PaymentLeft from "./paymentLeft";

export default function Payment() {
  return (
    <>
      {/* start: Payment */}
      <section className="payment-section">
        <div className="container">
          <div className="payment-wrapper">
            <PaymentLeft />
            <PaymentRight />
          </div>
        </div>
      </section>
      {/* end: Payment */}
    </>
  );
}
