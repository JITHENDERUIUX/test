import React from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
 

function Pagenotfound() {
    let cherry = useParams();
    console.log(cherry);
  return (
    <>

    <h3 className='text-center mt-5'>OOPS! <span className='mx-3'> {cherry.jithu}</span> PAGE IS NOT FOUND</h3>

    <h3 className='text-center mt-5'> ARE YOU LOOKING FOR 
        <Link to="/home" className=''>
         <span className='px-3'>HOME PAGE</span></Link>
    </h3>
    <div className="text-center">
    <img className='' width={600} src={require("../images/page.jpg")} alt="" />
    
    </div>
    
    
    
    </>
  )
}

export default Pagenotfound