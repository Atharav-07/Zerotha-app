import React from 'react';

function Hero() {
    return ( 
        <>

        <div className="conatiner text-center mt-5 mb-5 p-5 border-bottom">
            <h1>Technology</h1>
            <h4 className='text-muted'>Sleek, modern and intuitive trading platforms</h4>
            <p className='mb-5 p-3'>
                Check out our{" "}
                <a href="" style={{ textDecoration: "none" }}>
                  investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
            </p>
        </div>
        
        </>
     );
}

export default Hero;