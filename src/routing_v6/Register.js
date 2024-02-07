import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const handleChange = (e) => {

  }
  const handleSubmit = () =>{

  }
  return (
    <div>
      <h1>Register</h1>
      <h3>Create your company account</h3>
      <form onSubmit={()=>handleSubmit}>
        <input type="text" placeholder='full name*' onChange={(e)=> handleChange} required /> <br />
        <input type="text" placeholder='username name*' onChange={(e)=> handleChange} required /> <br />
        <select name="" id="" onChange={(e)=> handleChange}>
          <option value="Select Country*"></option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Japan">Japan</option>
        </select> <br />
        <input type="number" placeholder='Mobile no*' onChange={(e)=> handleChange}/> <br />
        <input type="email" placeholder='Email Id*' onChange={(e)=> handleChange}/> <br />
        <input type="password" placeholder='password*' onChange={(e)=> handleChange}/> <br />
        <input type="text" placeholder='Referal Id*' onChange={(e)=> handleChange}/> <br />
        <input type="radio" value="male" name='gender' />
        <input type="radio" value="female" name='gender' /> <br />
        <input type="checkbox" value="Java"  /> <br />
        <input type="checkbox" value="python"  /> <br />
        <input type="checkbox" value="react"  /> <br />
        <button type='submit'>Register</button>
      </form>
      <p>have an account? 
      <Link to="/login">Sign in </Link>
      </p>
    </div>
  )
}

export default Register