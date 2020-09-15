import * as React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import ColdNavbar from '../components/ColdNavbar';
import Navbar from '../components/Navbar';
import apiService from '../utils/api-service';


const Register: React.FC<RegisterProps> = (props) => {
    const history = useHistory();

    const location = useLocation<{ msg: string }>();

    const [first, setFirst] = useState<string>('');
    const [last, setLast] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const register = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const token = await apiService('/auth/register', 'POST', { email, password, first, last });

        console.log(token);
        localStorage.setItem('token', token);
        history.push('/login');
    }


    return (
        <main>
            <ColdNavbar />



            <section className="row justify-content-center mt-3">

                <form className="form-group p-3 border-primary rounded-lg-success">

                    <div className="shadow p-4 mb-4 bg-white">
                        <h3 className="text-center"> Register </h3>


                        <label>First Name</label>
                        <input value={first} onChange={e => setFirst(e.target.value)} className="form-control my-1" />

                        <label>Last Name</label>
                        <input value={last} onChange={e => setLast(e.target.value)} className="form-control my-1" />

                        <label>Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} className="form-control my-1" />

                        <label>Password</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} className="form-control my-1" />

                        <button onClick={register} className="btn">Submit</button>
                        <button onClick={() => history.push('/')} className="btn">Go Back</button>


                    </div>
                </form>
            </section>






        </main >

    );



}


interface RegisterProps {

}


export default Register;