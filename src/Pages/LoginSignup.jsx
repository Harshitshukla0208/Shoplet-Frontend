import React, { useState } from 'react'
import './css/LoginSignup.css'

const LoginSignup = () => {

    const [state, setState] = useState("Login");

    //connecting api for login signup

    //creating an empty form data for login/signup
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
    })

    //using this function our handler function will update the properties includes name, email, and password
    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const login = async() => {
        console.log("login function executed", formData)
    }
    const signup = async() => {
        console.log("signup function executed", formData)
    }


    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state === "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' /> : <></>}
                    <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
                    <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
                </div>
                <button onClick={() => {state === "Login" ? login() : signup()}}>Continue</button>
                {state === "Sign Up" 
                ? <p className='loginsignup-login'>Already have an account? <span onClick={() => setState("Login")}>Login here</span></p>
                : <p className='loginsignup-login'>Create an account <span onClick={() => setState("Sign Up")}>Click here</span></p>
            }
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup
