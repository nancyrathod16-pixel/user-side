import React from "react";
import "../assets/css/contact.css";
import { Link } from "react-router-dom";

function Contact(){
    return(
        <>
          {/* HERO */}

<section className="contact-hero">

  <div>

    <h1>CONTACT</h1>
    <p>TIMELESS · ICONIC · LUXURY</p>

  </div>

</section>


{/* CONTACT */}

<section className="contact-section">

  <div className="container">

    <div className="row g-5">

      <div className="col-lg-5">

        <div className="contact-card">
          <i className="fa-solid fa-location-dot"></i>
          <div>
            <h6>ADDRESS</h6>
            <p>TIMELESS · ICONIC · LUXURY<br />Paris</p>
          </div>
        </div>

        <div className="contact-card">
          <i className="fa-solid fa-envelope"></i>
          <div>
            <h6>EMAIL</h6>
            <p>contact@chanel.com</p>
          </div>
        </div>

        <div className="contact-card">
          <i className="fa-solid fa-phone"></i>
          <div>
            <h6>PHONE</h6>
            <p>+91 0000000000</p>
          </div>
        </div>

        <div className="contact-card">
          <i className="fa-solid fa-clock"></i>
          <div>
            <h6>HOURS</h6>
            <p>Monday – Saturday<br />10 AM – 7 PM</p>
          </div>
        </div>

        <div className="contact-social">
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
        </div>

      </div>


      <div className="col-lg-7">

        <div className="contact-form-box">

          <h4>SEND A MESSAGE</h4>

          <form className="contact-form">

            <div className="row">
              <div className="col-md-6">
                <input type="text" placeholder="Your Name" />
              </div>

              <div className="col-md-6">
                <input type="email" placeholder="Your Email" />
              </div>
            </div>

            <input type="text" placeholder="Subject" />

            <textarea rows="6" placeholder="Your Message"></textarea>

            <button className="contact-btn">SEND MESSAGE</button>

          </form>

        </div>

      </div>

    </div>

  </div>

</section>


{/* MAP */}

<div className="map">

  <iframe
    src="https://maps.google.com/maps?q=surat&t=&z=13&ie=UTF8&iwloc=&output=embed"
    width="100%"
    height="450"
    style={{ border: 0 }}
  ></iframe>

</div>  
        </>
    )
}
export default Contact;