import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import HomePage from './LandingPage/Home/HomePage.jsx'
import  PricingPage from './LandingPage/pricing/PricingPage.jsx'
import  AboutPage from './LandingPage/about/AboutPage.jsx'
import  ProductsPage from './LandingPage/products/ProductsPage.jsx'
import  SupportPage from './LandingPage/support/SupportPage.jsx'
import Navbar from './LandingPage/Navbar.jsx'
import Footer from './LandingPage/Footer.jsx'
import NotFound from './LandingPage/NotFound.jsx'
import  'react-toastify/dist/ReactToastify.css'
import { Login, Signup } from "./LandingPage/client";
import Home from "./LandingPage/client/Home";



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar />
  <Routes>
   <Route  path='/' element={<HomePage/>} />
   <Route  path='/about' element={<AboutPage/>} />
   <Route  path='/pricing' element={<PricingPage/>} />
   <Route  path='/product' element={<ProductsPage/>} />
   <Route  path='/support' element={<SupportPage/>} />
   <Route  path='*' element={<NotFound/>} />
   <Route path="/home" element={<Home />} />
   <Route path="/login" element={<Login />} />
   <Route path="/signup" element={<Signup />} />

   
  </Routes>
<Footer />

  
  </BrowserRouter>
)
