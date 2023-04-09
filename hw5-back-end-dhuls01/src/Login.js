import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';


 const Login=()=> {
  return (
    <div className='Login'>
      <form onSubmit className="login-form">
        
         
            <input
             
              placeholder="Username"
            />
          
        
       
          
            <input
              
              type="password"
              placeholder="Password"
            />
          
        
          
          <button
            
            className="login-form-button"
          >
            Log in
          </button>
          Or  <Link to="/register">register now!</Link>
        
      </form>
    </div>
  )
}
export default Login