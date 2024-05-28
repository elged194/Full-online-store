import { useSelector } from "react-redux";
import "./payment.css";

export default function PaymentLeft() {
  const { totalePayment , Discount , additionalFee} = useSelector((state) => state.UserStor);

  return (
    <>
      <div className="payment-left">
        <div className="payment-header">
          <div className="payment-header-icon">
            <i className="ri-flashlight-fill" />
          </div>
          <div className="payment-header-title">Order Summary</div>
          <p className="payment-header-description">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <div className="payment-content">
          <div className="payment-body">
            <div className="payment-plan">
              <div className="payment-plan-type">Pro</div>
              <div className="payment-plan-info">
                <div className="payment-plan-info-name">Professional Plan</div>
                <div className="payment-plan-info-price">$49 per month</div>
              </div>
              <a href="/" className="payment-plan-change">
                Change
              </a>
            </div>
            <div className="payment-summary">
              <div className="payment-summary-item">
                <div className="payment-summary-name">Additional fee</div>
                <div className="payment-summary-price">${additionalFee}</div>
              </div>
              <div className="payment-summary-item">
                <div className="payment-summary-name">Discount 10%</div>
                <div className="payment-summary-price">-${Discount.toFixed(2)}</div>
              </div>
              <div className="payment-summary-divider" />
              <div className="payment-summary-item payment-summary-total">
                <div className="payment-summary-name">Total</div>
                <div className="payment-summary-price">${totalePayment.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
