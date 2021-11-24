import * as React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Navbar: React.FC<NavbarProps> = () => {

    return (

        <div>
            <Background>
                <GoogleFontLoader
                    fonts={[
                        {
                            font: 'Homemade Apple',
                            weights: [400, '400i'],
                        },
                        {
                            font: 'Beth Ellen',
                            weights: [400, '400i'],
                        },
                    ]}
                    subsets={['cyrillic-ext', 'greek']}
                />

                {/* // <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}

                <nav className="fixed-top nav-margin bg-white navbar navbar-expand-lg navbar-light border border-top-0 border-left-0 border-right-0 shadow-sm pr-5  ">
                    <a className="navbar-brand" href="/"> Subtle Stillness</a>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            {/* <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li> */}
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

                        </ul>

                    </div>
                </nav>
            </Background>
        </div>



    );



}

const Background = styled.div`

.navbar-brand {
    font-family: 'Beth Ellen', sans-serif;
    font-size: 20px;     
}
     
`;

interface NavbarProps { }


export default Navbar;



