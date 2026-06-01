import React from "react";
import "../assets/css/footer.css";

function Footer (){
    return(
        <>
        <footer className="luxury-footer">
    <div className="container">
        <div className="row">

            {/* Brand */}
            <div className="col-md-4 mb-4">
                <div className="footer-brand">CHANEL</div>
                <p style={{ color: "#bbb" }}>
                    Timeless elegance and iconic luxury.
                    Discover refined craftsmanship and modern sophistication.
                </p>

                <div className="social-icons mt-4">
                    <a href="/"><i className="fab fa-instagram"></i></a>
                    <a href="/"><i className="fab fa-facebook-f"></i></a>
                    <a href="/"><i className="fab fa-twitter"></i></a>
                    <a href="/"><i className="fab fa-youtube"></i></a>
                </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-2 mb-4">
                <div className="footer-heading">EXPLORE</div>
                <a href="/" className="footer-link">Home</a>
                <a href="/" className="footer-link">Collection</a>
                <a href="/" className="footer-link">New Arrivals</a>
                <a href="/" className="footer-link">Best Sellers</a>
            </div>

            {/* Support */}
            <div className="col-md-3 mb-4">
                <div className="footer-heading">SUPPORT</div>
                <a href="/" className="footer-link">Contact Us</a>
                <a href="/" className="footer-link">Shipping & Returns</a>
                <a href="/" className="footer-link">Privacy Policy</a>
                <a href="/" className="footer-link">Terms & Conditions</a>
            </div>

            {/* Newsletter */}
            <div className="col-md-3 mb-4">
                <div className="footer-heading">NEWSLETTER</div>
                <p style={{ color: "#bbb" }}>
                    Subscribe for exclusive updates and luxury launches.
                </p>

                <form className="d-flex">
                    <input
                        type="email"
                        className="form-control newsletter-input me-2"
                        placeholder="Your Email"
                    />
                    <button className="btn newsletter-btn">Join</button>
                </form>
            </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
            © 2026 CHANEL. All Rights Reserved.
        </div>

    </div>
</footer>
        </>
    )
}
export default Footer;