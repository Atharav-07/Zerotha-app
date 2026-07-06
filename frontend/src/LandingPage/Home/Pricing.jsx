import React from 'react';


function Pricing() {
    return (  
        <>
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-4">
                    <h1 className='mt-5 mb-4 '>Unbeatable pricing</h1>

                    <p className='mt-5 mb-3'>
                        We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
                    </p>

                    <a href="" style={{ textDecoration: "none" }} className='fs-7'>
              See pricing {" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
                </div>
<div className="col-2"></div>
                <div className="col-6 p-3 text-center">
                 <div className="row mt-5 mx-5" >

                    <div className="col-6 border p-3">
                        <h1><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                        <p className='mt-5 mb-5'>  
                            Free equity delivery and
                <br />
                direct mutual funds</p>
                    </div>

                    <div className="col-6 border p-3">
                        <h1><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                        <p className='mt-5 mb-5'>Intraday and F&O</p>
                    </div>
                 </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Pricing;