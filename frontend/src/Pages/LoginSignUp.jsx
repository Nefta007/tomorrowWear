import React  from "react";
import './CSS/LoginSignUp.css';

const LoginSignUp = () => {
    return (
        <div className="login-signup">
            <div className="login-signup-container">
                <h1>Sign Up</h1>
                <div className="login-signup-fields">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Submit</button>
                <p className="login-signup-login">Already have an account? <span>Login Here</span></p>
                <div className="login-signup-agree">
                    <input type="checkbox" name="" id='' />
                    <p>By continuing, I agree to the terms of use and privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignUp;