import React from 'react'
import { useState } from 'react'
import axios from "axios"

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password:"",
  });
  const handelOnChange = (e) => {
    const { name } = e.target;
    setUserData({...userData, [name]:e.target.value})
  }

  const registerUser = async () => {
    const res = await axios.post("https://pinterest-backend8.herokuapp.com/register", userData)
    console.log(res)
  }

  return (
    <div>
      <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input name="email" onChange={handelOnChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input name='password' onChange={handelOnChange} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password"/>
      
    </div>
    <div className="flex items-center justify-between">
            <button onClick={(e) => {
              e.preventDefault()
              registerUser();
              console.log(userData)
              console.log("sign in")
            }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/">
        Forgot Password?
      </a>
    </div>
  </form>
  
</div>
    </div>
  )
}

export default Login
