import React from "react";
import './CSS/LoginSignUp.css';
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="login-signup">
            <div className="login-signup-container">
                <h1>Login</h1>
                
                <div className="login-signup-fields">
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Log In</button>
                
                <p className="login-signup-login">Don't have an account? </p>
                
                <Link to="/signup">Sign Up Here</Link>
                <div className="login-signup-agree">
                    <input type="checkbox" name="" id='' />
                    <p>By continuing, I agree to the terms of use and privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default Login;