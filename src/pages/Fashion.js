import React from "react";
import "../assets/css/fashion.css";
import { Link } from "react-router-dom";

import i1 from '../assets/img/f1.webp'
import i2 from '../assets/img/f2.webp'
import i3 from '../assets/img/f3.webp'
import i4 from '../assets/img/f4.webp'
import i5 from '../assets/img/f5.webp'
import i6 from '../assets/img/f6.jpg'


function Fashion (){
    return(
        <>
{/* HERO */}
<section className="hero">
<div>
<h1 className="fade-up">LUXURY HAUTE COLLECTION</h1>
<p className="fade-up fade-delay-1">TIMELESS • PARIS • LUXURY</p>
</div>
</section>

{/* COLLECTION */}
<div className="container fade-up">
  <h2 className="section-title fade-up fade-delay-1">
    2026 RUNWAY COLLECTION
  </h2>
  <div className="row g-4 fade-up fade-delay-2">
    
{/* CARD 1 */}
<div className="col-md-4 fade-up fade-delay-1">
<div className="fashion-card" data-bs-toggle="modal" data-bs-target="#m1">
<img src={i1} alt="" />
<div className="fashion-overlay"><h5>Golden Couture Dress</h5></div>
</div>
</div>

{/* CARD 2 */}
<div className="col-md-4 fade-up fade-delay-2">
<div className="fashion-card" data-bs-toggle="modal" data-bs-target="#m2">
<img src={i2} alt="" />
<div className="fashion-overlay"><h5>Paris Evening Look</h5></div>
</div>
</div>

{/* CARD 3 */}
<div className="col-md-4 fade-up fade-delay-3">
<div className="fashion-card" data-bs-toggle="modal" data-bs-target="#m3">
<img src={i3} alt="" />
<div className="fashion-overlay"><h5>Luxury Black Statement</h5></div>
</div>
</div>

{/* CARD 4 */}
<div className="col-md-4 fade-up fade-delay-1">
<div className="fashion-card" data-bs-toggle="modal" data-bs-target="#m4">
<img src={i4} alt="" />
<div className="fashion-overlay"><h5>Modern Runway</h5></div>
</div>
</div>

{/* CARD 5 */}
<div className="col-md-4 fade-up fade-delay-2">
<div className="fashion-card" data-bs-toggle="modal" data-bs-target="#m5">
<img src={i5} alt="" />
<div className="fashion-overlay"><h5>Golden Glow</h5></div>
</div>
</div>

{/* CARD 6 */}
<div className="col-md-4 fade-up fade-delay-3">
<div className="fashion-card" data-bs-toggle="modal" data-bs-target="#m6">
<img src={i6} alt="" />
<div className="fashion-overlay"><h5>Timeless Elegance</h5></div>
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
<img src={i1} className="img-fluid mb-4" alt="" />
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
<img src={i2} className="img-fluid mb-4" alt="" />
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
<img src={i3} className="img-fluid mb-4" alt="" />
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
<img src={i4} className="img-fluid mb-4" alt="" />
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
<img src={i5} className="img-fluid mb-4" alt="" />
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
<img src={i6} className="img-fluid mb-4" alt="" />
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

export default Fashion;