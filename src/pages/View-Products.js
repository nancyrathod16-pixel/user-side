import React from "react";
import "../assets/css/view-products.css";
import { Link } from "react-router-dom";

import img1 from '../assets/img/pro4.jpg';
import img2 from '../assets/img/pro7.jpg';
import img3 from '../assets/img/pro3.jpg';
import img4 from '../assets/img/pro8.jpg';
import img5 from '../assets/img/pro5.jpg';
import img6 from '../assets/img/pro6.jpg';
import img7 from '../assets/img/pro11.jpg';
import img8 from '../assets/img/pro13.jpg';
import img9 from '../assets/img/pro12.webp';
import img10 from '../assets/img/pro8.jpg';
import img11 from '../assets/img/pro9.webp';
import img12 from '../assets/img/pro5.jpg';
import img13 from '../assets/img/h2.jpeg';
import img14 from '../assets/img/pro10.jpg';
import img15 from '../assets/img/pro7.jpg';

function View(){
    return(
        <>
     
<div className="page-title">
    <h1>ALL PRODUCTS</h1>
    <p>TIMELESS · ICONIC · LUXURY COLLECTION</p>
</div>

<div className="container">
   <div className="row g-4">

{/* 1 */}
<div className="col-lg-4 col-md-6">
<div className="product-card-view">
<img src={img1} className="w-100 product-img-view" alt="" />
<div className="product-body">
<div className="product-title">Makeup</div>
<div className="product-price">$8,500</div>
<button className="luxury-btn">VIEW PRODUCT</button>
</div>
</div>
</div>

{/* 2 */}
<div className="col-lg-4 col-md-6">
<div className="product-card-view">
<img src={img2} className="w-100 product-img-view" alt="" />
<div className="product-body">
<div className="product-title">Fashion</div>
<div className="product-price">$7,900</div>
<Link to="/fashion" className="luxury-btn text-decoration-none">
    VIEW PRODUCT
</Link>
</div>
</div>
</div>

{/* 3 */}
<div className="col-lg-4 col-md-6">
<div className="product-card-view">
<img src={img3} className="w-100 product-img-view" alt="" />
<div className="product-body">
<div className="product-title">Hand Bags</div>
<div className="product-price">$250</div>
<a href="bags.html" className="luxury-btn text-decoration-none">
    VIEW PRODUCT
</a>
</div>
</div>
</div>

{/* 4 */}
<div className="col-lg-4 col-md-6">
<div className="product-card-view">
<img src={img4} className="w-100 product-img-view" alt="" />
<div className="product-body">
<div className="product-title">Eye Wear</div>
<div className="product-price">$220</div>
<button className="luxury-btn">VIEW PRODUCT</button>
</div>
</div>
</div>

{/* 5 */}
<div className="col-lg-4 col-md-6">
<div className="product-card-view">
<img src={img5} className="w-100 product-img-view" alt="" />
<div className="product-body">
<div className="product-title">Fragrance</div>
<div className="product-price">$32,000</div>
<button className="luxury-btn">VIEW PRODUCT</button>
</div>
</div>
</div>

{/* 6 */}
<div className="col-lg-4 col-md-6">
<div className="product-card-view">
<img src={img6} className="w-100 product-img-view" alt="" />
<div className="product-body">
<div className="product-title">Hand Bags</div>
<div className="product-price">$18,500</div>
<a href="bags.html" className="luxury-btn text-decoration-none">
    VIEW PRODUCT
</a>
</div>
</div>
</div>

{/* 7 */}
<div className="col-lg-4 col-md-6">
<div className="product-card-view">
<img src={img7} className="w-100 product-img-view" alt="" />
<div className="product-body">
<div className="product-title">Belt</div>
<div className="product-price">$9,800</div>
<button className="luxury-btn">VIEW PRODUCT</button>
</div>
</div>
</div>

{/* 8 */}
<div className="col-lg-4 col-md-6">
<div className="product-card-view">
<img src={img8} className="w-100 product-img-view" alt="" />
<div className="product-body">
<div className="product-title">Hand Bag</div>
<div className="product-price">$7,400</div>
<a href="bags.html" className="luxury-btn text-decoration-none">
    VIEW PRODUCT
</a>
</div>
</div>
</div>

{/* 9 */}
<div className="col-lg-4 col-md-6">
<div className="product-card-view">
<img src={img9} className="w-100 product-img-view" alt="" />
<div className="product-body">
<div className="product-title">Fragrances</div>
<div className="product-price">$650</div>
<button className="luxury-btn">VIEW PRODUCT</button>
</div>
</div>
</div>

{/* 10 */}
<div className="col-lg-4 col-md-6">
<div className="product-card-view">
<img src={img10} className="w-100 product-img-view" alt="" />
<div className="product-body">
<div className="product-title">Oversized Black Frame Eyewear</div>
<div className="product-price">$720</div>
<button className="luxury-btn">VIEW PRODUCT</button>
</div>
</div>
</div>

{/* 11 */}
<div className="col-lg-4 col-md-6">
<div className="product-card-view">
<img src={img11} className="w-100 product-img-view" alt="" />
<div className="product-body">
<div className="product-title">High Jewellery</div>
<div className="product-price">$55</div>
<Link to="/high-jew" className="luxury-btn text-decoration-none">
    VIEW PRODUCT
</Link>
</div>
</div>
</div>

{/* 12 */}
<div className="col-lg-4 col-md-6">
<div className="product-card-view">
<img src={img12} className="w-100 product-img-view" alt="" />
<div className="product-body">
<div className="product-title">Luxury Fragrances</div>
<div className="product-price">$75</div>
<button className="luxury-btn">VIEW PRODUCT</button>
</div>
</div>
</div>

{/* 13 */}
<div className="col-lg-4 col-md-6">
<div className="product-card-view">
<img src={img13} className="w-100 product-img-view" alt="" />
<div className="product-body">
<div className="product-title">Fine Jewellery</div>
<div className="product-price">$6,800</div>
<Link to="/fine-jew" className="luxury-btn text-decoration-none">
    VIEW PRODUCT
</Link>
</div>
</div>
</div>

{/* 14 */}
<div className="col-lg-4 col-md-6">
<div className="product-card-view">
<img src={img14} className="w-100 product-img-view" alt="" />
<div className="product-body">
<div className="product-title">Watches</div>
<div className="product-price">$12,500</div>
<Link to="/watches" className="luxury-btn text-decoration-none">
    VIEW PRODUCT
</Link>
</div>
</div>
</div>

{/* 15 */}
<div className="col-lg-4 col-md-6">
<div className="product-card-view">
<img src={img15} className="w-100 product-img-view" alt="" />
<div className="product-body">
<div className="product-title">Skincare</div>
<div className="product-price">$1,200</div>
<button className="luxury-btn">VIEW PRODUCT</button>
</div>
</div>
</div>

</div>
</div>

        </>
    )
}

export default View;