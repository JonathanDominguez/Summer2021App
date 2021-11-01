import React from 'react'
import './Login.css';

function Login() {
    return (
        <div className = "flex-box-main">
            <div className = "left-box">
                <p>login</p>
                <form action="/action_page.php">
                <label for="email">Email</label><br/>
                <input type="text" id="fname" name="fname" value="John"/><br/>
                <label for="password">Password</label><br/>
                <input type="text" id="lname" name="lname" value="Doe"/><br/><br/>
                <button>Forgot password?</button>
                <input type="submit" value="Submit"/>
                </form> 
            </div>
            <div className = "right-box">
                <p>Don't have an account?</p>
                <button>Register</button>
            </div>
        </div>
    )
}

export default Login