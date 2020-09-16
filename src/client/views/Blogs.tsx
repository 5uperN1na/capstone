import * as React from 'react';
import { useState, useEffect } from 'react';
import { IMedVideo } from '../utils/interfaces';
import apiService from '../utils/api-service';
import ColdNavbar from '../components/ColdNavbar';


const Home: React.FC<HomeProps> = (props) => {



    return (
        <main className="container">
            <ColdNavbar />

            <div className="container">
                <div className="jumbotron">
                    <h1>Bootstrap Tutorial</h1>
                    <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing
    responsive, mobile-first projects on the web.</p>
                </div>
                <p>This is some text.</p>
                <p>This is another text.</p>
            </div>


        </main>
    );
}

interface HomeProps { }

export default Home;