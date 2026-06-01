import React, { useState } from "react";
import "../assets/css/see high.css";
import { Link } from "react-router-dom";

import hd1 from "../assets/img/hd1.webp";
import hd3 from "../assets/img/hd3.webp";
import hd2 from "../assets/img/hd2.webp";
import hd4 from "../assets/img/h4.jpg";
import w1 from "../assets/img/w1.jpg";
import w2 from "../assets/img/w2.webp";
import w3 from "../assets/img/wa4.webp";
import img2 from "../assets/img/h2.jpeg";






function See1 (){

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
          <img src={img2} className="main-img" alt="" />
        </div>

        <div className="col-lg-6">

          <p className="brand-name">CHANEL</p>
          <h1 className="product-title">Luxury High Jewelry</h1>

          <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
            <span style={{color:"#ff4d4d", fontSize:"20px"}}>-15%</span>
            <span style={{fontSize:"28px"}}>$2,750</span>
          </div>

          <p className="shipping">Shipping calculated at checkout.</p>

          <h6 className="mt-4">SIZE</h6>

          <div>
            <button className={`size-btn ${size==="S"?"active":""}`} onClick={()=>setSize("S")}>S</button>
            <button className={`size-btn ${size==="M"?"active":""}`} onClick={()=>setSize("M")}>M</button>
            <button className={`size-btn ${size==="L"?"active":""}`} onClick={()=>setSize("L")}>L</button>
            <button className={`size-btn ${size==="XL"?"active":""}`} onClick={()=>setSize("XL")}>XL</button>
          </div>

          <h6 className="mt-4">Quantity</h6>

          <div className="qty-box">
            <button className="qty-btn" onClick={()=> setQty(qty > 1 ? qty-1 : 1)}>−</button>
            <span>{qty}</span>
            <button className="qty-btn" onClick={()=> setQty(qty+1)}>+</button>
          </div>

          <Link to="/add to cart high">
            <button className="btn-cart" onClick={addToCart}>Add to cart</button>
          </Link>

          <Link to="/by high">
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

   <p>
High jewelry collections are often unveiled during exclusive events, private exhibitions, or luxury fashion shows. Clients who purchase these pieces are typically collectors, celebrities, or high-net-worth individuals who appreciate the rarity and craftsmanship behind each creation. Because of their exclusivity, some high jewelry pieces are priced in the hundreds of thousands or even millions of dollars.

Beyond their beauty and luxury, high jewelry pieces often carry symbolic and emotional value. Many are purchased to celebrate significant milestones such as anniversaries, royal events, or cultural celebrations. Over time, these pieces can become heirlooms passed down through generations, preserving both family history and extraordinary craftsmanship.

In essence, high jewelry represents the pinnacle of the jewelry industry. It combines artistic vision, rare gemstones, and exceptional craftsmanship to create timeless masterpieces that transcend fashion trends. Each piece tells a story of luxury, creativity, and heritage, making haute joaillerie one of the most admired forms of wearable art in the world. 💎
</p>

<p> Inspired by high-jewelry runway aesthetics, this elegant black coat dress represents timeless sophistication and modern luxury. Designed with a structured silhouette, the outfit creates a refined and powerful presence while maintaining graceful femininity. </p> 

<p> The ensemble features a tailored long coat design with subtle pocket detailing and a slim waist belt that enhances the natural body shape. The deep black fabric adds a sense of mystery and elegance, making it perfect for luxury evening events, fashion shows, or statement occasions. </p> 

<p> The look is elevated by a dramatic wide-brim hat and minimal gold accessories, reflecting classic European runway styling. The clean lines, premium tailoring, and balanced proportions create a polished and confident appearance. </p>
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
            <img src={hd1} className="img-fluid mb-3" alt="" />
            <h6>Luxury Evening Dress</h6>
            <p className="price">$2,950</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="similar-card text-center">
            <img src={hd2} className="img-fluid mb-3" alt="" />
            <h6>Classic Black Suit</h6>
            <p className="price">$3,250</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="similar-card text-center">
            <img src={hd3} className="img-fluid mb-3" alt="" />
            <h6>Designer Coat</h6>
            <p className="price">$3,150</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="similar-card text-center">
            <img src={hd4} className="img-fluid mb-3" alt="" />
            <h6>Elegant Runway Outfit</h6>
            <p className="price">$3,480</p>
          </div>
        </div>

      </div>
    </div>

    </>
  )
}

export default See1;