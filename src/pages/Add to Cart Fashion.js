import React, { useState } from "react";
import "../assets/css/add1.css";

import f1 from '../assets/img/f1.webp'
import f2 from '../assets/img/f2.webp'
import f3 from '../assets/img/f3.webp'
import f4 from '../assets/img/f4.webp'

function Add() {

  const products = [
    { name: "Runway Elegance Coat Dress", price: 3950, img: f1 },
    { name: "Luxury Evening Dress", price: 2950, img: f2 },
    { name: "Classic Black Suit", price: 3250, img: f3 },
    { name: "Designer Coat", price: 3150, img: f4 },
  ];

  const [qty, setQty] = useState([1, 1, 1, 1]);

  const updateQty = (index, type) => {
    const newQty = [...qty];

    if (type === "inc") newQty[index]++;
    else if (newQty[index] > 1) newQty[index]--;

    setQty(newQty);
  };

  const grandTotal = qty.reduce(
    (acc, q, i) => acc + q * products[i].price,
    0
  );

  return (
    <div className="container cart-section">
      <h2 className="mb-5">Shopping Cart</h2>

      {products.map((p, i) => (
        <div className="cart-card" key={i}>
          <div className="row align-items-center">

            <div className="col-md-6">
              <div className="cart-product">
                <img src={p.img} alt="" />
                <div className="product-info">
                  <h5>{p.name}</h5>
                  <p className="price">${p.price}</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="qty-box">
                <button className="qty-btn" onClick={() => updateQty(i, "dec")}>-</button>
                <span>{qty[i]}</span>
                <button className="qty-btn" onClick={() => updateQty(i, "inc")}>+</button>
              </div>
            </div>

            <div className="col-md-3">
              <div className="price">
                ${qty[i] * p.price}
              </div>
            </div>

          </div>
        </div>
      ))}

      <div className="total-section">
        <div>Total</div>
        <div>${grandTotal}</div>
      </div>

      <button className="checkout-btn">Checkout</button>
    </div>
  );
}

export default Add;