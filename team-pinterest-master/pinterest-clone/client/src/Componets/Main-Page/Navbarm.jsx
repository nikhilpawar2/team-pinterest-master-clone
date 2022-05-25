import "./Navbarm.css";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import axios from "axios";

function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function openForm1() {
  document.getElementById("myForm1").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function closeForm1() {
  document.getElementById("myForm1").style.display = "none";
}

// function login(e) {

//   e.preventDefault();

//   let myform1 = document.getElementById("myForm1");

//   let email = myform1.email.value;
//   let password = myform1.password.value;
//   let age = myform1.age.value;

//   if (localStorage.getItem("users") === null) {
//       localStorage.setItem("users", JSON.stringify([]));
//   }

//   let user = {
//       email,
//       password,
//       age,
//   };

//   let arr = JSON.parse(localStorage.getItem("users"));
//   arr.push(user);
//   localStorage.setItem("users", JSON.stringify(arr));

// }

export const Navbarm = () => {
 
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handelOnChange = (e) => {
    const { name } = e.target;
    setUserData({ ...userData, [name]: e.target.value });
  };
  // https://pinterest-backend8.herokuapp.com/register

  const registerUser = async () => {
    console.log(userData);
    try {
      const res = await axios.post(
        "https://pinterest-backend8.herokuapp.com/register",
        userData
      );
      res = await res.Json();
      // console.log(res);

      // console.log(res.data.user._id);
      // console.log(res.data.user.email);

      if (res.data.user._id) {
        // localStorage.setItem("userdetails", JSON.stringify(res.data.user));
        alert("Sign Up succesfull");
        closeForm1();
      }
      //  console.log(JSON.parse(localStorage.getItem("userdetails")));
    } catch (e) {
      alert("Email address not available! Use Another Email Address");
    }
  };

  const loginUser = async () => {
    console.log(userData);
    try {
      const res = await axios.post(
        "https://pinterest-backend8.herokuapp.com/login",
        userData
      );
      
      console.log(res);
      if (res.data.user._id) {
        localStorage.setItem("userdetails", JSON.stringify(res.data.user));

        alert("LogIn succesfull");
        closeForm();
        navigate("/")
      }
      //  console.log(JSON.parse(localStorage.getItem("userdetails")));
    } catch (e) {
      alert("Invalid User Data");
    }
  };

  return (
    <div className="nav">
      <img className="pic" src="plogo.png" alt="img"></img>
      <div className="abp">
        <Link to="/About" className="link">
          About
        </Link>
        <Link to="/bus" className="link">
          Business
        </Link>
        <Link to="/blo" className="link">
          Blog
        </Link>
      </div>

      <div className="logina">
        <button
          className="login"
          onClick={() => {
            openForm();
          }}
        >
          Login
        </button>

        <button
          className="Signup"
          onClick={() => {
            openForm1();
          }}
        >
          Signup
        </button>
      </div>
      <div>
        <div className="form-popup" id="myForm1">
          <form className="form-container">
            <img
              className="logoimg1"
              src="data:image/png;base64,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"
            alt="img"></img>
            <h1 className="headingsignup">Welcome to Pinterest</h1>
            <h2 className="headingsignup1">Find new ideas to try</h2>

            <input
              name="email"
              onChange={handelOnChange}
              className="inputbox"
              id="username"
              type="text"
              placeholder="Username"
            />
            <input
              name="password"
              onChange={handelOnChange}
              className="inputbox"
              id="password"
              placeholder="Password"
            />
            <input
              name="age"
              onChange={handelOnChange}
              className="inputbox"
              id="age"
              placeholder="Age"
            />

            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                registerUser();
                // console.log(userData)
                // console.log("sign in")
              }}
              type="submit"
            >
              Sign In
            </button>

            <button
              type="button"
              className="btn cancel"
              onClick={() => {
                closeForm1();
              }}
            >
              Close
            </button>
          </form>
        </div>

        <div className="form-popup" id="myForm">
          <form className="form-container">
            <img
              alt=""
              className="logoimg1"
              src="data:image/png;base64,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"
            ></img>
            <h1 className="headinglogin1">Welcome back</h1>
            <input
              name="email"
              onChange={handelOnChange}
              className="inputbox"
              id="loginusername"
              type="text"
              placeholder="Username"
            />
            <input
              name="password"
              onChange={handelOnChange}
              className="inputbox"
              id="loginpassword"
              placeholder="password"
            />

            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                loginUser();
                // console.log(userData)
                // console.log("sign in")
              }}
              type="submit"
            >
              Login
            </button>

            <button
              type="button"
              className="btn cancel"
              onClick={() => {
                closeForm();
              }}
            >
              Close
            </button>

            <hr className="hr"></hr>

            <h1 className="loginc">
              {" "}
              Not you? Log in with a different account
            </h1>
            <h1 className="loginc1"> Need an account? Sign up now</h1>
          </form>
        </div>
      </div>
    </div>
  );
};
