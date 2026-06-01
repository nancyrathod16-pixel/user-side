import React, { useState } from "react";
import "../assets/css/add2.css";

import fa1 from '../assets/img/h2.jpeg'
import fa2 from '../assets/img/h1.jpeg'
import fa3 from '../assets/img/h3.webp'
import fa4 from '../assets/img/h4.jpg'

function Add1() {

  const products = [
    { name: "Coco Crush Fine Jewelry", price: 2750, img: fa1 },
    { name: "Le Paris Russe de Chanel", price: 2950, img: fa2 },
    { name: "Tweed de Chanel", price: 3250, img: fa3 },
    { name: "1932 Collection", price: 3150, img: fa4 },
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

export default Add1;