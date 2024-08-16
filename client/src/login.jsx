import React from 'react';
import "./login.css"
import { Link, useNavigate, redirect } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Login(props) {
    const [filled, setfilled] = useState(false)
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate();

    function loginuser() {

        setfilled(true)

        if (email.trim().length === 0) {
            setfilled(false)
            alert("Please enter an email.");
            return;
        } else
            if (password.trim().length === 0) {
                setfilled(false)
                alert("Please enter a password.");
                return;
            }

        {

            let sign = { "Password": password, "Email": email }
            fetch("http://localhost:4000/loginUser", {
                method: "POST",
                body: JSON.stringify(sign),
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            }).then((response) => { return response.json() })
                .then(function (data) {
                    console.log("data");
                    if (data === "Success") {
                        console.log("going home");
                        navigate("/home");
                    }
                    else {
                        console.log(data)
                        alert("No such account exists");
                    }
                })


            setemail('')
            setpassword('')

        }

    }

    return (
        <div>
            <div className="container">
                <div className="center">
                    <h1>Login</h1>
                    <form action="">
                        <div className="txt_field">
                            <input type="text" name="text" required value={email} onChange={(e) => setemail(e.target.value)} />
                            <span></span>
                            <label>Email</label>
                        </div>
                        <div className="txt_field">
                            <input type="password" name="password" required value={password} onChange={(e) => setpassword(e.target.value)} />
                            <span></span>
                            <label>Password</label>
                        </div>
                        <button className="but" onClick={loginuser} >Log in</button>
                        <div className="signup_link">
                            Not a Member ? <Link to='/register'>Create Account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;