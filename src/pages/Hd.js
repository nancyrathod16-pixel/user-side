import React, { useState } from "react";
import "../assets/css/hd.css";
import { Link } from "react-router-dom";

import h1 from '../assets/img/h2.jpeg';
import h2 from '../assets/img/hd1.webp';
import h3 from '../assets/img/hd2.webp';
import h4 from '../assets/img/hd3.webp';
import mainImage1 from '../assets/img/h2.jpeg';


function HD (){

    const [mainImage1, setMainImage] = useState(h1);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("M");
    const [color, setColor] = useState("#000");

    return(
        <>
<div className="container product-wrapper">
<div className="row align-items-center">

{/* IMAGE */}
<div className="col-lg-6">

<img src={mainImage1} className="main-img mb-3" alt="" />

<div className="row g-2">

<div className="col-3">
<img src={h1} className="img-fluid thumb" onClick={() => setMainImage(h1)} />
</div>

<div className="col-3">
<img src={h2} className="img-fluid thumb" onClick={() => setMainImage(h2)} />
</div>

<div className="col-3">
<img src={h3} className="img-fluid thumb" onClick={() => setMainImage(h3)} />
</div>

<div className="col-3">
<img src={h4} className="img-fluid thumb" onClick={() => setMainImage(h4)} />
</div>

</div>
</div>

{/* DETAILS */}
<div className="col-lg-6">

<p className="brand-text">CHANEL</p>

<h1 className="product-title">Luxury High Jewelry</h1>

<div className="price-box">
<span className="discount">-15%</span>
<span className="price">$2,750.00</span>
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


<h6 className="mt-4">Quantity</h6>

<div className="qty-box">
<button className="qty-btn" onClick={()=> setQty(qty > 1 ? qty-1 : 1)}>−</button>
<span>{qty}</span>
<button className="qty-btn" onClick={()=> setQty(qty+1)}>+</button>
</div>

<Link to="/add to cart high">
<button className="btn-cart">Add to cart</button>
</Link>

<Link to="/by high">
<button className="btn-buy">Buy it now</button>
</Link>

<Link to="/see more-high" className="more-details">
See more details <i className="fa-solid fa-arrow-right"></i>
</Link>

</div>
</div>
</div>
</>
)
}

export default HD;