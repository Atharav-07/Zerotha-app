import React from 'react';
import Navbar from '../Navbar'
import Footer from '../Footer'
import OpenAccounts from '../OpenAccounts'
import Awards from './Awards';
import HeroSection from './HeroSection';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';


function HomePage() {
    return ( 
       <>
       <HeroSection/>
       <Awards />
       <Stats />
       <Pricing />
       <Education />
       <OpenAccounts />
        </>
       
     );
}

export default HomePage;