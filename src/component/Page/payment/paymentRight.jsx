import { useNavigate } from "react-router";
import "./payment.css";
import { useState } from "react";

export default function PaymentRight() {
  const navigate = useNavigate();

  const [show, setshow] = useState(""); //  Show SnackBar => Payment

  const handelSubmit = (e) => {
    e.preventDefault();

    setshow("show"); // Show SnackBar

    setTimeout(() => {
      navigate("/");

      setshow(""); // Hidden SnackBar

      window.location.reload(); // reload page
    }, 3000);
  };

  return (
    <>
      <div className="payment-right">
        <div id="snackbar" className={show}>
          The purchase was made successfully..{" "}
          <i class="bx bx-check-circle"></i>
        </div>

        <form action="" className="payment-form" onSubmit={handelSubmit}>
          <h1 className="payment-title">Payment Details</h1>
          <div className="payment-method">
            <input
              type="radio"
              name="payment-method"
              id="method-1"
              defaultChecked=""
              required
            />
            <label htmlFor="method-1" className="payment-method-item">
              <img
                src="https://res.cloudinary.com/dyxoy6dpx/image/upload/v1716905563/E-Commerce/payment/visa_ksfosh.png"
                alt=""
              />
            </label>
            <input type="radio" name="payment-method" id="method-2" required />
            <label htmlFor="method-2" className="payment-method-item">
              <img
                src="https://res.cloudinary.com/dyxoy6dpx/image/upload/v1716905563/E-Commerce/payment/mastercard_mnxxww.png"
                alt=""
              />
            </label>
            <input type="radio" name="payment-method" id="method-3" required />
            <label htmlFor="method-3" className="payment-method-item">
              <img
                src="https://res.cloudinary.com/dyxoy6dpx/image/upload/v1716905563/E-Commerce/payment/paypal_epcuza.png"
                alt=""
              />
            </label>
            <input type="radio" name="payment-method" id="method-4" required />
            <label htmlFor="method-4" className="payment-method-item">
              <img
                src="https://res.cloudinary.com/dyxoy6dpx/image/upload/v1716905563/E-Commerce/payment/stripe_bnvkom.png"
                alt=""
              />
            </label>
          </div>

          <div className="payment-form-group">
            <input
              type="email"
              placeholder=" "
              className="payment-form-control"
              id="email"
            />
            <label
              htmlFor="email"
              className="payment-form-label payment-form-label-required"
            >
              Email Address
            </label>
          </div>

          <div className="payment-form-group">
            <input
              type="text"
              placeholder=" "
              className="payment-form-control"
              id="card-number"
            />
            <label
              htmlFor="card-number"
              className="payment-form-label payment-form-label-required"
            >
              Card Number
            </label>
          </div>

          <div className="payment-form-group-flex">
            <div className="payment-form-group">
              <input
                type="date"
                placeholder=" "
                className="payment-form-control"
                id="expiry-date"
              />
              <label
                htmlFor="expiry-date"
                className="payment-form-label payment-form-label-required"
              >
                Expiry Date
              </label>
            </div>
            <div className="payment-form-group">
              <input
                type="text"
                placeholder=" "
                className="payment-form-control"
                id="cvv"
              />
              <label
                htmlFor="cvv"
                className="payment-form-label payment-form-label-required"
              >
                CVV
              </label>
            </div>
          </div>

          <button type="submit" className="payment-form-submit-button">
            <i className="ri-wallet-line" /> Pay
          </button>
        </form>
      </div>
    </>
  );
}
