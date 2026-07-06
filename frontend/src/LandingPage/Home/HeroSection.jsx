import React from 'react';
import { Link } from 'react-router-dom';


function HeroSection() {
    return ( 
        <div className="container p-5">
   <div className="row text-center">
        <img src='media/ProjectImages/homeHero.png' className='mb-5' alt='HeroImage'></img>
        <h1 mt-5>Invest in everyThing</h1>
        <p>Online platform to invest stocks , derivatives , mutual funds and  more</p>

<Link to={"/signup"}>
        <button type="button" className="btn btn-primary p-2 fs-5 mb-5"   style={{width :"20%" , margin :"0 auto" , boxShadow: "10px 15px 5px rgba(149, 173, 240, 0.5)"}} >SignUp Now</button>
        </Link>
   </div>

        </div>
     );
}

export default HeroSection;