import React from 'react'
import "./loginForm.css"
const LoginForm = () => {
    return (
        <div id={"container"}>
            <h2>Login Form</h2>
            <hr/>
            <label> Enter your Username: </label>
            <input type='text' placeholder='Username' />
            <br/>
            <label> Enter your Password: </label>
            <input type='password' placeholder='Password' />
            <br/>
            <div className="submit">
            <button type='submit'>Login</button>
            </div>
        </div>
    )
}
export default LoginForm
