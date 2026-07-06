import React from 'react';

function RightSection({imageURL, productName, productDescribtion,TryDemo,LearnMore}) {
    return (  
        <>
        <div className="conatiner">
            <div className="row p-5 ">
                {/* Content/Info*/}
                <div className="col-6 mt-5 p-5">
                    <h1 className='mt-5'>{productName}</h1>

                    <p className='mt-3 text-muted'>{productDescribtion}</p>

                 <div>
                    <a href={TryDemo}>Try Demo {" "}<i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
            <a href={LearnMore} style={{ marginLeft: "50px" }}> Learn More {" "} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              </div>
                    </div> 

                {/*Image*/}
                <div className="col-6 ">
                    <img src={imageURL} alt="product-Image" />
                </div>
            </div>
        </div>
        
        </>
    );
}

export default RightSection;