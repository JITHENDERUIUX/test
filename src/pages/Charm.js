import React from 'react'
import "../componemts/SECOND.css"
import { FaLocationDot } from "react-icons/fa6";


function Charm() {
  return (
    <>
    <p className='af'>HOME / JEWELLERY / <span>WATCH CHARM JEWELLERY</span> </p>
    <img className='mx-2' width={1240} src={require("../images/charm images/1st.webp")} alt="" />
    <h4 className='af1'>JEWELLERY <span>| 27 Designs</span></h4>
    <div className=" af2">
        <div className="af3">
         <button className='btn ram '>ALL</button>
         <button className='btn ram1'>TRY AT HOME</button>
         <button className='btn ram1'>DESIGNS IN STORE</button>

        </div>
       <div className="af4">
       
       <button className='btn text-white ram  '><FaLocationDot /> PINCODE</button>
       <select name="" id="">
        <option value="">POPULAR</option>
        <option value="">  WHAT'S NEW</option>
        <option value="">POPULAR</option>
        <option value="">PRICE LOW TO HIGH</option>
        <option value="">PRICE HIGH TO LOW</option>
        <option value="">DISCOUNT
</option>
        

       </select>

       </div>
    </div>

    <p className='af5'>FILTERED <span> Watch Charm</span> </p>



    </>
  )
}

export default Charm