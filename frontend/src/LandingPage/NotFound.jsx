import React from 'react';
import { Link } from 'react-router-dom';


function NotFound() {
    return (  
        <div className="container p-5">
   <div className="row text-center">
    <div className="col-6"> <img src='media/ProjectImages/PageNotFoundImage.svg' className='mb-5' style={{width:"80%"}}></img></div>
    <div className="col-6">
        <h1 mt-5>Open a Zerodha account Now.</h1>
        <p className='text-muted mt-3 mb-4'>
            Sorry the page your are looking for is not exisit.
          </p>
          <Link to={"/"}>
          <button className='btn btn-primary text-center' style={{borderRadius:"1.5rem" , width:"12rem" , textWrap:"nowrap" , height:"3rem" , boxShadow: "10px 15px 5px rgba(149, 173, 240, 0.5)"}}>Go To Home</button>
          </Link>
          </div>
        </div>
        </div>
    );
}

export default NotFound;