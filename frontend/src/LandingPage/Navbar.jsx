import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
           <>
           <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom ">
  <div class="container-fluid p-3 "> 
    <Link class="navbar-brand" to={"/"}>
    <img src="media/ProjectImages/logo.svg" alt="Logo" style={{height:"1.5rem", marginLeft:"8rem"}} />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </Link>

    <div  id="navbarNav" style={{marginRight:"5rem"}}>         {/* class="collapse navbar-collapse"  == Use to join together*/} 
      <ul class="navbar-nav">
        <li class="nav-item mx-3">
          <Link class="nav-link active" aria-current="page" to={"/signup"}>Signup</Link>
        </li>
        <li class="nav-item mx-3">
          <Link class="nav-link active" to={"/about"}>About</Link>
        </li>
        <li class="nav-item mx-3">
          <Link class="nav-link active" to={"/product"}>Products</Link>
        </li>
        <li class="nav-item mx-3">
          <Link class="nav-link active " aria-disabled="true" to={"/pricing"}>Pricing</Link>
        </li>
        <li class="nav-item mx-4">
          <Link class="nav-link active" aria-disabled="true" to={"/support"}>Support</Link>
        </li>
        <li class="nav-item mx-3">
          <Link class="nav-link active" aria-current="page" to={"/login"}>Login</Link>
        </li>
        <li class="nav-item mx-3">
          <Link class="nav-link active" aria-current="page" to={"/home"}>Home</Link>
        </li>
        <li class="nav-item  mt-1.9">
          <Link class="nav-link active " aria-disabled="true" to={"/"}> <i class="fa-solid fa-bars"></i> </Link>
        </li>
      </ul>
    </div>

    {/* Conatiner  */}
  </div>
</nav>
           </>
     );
}

export default Navbar;