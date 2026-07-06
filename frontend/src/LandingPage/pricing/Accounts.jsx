import React from 'react';
import { Link } from 'react-router-dom';

function Accounts() {
    return (  
        <>
        <div className="container p-5 ">
   <div className="row text-center">
        <h1 mt-5>Open a Zerodha account Now.</h1>
        <p className='text-muted mt-3 mb-4'>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
          </p>

     <Link to={"/signup"}>
        <button type="button" className="btn btn-primary p-2 fs-5 mb-5"   style={{width :"20%" , margin :"0 auto" , boxShadow: "10px 15px 5px rgba(149, 173, 240, 0.5)"}} >SignUp Now</button>
        </Link> 

        </div>

        </div>
        
        </>
    );
}

export default Accounts;