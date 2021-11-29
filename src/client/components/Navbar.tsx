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

                <nav className="fixed-top nav-margin bg-white navbar navbar-expand-lg navbar-light border border-top-0 border-left-0 border-right-0 shadow-sm pr-5  ">
                    <a className="navbar-brand" href="/"> Subtle Stillness</a>

                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
{/* 
                    <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                        <ul className="navbar-nav ml-auto">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/login">Sign Up</a>
                                </li>
                            </ul>
                        </ul>
                    {/* </div> */}

                </nav>


                {/* 
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Subtle Stillness</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                          
                          Subtle Stillness
                        </span>
                    </div>
                </nav> */}


            </Background>
        </div>

    );

}

const Background = styled.div`

.navbar-brand {
    font-family: 'Beth Ellen', sans-serif;
    font-size: 20px;     
}
     
.nav-pills {
    .nav-link {
      @include border-radius($nav-pills-border-radius);
    }
  
    .nav-link.active,
    .show > .nav-link {
      color: grey;
    //   outline-color: #93E9BE;
      background-color: white;
      border: 2px;
      outline-style: solid;
      outline-color:  rgba(46, 139, 87, 0.3);
      width: 100%;
    }
  }





`;





interface NavbarProps { }


export default Navbar;



