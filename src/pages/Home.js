import React from 'react'
import Banner from '../componemts/Banner'
import "../componemts/style.css"

function Home() {
  return (
    <>
    
    
    <Banner/>
    
   <div className="ad">
    <h1>Drop in to a BlueStone Store near you</h1>

    <p>KNOW MORE</p>
    
   </div>
   <h3 className="ad1">BlueStone Promise</h3>

   <div className="container ad3">
    <div className="row ad2">
        <div className="col-lg-4">
            <img src={require("../images/16.png")} alt="" />
            <h1>100% Certified Jewellery</h1>
            <div className="ad4">
                <h5>100% CERTIFIED JEWELLERY</h5>
                <p>Every piece you get is fully checked for quality and authenticity by reputed agencies:</p>
                <ul>
                    <li>GOLD certified with BIS Hallmark.</li>
                    <li>DIAMOND certificate of authenticity from IGI, SGL and HKD.</li>
                    <li>SOLITAIRES carry a certificate of authenticity from GIA and IGI.</li>
                </ul>

                <span>Read More</span>

            </div>
        </div>
        <div className="col-lg-4">
        <img src={require("../images/17.png")} alt="" />
            <h1>100% Refund</h1>
            <div className="ad4">
                <h5>100% REFUND</h5>
                <p>In the rare occasion that you are not fully satisfied with our product within 30 days of delivery, we will refund 100% of your money back or exchange it. No Questions Asked!</p>
                

                <span>Read More</span>

            </div>
        </div>
        <div className="col-lg-4">
        <img src={require("../images/18.png")} alt="" />
            <h1>Lifetime Exchange & Buyback</h1>
            <div className="ad4">
                <h5>LIFETIME EXCHANGE & BUY BACK</h5>
                <p>If ever you feel like exchanging your old BlueStone Jewellery for newer designs, we are game! Exchange the product for its current value or get Cash with just minor deductions.

</p>
                

                <span>Read More</span>

            </div>
        </div>
    </div>
   </div>
   <div className="container ad3">
    <div className="row ad2">
        <div className="col-lg-4">
            <img src={require("../images/19.png")} alt="" />
            <h1>Free Shipping & Insurance</h1>
            <div className="ad4">
                <h5>FREE SHIPPING & INSURANCE</h5>
                <p>Yes, it's true, we ship for free. For a 100% safe purchase, all goods are insured by us until they reach you securely.

                </p>
                


            </div>
            
        </div>
        <div className="col-lg-4">
        <img src={require("../images/20.png")} alt="" />
            <h1>Try Jewwllery at Home </h1>
            <div className="ad4">
                <h5>TRY JEWELLERY AT HOME</h5>
                <p>Taking you back to the time when jewellery was brought to you in the comfort of your home, and chosen in a close huddle with your loved ones. All you have to do is shortlist the pieces you want to try and book your appointment online.
                </p>
                

                

            </div>
        </div>
        <div className="col-lg-4">
        <img src={require("../images/21.png")} alt="" />
            <h1>Physical Store Near You</h1>
            <div className="ad4">
                <h5>PHYSICAL STORE NEAR YOU</h5>
                <p>The BlueStone Stores are cool and contemporary spaces for you to browse through our collections at your leisure.
                </p>
                

                <span>Read More</span>

            </div>
        </div>
    </div>
   </div>
    </>
  )
}

export default Home