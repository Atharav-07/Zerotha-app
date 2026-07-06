import React from 'react';

function TeamInfo() {
    return (  
        <>
        <h1 className='text-center mb-5 mt-5'>People</h1>

        <div className="container mt-5">
            <div className="row mt-5">
                <div className="col-6 mt-5 mb-5 p-6 text-center">
                 <img
            src="media/ProjectImages/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%"}}
          />
                <p className='fs-4 text-muted text-center mt-5'>Nitin Kamath</p>
                <p className='text-center text-muted'>Founder,CEO</p>
                </div>

                <div className="col-6 mt-5 mb-5 p-5  text-muted">
                    <p >
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>

                </div>


            </div>

        </div>
        
        </>
    );
}

export default TeamInfo;