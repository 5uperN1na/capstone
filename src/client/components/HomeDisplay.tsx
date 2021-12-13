import * as React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { IQuote } from '../utils/interfaces';


const HomeDisplay: React.FC<HomeDisplayProps> = ({ quote }) => {

    const history = useHistory();


    return (

        <Background>

            <div className="jumbotron jumbotron-fluid">
                <div className="container py-5">
                    <h1 className="display-4 text-center">Today's Affirmations</h1>
                    <p className="lead text-center"><i>{quote.title}</i></p>
                    <p className="date text-center"><b>{moment().format("MMM Do YYYY")}</b></p>

                </div>
                <hr className="line shadow"></hr>
            </div>

            <div className="container-fluid">
                <div className="row justify-content-center">

                    <div className="card-deck">
                        <div className="card shadow" onClick={() => history.push(`/affirmation`)}>
                            <img className="card-img" src="/images/pink_bg.png" style={{ "height": "100%", "width": "100%" }} />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Affirmations</h5>
                            </div>
                        </div>

                        <div className="card shadow" onClick={() => history.push(`/meditation`)}>
                            <img className="card-img" src="/images/purple_bg.png" style={{ "height": "100%", "width": "100%" }} />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Meditation</h5>
                            </div>
                        </div>

                        <div className="card shadow" onClick={() => history.push(`/meditation`)}>
                            <img className="card-img" src="/images/blue_bg.png" style={{ "height": "100%", "width": "100%" }} />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Blog</h5>
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
    // background-color: transparent;
    // margin: none;
    padding-bottom: 0;
    // background-color: #93E9BE;
    background-color: rgba(46, 139, 87, 0.3);
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

.card-title {
    
    text-align: center;
    padding-top: 90px;
}


`;


interface HomeDisplayProps {
    quote: IQuote


}

export default HomeDisplay;