import React from "react";
import "../assets/css/help.css";
import { Link } from "react-router-dom";

function Help(){
    return(
        <>
        <section className="help-hero">
  <div>
    <h1>HELP</h1>
    <p>Client Care & Assistance</p>
  </div>
</section>

{/* HELP CATEGORIES */}

<section className="help-section">
  <div className="container">

    <div className="row g-4">

      <div className="col-md-4">
        <div className="help-card">
          <i className="fa-solid fa-box"></i>
          <h5>Orders</h5>
          <p>Track your order and view delivery updates.</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="help-card">
          <i className="fa-solid fa-rotate-left"></i>
          <h5>10 Days Returns Policy</h5>
          <p>Learn about returns, exchanges, and refunds.</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="help-card">
          <i className="fa-solid fa-gem"></i>
          <h5>Care</h5>
          <p>Discover how to maintain your luxury Products.</p>
        </div>
      </div>

    </div>

  </div>
</section>

{/* FAQ */}

<section className="faq-section">

  <div className="container">

    <h2 className="text-center mb-5" style={{ fontFamily: "Playfair Display", letterSpacing: "4px" }}>
      Frequently Asked Questions
    </h2>

    <div className="accordion" id="faq">

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q1">
            How long does delivery take?
          </button>
        </h2>
        <div id="q1" className="accordion-collapse collapse">
          <div className="accordion-body">
            Delivery typically takes 3-7 business days depending on location.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q2">
            Can I return a product?
          </button>
        </h2>
        <div id="q2" className="accordion-collapse collapse">
          <div className="accordion-body">
            Yes. Items can be returned within 14 days if unused and in original packaging.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q3">
            How do I contact client services?
          </button>
        </h2>
        <div id="q3" className="accordion-collapse collapse">
          <div className="accordion-body">
            You can contact our client service team via email or through the contact page.
          </div>
        </div>
      </div>

    </div>

  </div>

</section>

{/* CLIENT SERVICE */}

<section className="client-service">

  <div className="container">

    <h3>CLIENT SERVICES</h3>

    <p>Our advisors are available to assist you with product information, orders, and services.</p>

    <a href="contact.html">
      <button className="help-btn">CONTACT US</button>
    </a>

  </div>

</section>
        </>
    )
}
export default Help;