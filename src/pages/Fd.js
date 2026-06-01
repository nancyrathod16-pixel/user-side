import React, { useState } from "react";
import "../assets/css/fd.css";

import p1 from '../assets/img/f1.webp';
import p2 from '../assets/img/s1.jpg';
import p3 from '../assets/img/s2.webp';
import p4 from '../assets/img/s3.webp';

function FD (){

    const [mainImage, setMainImage] = useState(p1);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("M");
    const [color, setColor] = useState("#000");

    return(
        <>
<div className="container product-wrapper">
<div className="row align-items-center">

{/* IMAGE */}
<div className="col-lg-6">

<img src={mainImage} className="main-img mb-3" alt="" />

<div className="row g-2">

<div className="col-3">
<img src={p1} alt="Product View 1" className="img-fluid thumb" onClick={() => setMainImage(p1)} />
</div>

<div className="col-3">
<img src={p2} alt="Product View 2" className="img-fluid thumb" onClick={() => setMainImage(p2)} />
</div>

<div className="col-3">
<img src={p3} alt="Product View 3" className="img-fluid thumb" onClick={() => setMainImage(p3)} />
</div>

<div className="col-3">
<img src={p4} alt="Product View 4" className="img-fluid thumb" onClick={() => setMainImage(p4)} />
</div>

</div>
</div>

{/* DETAILS */}
<div className="col-lg-6">

<p className="brand-text">CHANEL</p>

<h1 className="product-title">Runway Elegance Coat Dress</h1>

<div className="price-box">
<span className="discount">-15%</span>
<span className="price">₹4,50,000</span>
</div>

<p className="shipping-text">Shipping calculated at checkout.</p>

<h6 className="mt-4">SIZE</h6>

<div>
<button className={`size-btn ${size==="M"?"active":""}`} onClick={()=>setSize("M")}>M</button>
<button className={`size-btn ${size==="L"?"active":""}`} onClick={()=>setSize("L")}>L</button>
<button className={`size-btn ${size==="XL"?"active":""}`} onClick={()=>setSize("XL")}>XL</button>
<button className={`size-btn ${size==="XXL"?"active":""}`} onClick={()=>setSize("XXL")}>XXL</button>
<button className={`size-btn ${size==="3XL"?"active":""}`} onClick={()=>setSize("3XL")}>3XL</button>
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
<button className="btn-cart">Add to cart</button>
</Link>

<Link to="/by fashion">
<button className="btn-buy">Buy it now</button>
</Link>

<Link to="/see more-fashion" className="more-details">
See more details <i className="fa-solid fa-arrow-right"></i>
</Link>

</div>
</div>
</div>
</>
)
}

export default FD;