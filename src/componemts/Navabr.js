import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import "../componemts/style.css"
import { Modal } from 'bootstrap';

import { Link } from "react-router-dom";


export default function Navabr()
{
    return(
        <>
        <div className="main">
            <p className="main1">
            <FaPhoneAlt />
            18004190066
            </p>
            <p className="main1">
            |
            </p>
             <p className="main1">
            Try at Home Cart
            </p> 
            <p className="main1">
            |
            </p> <p className="main1">
            Login
            </p>
            <p className="main1">
            |
            </p> <p className="main1">
            Signup
            </p>



        </div>
        <div className="ab">
           <img className="mr" src={require("../images/logo.webp")} width={290}/>
           <div>
            <input type="text" placeholder="Search for Jewellery"/>
            <span className="abb"><CiSearch size={30} className="text-white mx-3"/></span>
           </div>
        <div className="ab">
        <Link to="/recently" className="nav-link">

           <div className="ab1">

           <IoTimerOutline  size={30}/>
           <p> Recently Viewed</p>
           
            </div>
            </Link>
            <div>

            <p className="main1">
            |
            </p>
           </div>
           <Link to="/location" className="nav-link">

            <div className="ab1">


            <FaMapLocationDot  size={25} />

            <p>Locate Our Store</p>
           </div></Link>
           <div>

           <p className="main1">
            |
            </p>
           </div>
          

           <div className="ab1">

           <FaRegHeart  size={28} />
           
           
{/* <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
<FaRegHeart  size={28} />
</button> */}

{/* 
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
           </div>
           <div>


           <p className="main1">
            |
            </p>
            </div>
            <div className="ab1">
           
            <CiShoppingCart  size={30} />

            </div>
           
            </div>
            </div>

        <div className="container-fluid ac">
            <p>10+1 MONTHLY PLAN</p>
            <div>      
               <p className="ab4">WATCH JEWELLERY
               <div className="ab3">
        <Link to="/charm" className="nav-link">

                <p className="charm" value="">CHARM</p></Link>
                <hr></hr>
                <p value="">BAND</p>
                <hr></hr>

                <p value="">PIN</p></div>
               </p>
                  
                </div>
                <p>RINGS</p>
                <p>EARRINGS</p>

                <p>PENDANTS</p>

                <p>SOLITAIRES</p>
                <p>ALL JEWELLERY</p>
                <p>GIFTS</p>
                <p>COINS</p>
                <p className="mar">OFFERS</p>
        </div>


   

       
        
        
        
        
        
        </>
    )
}