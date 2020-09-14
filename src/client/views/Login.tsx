import * as React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import LoginDisplay from '../components/LoginDisplay';
import ColdNavbar from '../components/ColdNavbar';
import apiService from '../utils/api-service';


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
        <main className="container">
            <ColdNavbar />


            <div className="row">
                
                    <LoginDisplay key={`display-card-${login}`} login={login} />
        
            </div>

        </main>
    );
}


interface LoginProps { }

export default Login;