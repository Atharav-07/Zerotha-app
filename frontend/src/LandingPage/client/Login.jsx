import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
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
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
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
    });
  };
    return ( 
        <>
        <div className="form_container text-center mt-5 p-5">
          <div className="div h-50 m-5">
        <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label htmlFor="email" className="form-label">Email</label> */}
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            className="mt-4 form-control w-25 mx-auto"
            style={{width:"12rem" , textWrap:"nowrap" , height:"3rem" , boxShadow: "10px 15px 5px rgba(102, 138, 237, 0.5)"}}
          />
        </div>
        <div>
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            className="mt-4 form-control w-25 mx-auto"
            style={{width:"12rem" , textWrap:"nowrap" , height:"3rem" , boxShadow: "10px 15px 5px rgba(102, 138, 237, 0.5)"}}
          />
        </div>

        <p style={{marginRight:"12rem"}} className="mt-3"><a href="">Forgot password?</a></p>

        <button type="submit" className="mt-4 btn btn-primary mt-4" style={{width:"12rem" , textWrap:"nowrap" , height:"3rem" , boxShadow: "10px 15px 5px rgba(23, 76, 222, 0.5)"}}>Submit</button>
        <p className="mt-4">
          Already have an account? <Link to={"/signup"}>Signup</Link>
        </p>
      </form>
      <ToastContainer />
      </div>
    </div>
        </>
     );
}


export default Login;