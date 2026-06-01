import React, { useState } from "react";
import "../assets/css/by fashion.css"; // your CSS

import f1 from "../assets/img/f1.webp";

function Checkout() {
  const [showPopup, setShowPopup] = useState(false);
  const [payment, setPayment] = useState("");

  const placeOrder = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container py-5">

      <h2 className="gold mb-4">Checkout</h2>

      <div className="row">

        {/* LEFT SIDE */}
        <div className="col-md-8">

          {/* SHIPPING */}
          <div className="box">
            <h4 className="gold mb-3">Shipping Address</h4>

            <div className="row">
              <div className="col-md-6 mb-3">
                <input type="text" className="form-control" placeholder="Full Name" />
              </div>

              <div className="col-md-6 mb-3">
                <input type="text" className="form-control" placeholder="Phone Number" />
              </div>

              <div className="col-md-12 mb-3">
                <input type="text" className="form-control" placeholder="Address" />
              </div>

              <div className="col-md-4 mb-3">
                <input type="text" className="form-control" placeholder="City" />
              </div>

              <div className="col-md-4 mb-3">
                <input type="text" className="form-control" placeholder="State" />
              </div>

              <div className="col-md-4 mb-3">
                <input type="text" className="form-control" placeholder="Pincode" />
              </div>
            </div>
          </div>

          {/* PAYMENT */}
          <div className="box">
            <h4 className="gold mb-3">Payment Method</h4>

            {["COD", "UPI", "CARD", "NET"].map((method) => (
              <label className="payment-option" key={method}>
                <input
                  type="radio"
                  name="payment"
                  checked={payment === method}
                  onChange={() => setPayment(method)}
                />
                {" "}
                {method === "COD" && "Cash On Delivery"}
                {method === "UPI" && "UPI Payment"}
                {method === "CARD" && "Credit / Debit Card"}
                {method === "NET" && "Net Banking"}
              </label>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-4">
          <div className="box">

            <h4 className="gold mb-3">Order Summary</h4>

            <div className="d-flex align-items-center mb-3">
              <img className="product-img" src={f1} alt="" />

              <div className="ms-3">
                <h6>Couture Evening Gown</h6>
                <p className="text-muted mb-0">Qty: 1</p>
              </div>
            </div>

            <hr />

            <div className="d-flex justify-content-between">
              <span>Price</span>
              <span>$1,250</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>Delivery</span>
              <span className="text-success">FREE</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between">
              <h5>Total</h5>
              <h5 className="gold">$1,250</h5>
            </div>

            <br />

            <button className="order-btn" onClick={placeOrder}>
              <i className="fa fa-lock"></i> Place Order
            </button>

          </div>
        </div>

      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="order-popup show">
          <div className="popup-box">

            <i className="fa fa-circle-check success-icon"></i>

            <h3>Order Confirmed!</h3>
            <p>Your order has been placed successfully.</p>

            <button className="popup-btn" onClick={closePopup}>
              Continue Shopping
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default Checkout;