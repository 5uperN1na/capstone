import * as React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar: React.FC<NavbarProps> = () => {

    return (

        // <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <nav className="fixed-top nav-margin bg-white navbar navbar-expand-lg navbar-light border border-top-0 border-left-0 border-right-0 shadow-sm pr-5  ">
            <a className="navbar-brand" href="/">
                <img
                    className="ml-5 my-auto"
                    alt='ss'
                    src='/images/ss.png'
                    style={{ width: "100px", height: "auto" }}
                />
            </a>


            {/* <a className="navbar-brand" href="/">LOGO FP</a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Login</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Logout</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/affirmation">Affirmations</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/blogs">Blog</a>
                    </li>
                    {/* 
{/* 
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/">Meditation</a>
                            <a className="dropdown-item" href="/">Affirmation</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> */}

















                </ul>
    
            </div>
        </nav>


    );



}



interface NavbarProps { }


export default Navbar;