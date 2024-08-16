import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Register() {
    const [filled, setfilled] = useState(false)
    const [role, setrole] = useState('Employee')
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const navigate = useNavigate();

    function adduser() {


        setfilled(true)

        if (username.trim().length === 0) {
            setfilled(false)
            alert("Please enter a username.");
        } else
            if (email.trim().length === 0) {
                setfilled(false)
                alert("Please enter an email.");
            } else
                if (password.trim().length === 0) {
                    setfilled(false)
                    alert("Please enter a password.");
                } else
                    if (cpassword.trim().length === 0) {
                        setfilled(false)
                        alert("Please confirm the password.");
                    } else
                        if (password !== cpassword) {
                            setfilled(false)
                            alert("the passwords do not match.");
                        } else
                            if (!/^[a-zA-Z]+$/.test(username.trim())) {
                                setfilled(false);
                                alert("Please enter a valid first name.");

                            }
                            else {

                                let added = { "Username": username, "Role": role, "Password": password, "Email": email }
                                let check = { "Email": email, "Password": password }

                                fetch("http://localhost:4000/registerCheck", {
                                    method: "POST",
                                    body: JSON.stringify(check),
                                    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                                }).then((response) => { return response.json() })
                                    .then(function (data) {
                                        console.log(data);
                                        if (data === "Good to go") {
                                            console.log("registering");
                                            fetch("http://localhost:4000/addUser", {
                                                method: "POST",
                                                body: JSON.stringify(added),
                                                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                                            }).then((response) => { return response.json() })
                                            navigate("/");

                                        }
                                        else {
                                            console.log(data)
                                            alert(data);
                                        }
                                    })



                                setemail('')
                                setusername('')
                                setpassword('')
                            }
    }


    return (
        <div>
            <div className="container">
                <div className="center">
                    <h1>Create Account</h1>
                    <form action="">
                        <div className="txt_field">
                            <input type="text" name="text" required value={username} onChange={(e) => setusername(e.target.value)} />
                            <span></span>
                            <label>Username</label>
                        </div>
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
                        <div className="txt_field">
                            <input type="password" name="password" required value={cpassword} onChange={(e) => setcpassword(e.target.value)} />
                            <span></span>
                            <label>Confirm Password</label>
                        </div>
                        <button className="but" onClick={adduser} >Register</button>
                        <div className="signup_link">
                            Already a member ? <Link to='/'>Sign in</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;