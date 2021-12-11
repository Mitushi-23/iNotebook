import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = (props) => {
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  let history = useHistory();

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setcredentials({ email: "", password: "" });

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if(json.success)
    {
      // Redirect
      localStorage.setItem('token',json.authtoken);
      props.showAlert(": Logged in successfully","success");
      history.push("/home")
    }
    else
    {
      props.showAlert(": Invalid Credential","danger");
    }
  };
  return (
    <div className="container">
      <h2 className="text-center my-3">Login to continue to iNotebook</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3 my-5">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={credentials.email}
          aria-describedby="emailHelp"
          onChange={onChange}
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
          name="password"
          value={credentials.password}
          onChange={onChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    <Link className="btn btn-primary mx-2" to="/signup" role="button">SignUp</Link>
    </form>
    </div>
  );
};

export default Login;
