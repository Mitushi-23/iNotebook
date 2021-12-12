import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/Signup.css"
// import "../css/Login.css";


const SignUp = (props) => {

    const [credentials, setcredentials] = useState({ name:"",email: "", password: "",cpassword: "" });
    let history = useHistory();
  
    const onChange = (e) => {
      setcredentials({ ...credentials, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setcredentials({ name:"",email: "", password: "",cpassword: "" });

       const {name, email, password} = credentials ;

      const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, password}),
      });
      const json = await response.json();
      console.log(json);
      if(json.success)
    {
      // Redirect
      localStorage.setItem('token',json.authtoken);
      props.showAlert(": Account created successfully","success");
      history.push("/home")
    }
    else
    {
      props.showAlert(": Sorry the user already exist","danger");
    }
    };

  return (
    <>
    <div className="container">
      <div className="contain">
      {/* <Link className="btn btn-primary mx-2" to="/" role="button">Login</Link> */}
      <h2 className="text-center my-3">Sign Up to continue to iNotebook</h2>
      <Link class="fas fa-sign-in-alt" 
      id="sign"
         data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Login" to="/"></Link>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="mb-3 my-5">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={onChange}
            name="name"
            aria-describedby="emailHelp"
            minLength={3} required

          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={onChange}
            name="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={onChange}
            name="password"
            minLength={5} required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            onChange={onChange}
            name="cpassword"
            minLength={5} required
          />
        </div>
    
        <Link type="submit" className="btn signUp">
          SignUp
        </Link>
      </form>

    </div>
    </>
  );
};

export default SignUp;
