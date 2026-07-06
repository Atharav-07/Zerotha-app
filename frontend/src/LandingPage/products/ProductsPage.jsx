import React from 'react';
import Hero from './Hero';
import Universe from './Universe';
import RightSection from './RightSection';
import LeftSection from './LeftSection';

function ProductsPage() {
    return ( 
        <>
        <Hero />

        <LeftSection 
        imageURL="media/ProjectImages/kite.png"
         productName="kite" 
         productDescribtion="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."  
         TryDemo=""    //User/Admin can give the specific link here
          LearnMore=""   
          GooglePlay="" 
          AppStore=""
        />

         <RightSection 
          imageURL="media/ProjectImages/console.png"
         productName="Console" 
         productDescribtion="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."  
        //User/Admin can give the specific link here
        TryDemo=""
        LearnMore=""   
         
         />

          <LeftSection
        imageURL="media/ProjectImages/coin.png"
        productName="Coin"
        productDescribtion="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        TryDemo=""
        LearnMore=""
        GooglePlay=""
        AppStore=""
      />
      <RightSection
        imageURL="media/ProjectImages/kiteconnect.png"
        productName="Kite Connect API"
        productDescribtion="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        TryDemo=""
        LearnMore=""
      />
      <LeftSection
        imageURL="media/ProjectImages/varsity.png"
        productName="Varsity mobile"
        productDescribtion="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        TryDemo=""
        LearnMore=""
        GooglePlay=""
        AppStore=""
      />
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the <a href="#">Zerodha.tech
        blog.</a>
      </p>

        <Universe />
        
        </>
     );
}

export default ProductsPage;