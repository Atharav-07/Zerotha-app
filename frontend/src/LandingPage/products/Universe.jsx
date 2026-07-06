import React from 'react';
import { Link } from 'react-router-dom';
function Universe() {
    return ( 
        <>
        <div className='text-center border-top mb-5'>
        <h1 className='mt-5 '>The Zerodha Universe</h1>
        <p className='mb-5 p-4 text-muted'>
        Extend your trading and investment experience even further with our
        partner platforms
        </p>

        <div className="container mb-5 p-5">
            <div className="row">
                <div className="col-4 p-3 mt-5">
          <img src="media/ProjectImages/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/ProjectImages/zerodhaFundhouse.png"  style={{width:"40%"}}/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/ProjectImages/streakLogo.png" style={{width:"40%"}}/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/ProjectImages/sensibullLogo.svg" style={{width:"40%"}} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/ProjectImages/goldenpiLogo.png" style={{width:"40%"}} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/ProjectImages/dittoLogo.png" style={{width:"40%"}}/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>

        <div className='mt-5'>
            <Link class="nav-link active" aria-current="page" to={"/signup"}>
            <button className='btn btn-primary' style={{width :"20%" , margin :"0 auto" , boxShadow: "10px 15px 5px rgba(149, 173, 240, 0.5)"}}>SignUp Now</button>
            </Link>
        </div>

            </div>



        </div>

        </div>

        
        
        </>
     );
}

export default Universe;