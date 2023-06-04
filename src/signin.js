import React from 'react'
import { Link } from 'react-router-dom'
import "./css/signin.css"

function signin() {
  return (
    <div className='container'>
    
    <form>
        <h2>Signin</h2>
        <label>Email</label>
        <input type='email'/><br/>
        <label>Password</label><br/>
        <input type='password'/>
        <button >Signin</button>
        <p>Not registed :<Link to="/"><a>SinUp Here</a></Link></p>
        
        
    </form>
   
    </div>
    
  )
}

export default signin