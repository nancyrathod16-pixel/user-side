import React, { useState } from "react";
import "../assets/css/see fashion.css";
import { Link } from "react-router-dom";

import f1 from "../assets/img/f2.webp";
import f2 from "../assets/img/f3.webp";
import f3 from "../assets/img/f4.webp";
import f4 from "../assets/img/f5.webp";
import w1 from "../assets/img/w1.jpg";
import w2 from "../assets/img/w2.webp";
import w3 from "../assets/img/wa4.webp";
import img1 from "../assets/img/f1.webp";






function See (){

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("S");
  const [color, setColor] = useState("#000");

  const addToCart = () => {
    alert("Item added to your cart successfully!");
  };

  return(
    <>
    {/* PRODUCT SECTION */}
    <div className="container product-section">
      <div className="row align-items-center">

        <div className="col-lg-6">
          <img src={img1} className="main-img" alt="" />
        </div>

        <div className="col-lg-6">

          <p className="brand-name">CHANEL</p>
          <h1 className="product-title">Runway Elegance Coat Dress</h1>

          <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
            <span style={{color:"#ff4d4d", fontSize:"20px"}}>-15%</span>
            <span style={{fontSize:"28px"}}>$2,550</span>
          </div>

          <p className="shipping">Shipping calculated at checkout.</p>

          <h6 className="mt-4">SIZE</h6>

          <div>
            <button className={`size-btn ${size==="S"?"active":""}`} onClick={()=>setSize("S")}>S</button>
            <button className={`size-btn ${size==="M"?"active":""}`} onClick={()=>setSize("M")}>M</button>
            <button className={`size-btn ${size==="L"?"active":""}`} onClick={()=>setSize("L")}>L</button>
            <button className={`size-btn ${size==="XL"?"active":""}`} onClick={()=>setSize("XL")}>XL</button>
          </div>

          <h6 className="mt-4">COLOR</h6>

          <div className="d-flex gap-3 mt-2">

            <span className={`color-circle ${color==="#000"?"active":""}`} style={{background:"#000"}} onClick={()=>setColor("#000")}></span>

            <span className={`color-circle ${color==="#8B0000"?"active":""}`} style={{background:"#8B0000"}} onClick={()=>setColor("#8B0000")}></span>

            <span className={`color-circle ${color==="#d4af37"?"active":""}`} style={{background:"#d4af37"}} onClick={()=>setColor("#d4af37")}></span>

            <span className={`color-circle ${color==="#1a1a1a"?"active":""}`} style={{background:"#1a1a1a"}} onClick={()=>setColor("#1a1a1a")}></span>

            <span className={`color-circle ${color==="#fff"?"active":""}`} style={{background:"#fff", border:"1px solid #ccc"}} onClick={()=>setColor("#fff")}></span>

          </div>

          <h6 className="mt-4">Quantity</h6>

          <div className="qty-box">
            <button className="qty-btn" onClick={()=> setQty(qty > 1 ? qty-1 : 1)}>−</button>
            <span>{qty}</span>
            <button className="qty-btn" onClick={()=> setQty(qty+1)}>+</button>
          </div>

          <Link to="/add to cart fashion">
            <button className="btn-cart" onClick={addToCart}>Add to cart</button>
          </Link>

          <Link to="/by fashion">
            <button className="btn-buy">Buy it now</button>
          </Link>

          <button className="btn-wishlist">
            <i className="fa-regular fa-heart"></i> Add to Wishlist
          </button>

        </div>
      </div>
    </div>

    {/* DESCRIPTION */}
    <div className="container desc-section">
      <h3>About This Product</h3>

    <p>Inspired by high-fashion runway aesthetics, this elegant black coat dress represents timeless sophistication and
      modern luxury.</p>

    <p>Inspired by high-fashion runway aesthetics, this elegant black coat dress represents timeless sophistication and
      modern luxury. Designed with a structured silhouette, the outfit creates a refined and powerful presence while
      maintaining graceful femininity.</p>

    <p>The ensemble features a tailored long coat design with subtle pocket detailing and a slim waist belt that
      enhances the natural body shape. The deep black fabric adds a sense of mystery and elegance, making it perfect for
      luxury evening events, fashion shows, or statement occasions.</p>

    <p>The look is elevated by a dramatic wide-brim hat and minimal gold accessories, reflecting classic European runway
      styling. The clean lines, premium tailoring, and balanced proportions create a polished and confident appearance.
    </p>
    </div>

    {/* PRODUCT DETAILS */}
    <div className="container mb-5">

  {/* PRODUCT DETAILS */}
  <h3 className="mb-3">Product details</h3>
  <hr style={{borderColor:"#444"}} />

  {/* TOP HIGHLIGHTS */}
  <div 
    className="d-flex justify-content-between align-items-center"
    data-bs-toggle="collapse"
    data-bs-target="#highlights"
    style={{cursor:"pointer"}}
  >
    <h5>Top highlights</h5>
    <i className="fa-solid fa-chevron-down"></i>
  </div>

  <div id="highlights" className="collapse show mt-3">
    <div className="row mb-2">
      <div className="col-6 text-secondary">Material type</div>
      <div className="col-6">High Cotton</div>
    </div>
    <div className="row mb-2">
      <div className="col-6 text-secondary">Closure type</div>
      <div className="col-6">Pull-On</div>
    </div>
    <div className="row mb-2">
      <div className="col-6 text-secondary">Water resistance level</div>
      <div className="col-6">Not Water Resistant</div>
    </div>
    <div className="row mb-2">
      <div className="col-6 text-secondary">Sole material</div>
      <div className="col-6">TP Rubber</div>
    </div>
    <div className="row mb-2">
      <div className="col-6 text-secondary">Style</div>
      <div className="col-6">S4|Age 20-40 Yrs|EU 29,30,31|18-19.3cms</div>
    </div>
    <div className="row mb-2">
      <div className="col-6 text-secondary">Country of Origin</div>
      <div className="col-6">Paris</div>
    </div>
  </div>

  {/* ADDITIONAL INFO */}
  <div 
    className="d-flex justify-content-between align-items-center mt-4"
    data-bs-toggle="collapse"
    data-bs-target="#additional"
    style={{cursor:"pointer"}}
  >
    <h5>Additional Information</h5>
    <i className="fa-solid fa-chevron-down"></i>
  </div>

  <div id="additional" className="collapse mt-3">
    <div className="row mb-2">
      <div className="col-6 text-secondary">Manufacturer</div>
      <div className="col-6">Aretto, Sanosyzo Private Limited -Paris, 411072</div>
    </div>
    <div className="row mb-2">
      <div className="col-6 text-secondary">Item Weight</div>
      <div className="col-6">700 g</div>
    </div>
    <div className="row mb-2">
      <div className="col-6 text-secondary">Item Dimensions LxWxH</div>
      <div className="col-6">19 x 9 x 11 Centimeters</div>
    </div>
    <div className="row mb-2">
      <div className="col-6 text-secondary">Net Quantity</div>
      <div className="col-6">1.0 Count</div>
    </div>
    <div className="row mb-2">
      <div className="col-6 text-secondary">Generic Name</div>
      <div className="col-6">Coat Dress</div>
    </div>
  </div>

</div>

   <div className="container mb-5">

  <h3 className="mb-4">Customer Reviews</h3>
  <hr style={{borderColor:"#444"}} />

  {/* REVIEW 1 */}
  <div className="p-4 mb-4" style={{border:"1px solid #222", background:"#111"}}>

    <div className="d-flex align-items-center justify-content-between mb-2">

      <div className="d-flex align-items-center">
        <img 
          src={w1} 
          style={{width:"45px", height:"45px", borderRadius:"50%", objectFit:"cover", marginRight:"12px"}} 
          alt="" 
        />
        <div>
          <h6 style={{letterSpacing:"2px", margin:0}}>Isabella Moreau</h6>
          <small style={{color:"#aaa"}}>Verified Buyer</small>
        </div>
      </div>

      <div style={{color:"#d4af37"}}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </div>

    </div>

    <p style={{color:"#ccc", lineHeight:"1.8"}}>
      Elegant and modern design. The fit is perfect and very flattering. Worth the investment.
    </p>

  </div>

  {/* REVIEW 2 */}
  <div className="p-4 mb-4" style={{border:"1px solid #222", background:"#111"}}>

    <div className="d-flex align-items-center justify-content-between mb-2">

      <div className="d-flex align-items-center">
        <img 
          src={w2} 
          style={{width:"45px", height:"45px", borderRadius:"50%", objectFit:"cover", marginRight:"12px"}} 
          alt="" 
        />
        <div>
          <h6 style={{letterSpacing:"2px", margin:0}}>Jhon Dupont</h6>
          <small style={{color:"#aaa"}}>Verified Buyer</small>
        </div>
      </div>

      <div style={{color:"#d4af37"}}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half-stroke"></i>
      </div>

    </div>

    <p style={{color:"#ccc", lineHeight:"1.8"}}>
      Beautiful craftsmanship and premium feel. Perfect for luxury occasions and events.
    </p>

  </div>

  {/* REVIEW 3 */}
<div className="p-4 mb-4" style={{border:"1px solid #222", background:"#111"}}>

  <div className="d-flex align-items-center justify-content-between mb-2">

    <div className="d-flex align-items-center">
      <img 
        src={w3} 
        style={{width:"45px", height:"45px", borderRadius:"50%", objectFit:"cover", marginRight:"12px"}} 
        alt="" 
      />
      <div>
        <h6 style={{letterSpacing:"2px", margin:0}}>Sophia Laurent</h6>
        <small style={{color:"#aaa"}}>Verified Buyer</small>
      </div>
    </div>

    <div style={{color:"#d4af37"}}>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
    </div>

  </div>

  <p style={{color:"#ccc", lineHeight:"1.8"}}>
    Absolutely love this piece. The quality, fit, and design are truly premium and worth every penny.
  </p>

</div>

</div>

    {/* SIMILAR PRODUCTS */}
    <div className="container similar-section">
      <h2 className="text-center mb-5">Similar Products</h2>

      <div className="row g-4">

        <div className="col-md-3">
          <div className="similar-card text-center">
            <img src={f1} className="img-fluid mb-3" alt="" />
            <h6>Luxury Evening Dress</h6>
            <p className="price">$2,950</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="similar-card text-center">
            <img src={f2} className="img-fluid mb-3" alt="" />
            <h6>Classic Black Suit</h6>
            <p className="price">$3,250</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="similar-card text-center">
            <img src={f3} className="img-fluid mb-3" alt="" />
            <h6>Designer Coat</h6>
            <p className="price">$3,150</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="similar-card text-center">
            <img src={f4} className="img-fluid mb-3" alt="" />
            <h6>Elegant Runway Outfit</h6>
            <p className="price">$3,480</p>
          </div>
        </div>

      </div>
    </div>

    </>
  )
}

export default See;