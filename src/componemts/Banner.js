import React from 'react'
import "../componemts/style.css"
function Banner() {
  return (
    <>
     <div className="ac2" >
    Gold Mine <war>10 + 1</war> Monthly Plan <span>(Pay 10 Installments, Get 100% Off on 11th Installment)</span> <yes>Subscribe Now</yes>
    </div>
    <div className="ac8">STYLISH FEBRUARY: <span>Fine jewellery, high design</span></div>
    <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require("../images/1.webp")} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require("../images/2.webp")} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require("../images/3.webp")} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon bg-dark  rounded rounded-circle" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon bg-dark  rounded rounded-circle" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
<img src={require("../images/4.webp")} class="ac5" alt="..."/>
<div className="conatiner ac6">
<iframe width="560" height="315" src="https://www.youtube.com/embed/VOAZirf4hOs?si=upOlFZNEYIaawUZr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<img src={require("../images/5.webp")}  class="ac7" alt="..."/>

</div>
<div className="ac8">DAZZLING DECEMBER: <span>Fine jewellery, bright and beautiful</span></div>

<img src={require("../images/6.webp")} class="ac5" alt="..."/>
 
<div className="ac8">STUNNING NOVEMBER: <span>Gorgeous expressions in gold</span></div>
<div className="ac9">
<img src={require("../images/7.webp")} class="ac5" alt="..."/>
<p>22 Designs Starting from ₹ 12,767</p>

</div>
<div className="ac9">
<img src={require("../images/8.webp")} class="ac5" alt="..."/>
<p>152 Designs Starting from ₹ 7,267
</p>
</div>
 
<div className="ac8">HAUTE OCTOBER: <span>Extravagant inspiration, striking design</span></div>

<div className="ac9">
<img src={require("../images/9.webp")} class="ac5" alt="..."/>
<p>389 Designs Starting from ₹ 4,333</p></div>
 
<div className="ac8">SEPTEMBER SIZZLERS: <span>Designer jewellery, gorgeous artistry</span></div>

<div className="ac9">

<img src={require("../images/10.webp")} class="ac5" alt="..."/>
<p>32 Designs Starting from ₹ 12,449</p></div>
 
<div className="ac8">AUGUST TREASURES: <span>Stylish jewellery, handcrafted with love</span></div>
<div className="ac9">

<img src={require("../images/11.webp")} class="ac5" alt="..."/>
<p>26 Designs Starting from ₹ 5,056
</p>
</div>
 
<div className="ac8">GORGEOUS JULY: <span>Jewellery that will take your breath away</span></div>
<div className="ac9">

<img src={require("../images/12.webp")} class="ac5" alt="..."/>
<p>20 Designs Starting from ₹ 13,752
</p>
</div>
 
<div className="ac8">JUNE SPARKLE: <span>Fine jewellery meets high fashion</span></div>

<div className="ac9">

<img src={require("../images/13.webp")} class="ac5" alt="..."/>
<p>36 Designs Starting from ₹ 15,534</p>
</div>


<div className="ac10">VIEW MORE COLLECTIONS</div>

    
    
    
    </>
  )
}

export default Banner