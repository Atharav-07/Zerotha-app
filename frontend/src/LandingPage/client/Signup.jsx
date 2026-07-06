import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function Signup() {
//   use to navigate after verifying
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };
    return (
        <div className="form_container ">
      <h1 className="text-muted fs-3 mt-5 text-center">Open a free demat and trading account online</h1>
      <h3 className="mt-3 mb-5 fs-3 text-center">Start investing brokerage free and join a community of 1.6+ crore investors and traders</h3>
          <div className="container">
            <div className="row">
              <div className="col-6 mt-5 mb-5 p-5">
                <img src="media/ProjectImages/account_open.svg" alt="zerodha-img" className="" />
              </div>
              <div className="col-6 mt-5 mb-5 p-5">
                <h1 className="fs-3 border-bottom lh-lg" >Signup now</h1>
                <p className="text-muted">Or track your existing application</p>
              
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label htmlFor="email" className="mx-4" >Email:-</label> */}
          <input
            type="email"
            name="email"
            value={email}
            placeholder="    Enter your email"
            onChange={handleOnChange}
className="mt-4 form-control w-50 "
            style={{width:"12rem" , textWrap:"nowrap" , height:"3rem" , boxShadow: "10px 15px 5px rgba(102, 138, 237, 0.5)"}}      
          />
        </div>
        <div>
          {/* <label htmlFor="email" className="mx-2" >Username:-</label> */}
          <input
            type="text"
            name="username"
            value={username}
            placeholder="   Enter your username"
            onChange={handleOnChange}
className="mt-4 form-control w-50"
            style={{width:"12rem" , textWrap:"nowrap" , height:"3rem" , boxShadow: "10px 15px 5px rgba(102, 138, 237, 0.5)"}}
          />
        </div>
        <div>
          {/* <label htmlFor="password" className="mx-3" >Password:-</label> */}
          <input
            type="password"
            name="password"
            value={password}
            placeholder="   Enter your password"
            onChange={handleOnChange}
className="mt-4 form-control w-50"
 style={{width:"12rem" , textWrap:"nowrap" , height:"3rem" , boxShadow: "10px 15px 5px rgba(102, 138, 237, 0.5)"}}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4 mx-2 " style={{width:"17rem" , textWrap:"nowrap" , height:"3rem" , boxShadow: "10px 15px 5px rgba(149, 173, 240, 0.5)"}}>Submit</button>
        <p className="mt-3">
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>
        <p style={{fontSize:"0.8rem ", lineHeight:"4rem"}} className="text-muted border-bottom">By proceeding, you agree to the Zerodha <a href="/support">terms & privacy policy </a></p>
        <p style={{fontSize:"0.8rem"}}>Looking to open NRI account? <a href="@#">Click here</a></p>
      </form>

              </div>


            </div>


          </div>

      <ToastContainer />
    </div>
      );
}

export default Signup;