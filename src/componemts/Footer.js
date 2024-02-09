import React from 'react'

import "../componemts/style.css"

function Footer() {
  return (
    <>
    <div className="ae2">
    <div className="container-fluid ae">
        <ul>
            <h6>ABOUT US</h6>
            <p>Who we are?</p>
            <p>Management Team</p>
            <p>Careers</p>
            <p>Franchise Enquiry</p>
            <p>Design Philosophy</p>
            <h6>CUSTOMER DELIGHT</h6>
            <p>Contact Us</p>
            <p>FAQ</p>
            <p>18004190066</p>
            <p>(9 am-10 pm, 7 days a week)</p>
            
        </ul>
        <ul>
            <h6>POLICIES</h6>
            <p>30-Day Returns</p>
            <p>Lifetime Exchange & Buy back</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Fraud Warning Disclaimer</p>
            <h6>SHOP WITH CONFIDENCE</h6>
            <p>Why Buy From Us?</p>
            <p>Our Certifications</p>
            <p>Press Room</p>
            <p>Testimonials</p>
            <p>Corporate Gifting</p>
            
        </ul>
        <ul>
            <h6>JEWELLERY GUIDE</h6>
            <p>Buying and Price Guide</p>
            <p>Certification Guide</p>
            <p>Diamond and Solitaire Guide</p>
            <p>Gemstone Guide</p>
            <p>Gifting Guide</p>
            <p>Jewellery Care Guide</p>
            </ul>
        <div className="ae1">
            <h3>Download Our App</h3>
            <p>Shining new app, made just for you! It's Free,Easy & Smart.</p>
            <p><img src={require("../images/24.png")} alt="" /></p>
            <img src={require("../images/25.png")} alt="" />
            <img className='image' src={require("../images/22.webp")} alt="" />



        </div>

        </div>

    </div>
    <hr />
    
    
    
    
    
    
    </>
  )
}

export default Footer