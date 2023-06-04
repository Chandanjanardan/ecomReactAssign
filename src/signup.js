import React from 'react'
import { Link } from 'react-router-dom'

function signup() {
  return (
    <div className='container'>
    
    <form>
        <h2>SignUp</h2>
        <label>Email</label>
        <input type='email'/><br/>
        <label>Password</label><br/>
        <input type='password'/>
        <button >SignUp</button>

        <p>Already have account:<Link to="/signin"><a>Sin In Here</a></Link></p>
        <p>To contact :<Link to="/contact">Contact Us</Link></p>
        
        
    </form>
   
    </div>
  )
}

export default signup