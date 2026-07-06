import React from 'react';

function Hero() {
    return ( 
        <>
        <div  style={{width:"100%", backgroundColor:"#0d6efd" , color:"white"}}>
            <div className="row  p-5">
                <div className="col-8 p-4">
                    <h4 style={{marginBottom:"2rem"}}>Support Portal</h4>
                    <h1 className='mt-5 mb-3'> Search for an answer or browse help topics to 
                        create a ticket
                        </h1>
                     <input placeholder="      Eg. how do I activate F&O" style={{width:"40rem", height:"4rem", marginTop:"1.5rem" , marginBottom:"1rem"  , boxShadow: "10px 15px 5px rgba(0, 0, 0, 0.5)" , border:"none" , borderRadius:"1.4rem"}} />
          <br />
          <a href="" className='mx-2 text-light'>Track account opening</a>
          <a href="" className='mx-2 text-light'>Track segment activation</a>

          <a href="" className='mx-2 text-light'>Intraday margins</a>
          <a href="" className='mx-2 text-light'>Kite user manual</a>
                </div>
                <div className="col-4 p-4">
                   <a href="" className='text-light'> <h5 style={{marginBottom:"2rem", textAlign:"-webkit-right"}}>Track-Tickets</h5> </a>

                    <h1 className='mb-3'>Featured</h1>
                    <ol>
                        <li className='mb-3'>
                     <a href="" className='text-light'>Current Takeovers and Delisting - January 2024</a>
                      </li>
                    <li>
                        <a href="" className='text-light'>Latest Intraday leverages - MIS & CO</a>
                       </li>
                    </ol>

                </div>
            </div>
        </div>
        </>
     );
}

export default Hero;