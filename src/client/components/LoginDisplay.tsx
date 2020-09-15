import * as React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ColdNavbar from '../components/ColdNavbar';
import apiService from '../utils/api-service';
import { ILogin } from '../utils/interfaces';


const LoginDisplay: React.FC<LoginDisplayProps> = ({login}) => {

    return (
        <main className="container">
            <ColdNavbar />
            <section className="row justify-content-center mt-3">


                <form className="form-group p-3 border-primary rounded-lg-success"it>

                    <div className="shadow p-4 mb-4 bg-white">
                        <h3 className="text-center"> Login </h3>

                        <label>Email</label>
                        <input value={login.email} onChange={e => setEmail(e.target.value)} className="form-control my-1" />
                        <label>Password</label>
                        <input value={login.password} onChange={e => setPassword(e.target.value)} className="form-control my-1" />

                        <button onClick={login} className="btn btn-primary btn-block w-30 mx-auto mt-3">Submit</button>

                    </div>
                </form>
            </section>
        </main>
    );
}


interface LoginProps {
    login: ILogin;

 }

export default LoginDisplay;