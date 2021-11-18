import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";
import { IMedVideo } from '../utils/interfaces';
import apiService from '../utils/api-service';
import ColdNavbar from '../components/ColdNavbar';
import Navbar from '../components/Navbar';

const Home: React.FC<HomeProps> = (props) => {


    return (

        <Background>
            <Navbar />
            <StyledMain className="container">
                <section className="row-justify-content-center">
                    <div className="col-md-12">
                        <h1>Subtle Stillness </h1>

                        <StyledCard className="card border-0">
                            <div className="card-body">
                                <h4 className="card-title">TODAY'S DAILY POSITIVE AFFIRMATION</h4>
                                <p className="card-subtitle text-muted"> I can choose peace at every moment, every single time.  It is my choice.  I can end internal suffering when I choose, which can manifest to world peace.  </p>
                            </div>
                        </StyledCard>

                    </div>


                </section>
            </StyledMain>
        </Background>

    );
}


const StyledCard = styled.div`
background-color: #D3DF87;

    @media (max-width: 812px) and (orientation: landscape) {
            margin-top: 4.375rem;
    }

`;




const StyledMain = styled.main`
margin-top: 5rem;

    @media (max-width: 812px) and (orientation: landscape) {
            margin-top: 4.375rem;
    }

`;


const Background = styled.div`
    background-color: #D3DF87;
    height: 50%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    @media (max-width: 991px) and (orientation: landscape) {
        height: 60%;
    }
     
`;




interface HomeProps { }

export default Home;