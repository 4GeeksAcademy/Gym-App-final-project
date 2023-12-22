import React from 'react'
import '../../styles/Login.module.css'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3 m-auto mt-5 p-5 border border-danger-subtle'>
                    <form>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                            <label htmlFor="email">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="Password" placeholder="Password" />
                            <label htmlFor="Password">Password</label>
                        </div>
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </form>
                    <div className='m-3'>
                        <Link className='text-danger' to="/signup">Enter here to register!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
