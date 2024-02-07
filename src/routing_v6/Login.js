import React, { useState } from 'react'
import { Navigate, useNavigate , Link } from 'react-router-dom'

function Login() {
  // const history = useHistory()
  const navigate = useNavigate()
  const initData = {
    username : "",
    password  : ""
  }
  const [signData, setSignData] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('btn click')
    console.log('fetch')
      await fetch('https://lobster-app-ddwng.ondigitalocean.app/user/login', 
      {
          method: "POST",
          headers : {
            "api_key" : "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH",
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            "login_id":"developer@gmail.com",
            "password":"123123"
          })
        }
      )
      .then((res)=> res.json())
      .then((data)=> {
        console.log(data)
        navigate('/dashboard', {state: data})
      })
  }
  return (
    <div>
      <h1>Login</h1>
      <h3>Enter your Account login details</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='username or email' onChange={(e)=> setSignData({...signData, username : e.target.value})}/><br />
        <input type="password" placeholder='password'  onChange={(e)=> setSignData({...signData, password : e.target.value})} /> <br />
        <button type='submit'>Sign in</button>
        <p>Don't you have an account? 
        <Link to="/register">Sign up</Link>
        </p>
      </form>
    </div>
  )
}

export default Login