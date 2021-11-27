import * as React from 'react';
import moment from 'moment';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const HomeDisplay: React.FC<HomeDisplayProps> = () => {

    return (

        <Background>
            <div className="jumbotron jumbotron-fluid">
                <div className="container py-5">
                    <h1 className="display-4 text-center">Today's Affirmations</h1>
                    <p className="lead text-center"><i>Showing up <u>is</u> good enough; it is still a choice.</i></p>
                    <p className="date text-center"><b>{moment().format("MMM Do YYYY")}</b></p>
                   
                </div>
                <hr className="line shadow"></hr>
            </div>

            <div className="container-fluid">
                <div className="row justify-content-center">

                    <div className="card-deck">
                        <div className="card shadow"  >
                            <img className="card-img" src="/images/bg.png" style={{ "height": "100%", "width": "100%" }} />
                            <div className="card-img-overlay">
                                <h5 className="card-title"><a className="nav-link" href="/affirmation">Affirmations</a></h5>
                            </div>
                        </div>


                        <div className="card shadow"  >
                            <img className="card-img" src="/images/bg.png" style={{ "height": "100%", "width": "100%" }} />
                            <div className="card-img-overlay">
                                <h5 className="card-title"><a className="nav-link" href="/meditation">Medititaions</a></h5>

                            </div>
                        </div>


                        <div className="card shadow"  >
                            <img className="card-img" src="/images/bg.png" style={{ "height": "100%", "width": "100%" }} />
                            <div className="card-img-overlay">
                                <h5 className="card-title"><a className="nav-link" href="/meditation">Blog</a></h5>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </Background >
    );

}


const Background = styled.div`

.jumbotron {
    font-size: 21px;
    font-weight: 200px;
    color: white;
    background-color: transparent;
    // margin: none;
    padding-bottom: 0;
    background-color: #93E9BE;
}

.line{
    position: relative;
    // top: 5px;
    border: 5px;
    height: 10px;
    background: grey;
   
}

.container-fluid {
    // background-color: #93E9BE;
    // background: linear-gradient(90deg, #93E9BE 50%, #fff 50%); 
    height: auto;
}

.card-deck {
    margin-top: 5rem;
}
 
.card {
    
    width: 16rem;
    height: 15rem;

  

}





`;



interface HomeDisplayProps {

}

export default HomeDisplay;