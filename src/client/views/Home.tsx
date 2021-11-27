import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";
// import { IMedVideo } from '../utils/interfaces';
import apiService from '../utils/api-service';
import Navbar from '../components/Navbar';
import HomeDisplay from '../components/HomeDisplay';

const Home: React.FC<HomeProps> = (props) => {


    return (

        <Background>
            <Navbar />

            <HomeDisplay />

        </Background>
    );

}


const Background = styled.div`





     
`;





interface HomeProps { }

export default Home;
