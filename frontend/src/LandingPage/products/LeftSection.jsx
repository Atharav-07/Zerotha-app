import React from 'react';

function LeftSection({imageURL, productName, productDescribtion,TryDemo,LearnMore,GooglePlay,AppStore}) {
    return ( 
        <>
        <div className="conatiner mt-5 ">
            <div className="row">
                {/* Image */}
                <div className="col-6 ">
                    <img src={imageURL} alt="ProductImage"  />
                    
                    </div>     

                    {/*Content/Info */}
                <div className="col-6 p-5 mt-3 ">

                     <h1>{productName}</h1>
                    <p className='text-muted'>{productDescribtion}</p>

                  <div className='mt-3'>
            <a href={TryDemo} >Try Demo {" "}  <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
            <a href={LearnMore} style={{ marginLeft: "50px" }}> Learn More {" "} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className='mt-3'> 
            <a href={GooglePlay} style={{boxShadow: "10px 15px 5px rgba(0, 0, 0, 0.5)"}}><img src="media/ProjectImages/googlePlayBadge.svg" alt="GooglePlay" /></a>
            <a href={AppStore} style={{marginLeft:"2rem" , boxShadow: "10px 15px 5px rgba(0, 0, 0, 0.5)"}}><img src="media/ProjectImages/appstoreBadge.svg" alt="appStore" /></a>
            </div>



                </div>
            </div>
        </div>
        
        
        </>
     );
}

export default LeftSection;