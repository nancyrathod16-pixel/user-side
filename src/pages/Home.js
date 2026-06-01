import React from "react";
import "../assets/css/home.css";
import { Link } from "react-router-dom";

import image1 from '../assets/img/pro4.jpg';
import image2 from '../assets/img/pro6.jpg';
import image3 from '../assets/img/pro12.webp';
import image4 from '../assets/img/w1.jpg';
import image5 from '../assets/img/w2.webp';
import image6 from '../assets/img/w5.jpg';




function Home() {
  return (
   <>
<section className="hero-home">
    <div className="hero-content">
        <h1>CHANEL</h1>
        <p>TIMELESS ELEGANCE · PARIS</p>
        <Link to="/view-products">
            <button className="hero-btn">DISCOVER COLLECTION</button>
        </Link>
    </div>

    <div className="scroll-down">
        SCROLL
    </div>
</section>

<section className="container">

    <div className="section-title">
        <h2>POPULAR PRODUCTS</h2>
        <p>TIMELESS · ICONIC · LUXURY</p>
    </div>

    <p style={{ textAlign: "right" }}>
        <Link to="/view-products">
            View All
            <i className="fa-solid fa-arrow-right" style={{ color: "rgb(215,215,199)" }}></i>
        </Link>
    </p>

    <div className="row g-4">

      <div className="col-md-4">
    <div className="product-card-home">
        <img src={image1} alt="Skincare Product" className="w-100 product-img-home" />
        <div className="product-body">
            <h5 className="product-title-home">SKINCARE</h5>
            <br />
            <button className="luxury-btn">VIEW PRODUCT</button>
        </div>
    </div>
</div>

<div className="col-md-4">
    <div className="product-card-home">
        <img src={image2} alt="Fashion Product" className="w-100 product-img-home" />
        <div className="product-body">
            <h5 className="product-title-home">FASHION</h5>
            <br />
            <Link to="/view-products" className="luxury-btn text-decoration-none">
                VIEW PRODUCT
            </Link>
        </div>
    </div>
</div>

<div className="col-md-4">
    <div className="product-card-home">
       <img src={image3} alt="Jewellery Product" className="w-100 product-img-home" />
        <div className="product-body">
            <h5 className="product-title-home">FRAGRANCE</h5>
            <br />
            <button className="luxury-btn">VIEW PRODUCT</button>
        </div>
    </div>
</div>
    </div>

</section>

<section className="testimonial-section container">

    <div className="section-title">
        <h2>CLIENT TESTIMONIALS</h2>
        <p>TIMELESS · ICONIC · LUXURY</p>
    </div>

    <div id="luxuryCarousel" className="carousel slide" data-bs-ride="carousel"  data-bs-interval="2000"
  data-bs-pause="false">

        <div className="carousel-indicators">
            <button type="button" data-bs-target="#luxuryCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#luxuryCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#luxuryCarousel" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">

            <div className="carousel-item active">
                <div className="testimonial-card text-center">
                    <img src={image4} alt="Sophia Martin" className="client-img" />

                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>

                    <div className="quote">
                        “An absolute symbol of elegance and craftsmanship.
                        Every detail reflects sophistication and timeless beauty.”
                    </div>

                    <div className="client-name">SOPHIA MARTIN</div>
                    <div className="client-role">Fashion Influencer · Paris</div>
                </div>
            </div>

            <div className="carousel-item">
                <div className="testimonial-card text-center">
                    <img src={image5} alt="Emma Williams" className="client-img" />

                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>

                    <div className="quote">
                        “Luxury redefined. Wearing it feels like stepping into
                        a world of confidence and grace.”
                    </div>

                    <div className="client-name">EMMA WILLIAMS</div>
                    <div className="client-role">Model · Milan</div>
                </div>
            </div>

            <div className="carousel-item">
                <div className="testimonial-card text-center">
                    <img src={image6} alt="Isabella Rossi" className="client-img" />

                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>

                    <div className="quote">
                        “The perfect blend of heritage and modern luxury.
                        A true statement of timeless fashion.”
                    </div>

                    <div className="client-name">ISABELLA ROSSI</div>
                    <div className="client-role">Designer · Rome</div>
                </div>
            </div>

        </div>

    </div>
</section>
</>
  );
}

export default Home;