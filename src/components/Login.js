import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className='container'>
        <div className="center">
            <h1>Law Inforcement Login</h1>
      <form method="post">
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <div className='pass'>Forgot Password?</div>
        <input type="submit" value="Login" />
      </form>
        </div>
    </div>
    )
}

export default Login
