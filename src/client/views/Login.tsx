import * as React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import LoginDisplay from '../components/LoginDisplay';
import ColdStateNavbar from '../components/ColdStateNavbar';
import apiService from '../utils/api-service';
import Navbar from '../components/Navbar';
import Background from '../components/Background';


const Login: React.FC<LoginProps> = (props) => {

    const history = useHistory();

    const location = useLocation<{ msg: string }>();


    const [email, setEmail] = useState<string>('paula@test.com');
    const [password, setPassword] = useState<string>('abc');

    const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const token = await apiService('/auth/login', 'POST', { email, password });

        localStorage.setItem('token', token);
        history.push('/');
    }


    return (
        <main>


            <Navbar />
            <Background />

            <section className="row justify-content-center mt-3">

                <form className="form-group p-3 border-primary rounded-lg-success">

                    <div className="shadow p-4 mb-4 bg-white">
                        <h3 className="text-center"> Login </h3>

                        <label>Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} className="form-control my-1" />
                        <label>Password</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} className="form-control my-1" />

                        <button onClick={login} className="btn btn-primary btn-block w-30 mx-auto mt-3">Submit</button>

                    </div>
                </form>
            </section>
        </main>
    );

}

interface LoginProps { }

export default Login;