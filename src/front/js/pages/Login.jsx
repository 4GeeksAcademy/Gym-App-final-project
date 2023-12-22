import React from 'react'
import style from '../../styles/Login.module.css'

export const Login = () => {
    return (
        <div className='container-fluid '>
            <div className='row'>
                <div className='col-md-2 m-auto mt-5 p-5 border border-light-subtle rounded'>
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
                </div>
            </div>
        </div>
    )
}
