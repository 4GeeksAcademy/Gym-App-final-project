import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, Routes, Route, useNavigate } from "react-router-dom"


export const SingUp = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (store.newUserRes.msg == "success") {
            navigate('/')
        }
        setMsg(store.newUserRes)

    }, [store.newUserRes])

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [msg, setMsg] = useState("")

    const sendForm = () => {
        let emailInput = email
        emailInput = emailInput.toLocaleLowerCase()

        if (password.length < 6 || !emailInput.includes("@gmail.com") || emailInput.length < 11 || lastName.length < 3 || firstName.length < 3) {
            setMsg("the password or the email not meets the registration requirements.")

        } else {

            let newUser = {
                email: emailInput,
                password: password,
                first_name: firstName,
                last_name: lastName
            }

            actions.createNewUser(newUser)
            setEmail('')
            setPassword('')


        }
    }




    return (
        <div className="text-center mt-5">

            <Link to={'/'}>
                <h4>Home Page</h4>
            </Link>
            {
                <div>
                    <h1>Sing Up</h1>

                    {msg.length == 0 ? ""
                        : <div class="alert alert-danger" role="alert">{msg}</div>}

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} ></input>
                        <label for="floatingPassword">First Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} ></input>
                        <label for="floatingPassword">Last Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required ></input>
                        <label for="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} ></input>
                        <label for="floatingPassword">Password</label>
                    </div>

                    <button type="button" className="btn btn-success w-25 py-2 m-3" onClick={() => sendForm()}>Click me for sing up!!</button>

                    <div>
                        <h5>requirements for registration:</h5>
                        <p><b>password must be minimum length of 6</b></p>
                        <p><b>we only accept Gmail</b></p>
                    </div>
                </div>


            }
        </div>
    );
};
