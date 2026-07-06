import React from 'react';

function Education() {
    return (  
        <>
        <div className="conatiner mt-5 mb-5">
            <div className="row ">
                <div className="col-6">
                    <img src="media/ProjectImages/education.svg" alt="Educations Image"className='mb-5' style={{ width: "70%" }} />
                </div>
                <div className="col-6">
                    <h1 className='mt-5 mb-3 fs-2'>Free and open market education</h1>

                    <p className='mb-3 fs-5 text-muted'>
                        Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
            </p>

                    <a href="" style={{textDecoration:"none"}}>
                        Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>

                    <p className='mb-3 mt-5 fs-5 text-muted'>
                 TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
                    </p>

                    <a href="" style={{textDecoration:"none"}} className='mb-5' >
                TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>

                </div>
            </div>
  
        </div>
        </>
    );
}

export default Education;