import React from "react";
import "../assets/css/fine.css";
import { Link } from "react-router-dom";

import f1 from '../assets/img/fi1.jpg'
import f2 from '../assets/img/fi2.jpg'
import f3 from '../assets/img/fi3.avif'
import f4 from '../assets/img/fi4.jpg'
import f5 from '../assets/img/fi7.jpg'
import f6 from '../assets/img/fi6.jpg'


function Fine (){
    return(
        <>
{/* HERO */}
<section className="hero-fine">
  <div>
    <h1 className="fade-up">MINIMAL FINE JEWELLERY</h1>
    <p className="fade-up fade-delay-1">TIMELESS • PARIS • LUXURY</p>
  </div>
</section>

{/* COLLECTION */}
<div className="container">
  <h2 className="section-title fade-up">
    2026 RUNWAY COLLECTION
  </h2>

  <div className="row g-4">

    {/* CARD 1 */}
    <div className="col-md-4">
      <div
        className="fashion-card fade-up fade-delay-1"
        data-bs-toggle="modal"
        data-bs-target="#m1"
      >
        <img src={f1} alt="" />
        <div className="fashion-overlay">
          <h5>Golden Couture Dress</h5>
        </div>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="col-md-4">
      <div
        className="fashion-card fade-up fade-delay-2"
        data-bs-toggle="modal"
        data-bs-target="#m2"
      >
        <img src={f2} alt="" />
        <div className="fashion-overlay">
          <h5>Paris Evening Look</h5>
        </div>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="col-md-4">
      <div
        className="fashion-card fade-up fade-delay-3"
        data-bs-toggle="modal"
        data-bs-target="#m3"
      >
        <img src={f3} alt="" />
        <div className="fashion-overlay">
          <h5>Luxury Black Statement</h5>
        </div>
      </div>
    </div>

    {/* CARD 4 */}
    <div className="col-md-4">
      <div
        className="fashion-card fade-up fade-delay-1"
        data-bs-toggle="modal"
        data-bs-target="#m4"
      >
        <img src={f4} alt="" />
        <div className="fashion-overlay">
          <h5>Modern Runway</h5>
        </div>
      </div>
    </div>

    {/* CARD 5 */}
    <div className="col-md-4">
      <div
        className="fashion-card fade-up fade-delay-2"
        data-bs-toggle="modal"
        data-bs-target="#m5"
      >
        <img src={f5} alt="" />
        <div className="fashion-overlay">
          <h5>Golden Glow</h5>
        </div>
      </div>
    </div>

    {/* CARD 6 */}
    <div className="col-md-4">
      <div
        className="fashion-card fade-up fade-delay-3"
        data-bs-toggle="modal"
        data-bs-target="#m6"
      >
        <img src={f6} alt="" />
        <div className="fashion-overlay">
          <h5>Timeless Elegance</h5>
        </div>
      </div>
    </div>

  </div>
</div>
{/* MODALS */}

{/* Modal 1 */}
<div className="modal fade" id="m1" tabIndex="-1">
<div className="modal-dialog modal-lg modal-dialog-centered">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title">Golden Couture Dress</h5>
<button className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
</div>
<div className="modal-body">
<img src={f1} className="img-fluid mb-4" alt="" />
<p>Luxury runway masterpiece crafted with Paris inspiration.</p>
<h4>₹ 4,50,000</h4>
<Link to="/fd">
  <button className="btn btn-gold mt-3">Enquire Now</button>
</Link>
</div>
</div>
</div>
</div>

{/* Modal 2 */}
<div className="modal fade" id="m2" tabIndex="-1">
<div className="modal-dialog modal-lg modal-dialog-centered">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title">Paris Evening Look</h5>
<button className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
</div>
<div className="modal-body">
<img src={f2} className="img-fluid mb-4" alt="" />
<p>Elegant couture with refined French detailing.</p>
<h4>₹ 3,80,000</h4>
<button className="btn btn-gold mt-3">Enquire Now</button>
</div>
</div>
</div>
</div>

{/* Modal 3 */}
<div className="modal fade" id="m3" tabIndex="-1">
<div className="modal-dialog modal-lg modal-dialog-centered">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title">Luxury Black Statement</h5>
<button className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
</div>
<div className="modal-body">
<img src={f3} className="img-fluid mb-4" alt="" />
<p>Bold runway presence with timeless black elegance.</p>
<h4>₹ 5,20,000</h4>
<button className="btn btn-gold mt-3">Enquire Now</button>
</div>
</div>
</div>
</div>

{/* Modal 4 */}
<div className="modal fade" id="m4" tabIndex="-1">
<div className="modal-dialog modal-lg modal-dialog-centered">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title">Modern Runway</h5>
<button className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
</div>
<div className="modal-body">
<img src={f4} className="img-fluid mb-4" alt="" />
<p>Contemporary silhouette designed for modern icons.</p>
<h4>₹ 3,20,000</h4>
<button className="btn btn-gold mt-3">Enquire Now</button>
</div>
</div>
</div>
</div>

{/* Modal 5 */}
<div className="modal fade" id="m5" tabIndex="-1">
<div className="modal-dialog modal-lg modal-dialog-centered">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title">Golden Glow</h5>
<button className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
</div>
<div className="modal-body">
<img src={f5} className="img-fluid mb-4" alt="" />
<p>Soft golden tones crafted for timeless elegance.</p>
<h4>₹ 2,90,000</h4>
<button className="btn btn-gold mt-3">Enquire Now</button>
</div>
</div>
</div>
</div>

{/* Modal 6 */}
<div className="modal fade" id="m6" tabIndex="-1">
<div className="modal-dialog modal-lg modal-dialog-centered">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title">Timeless Elegance</h5>
<button className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
</div>
<div className="modal-body">
<img src={f6} className="img-fluid mb-4" alt="" />
<p>Classic couture silhouette inspired by Paris fashion.</p>
<h4>₹ 4,10,000</h4>
<button className="btn btn-gold mt-3">Enquire Now</button>
</div>
</div>
</div>
</div>

        </>
    )
}

export default Fine;