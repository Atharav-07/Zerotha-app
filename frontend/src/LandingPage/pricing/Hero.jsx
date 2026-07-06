import React from 'react';

function Hero() {
    return ( 
        <>
        <div className='text-center mt-5 p-5 mb-5 border-bottom'> 
            <h1>Pricing</h1>
            <p className='text-muted fs-5 mt-4'>Free equity investments and flat ₹20 traday and F&O trades</p>
        </div>
        
        <div className="container mt-5 mb-5 border-bottom">
            <div className="row">

            <div className="col-4 p-5">
                <img src="media/ProjectImages/pricingEquity.svg" alt="priceImage" />
                <h1 className='fs-4'>Free equity delivery</h1>
                <p className='text-muted mt-4'>
                    All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
                </p>
            </div>

            <div className="col-4 p-5">
                <img src="media/ProjectImages/intradayTrades.svg" alt="priceImage" />
                <h1 className='fs-4'>Intraday and F&O trades</h1>
                <p className='text-muted mt-4'>
                    Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
                </p>
            </div>

            <div className="col-4 p-5">
                <img src="media/ProjectImages/pricingEquity.svg" alt="priceImage" />
                <h1 className='fs-4'>Free direct MF</h1>
                <p className='text-muted mt-4'>
                   All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
                </p>
            </div>

            </div>

        </div>
        
        </>
     );
}

export default Hero;