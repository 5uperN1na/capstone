import * as React from 'react';
import { useState, useEffect } from 'react';
import { IMedVideo } from '../utils/interfaces';
import apiService from '../utils/api-service';
import ColdNavbar from '../components/ColdNavbar';

 
    const Home: React.FC<HomeProps> = (props) => {

    
    
        return (
            <main className="container">
                 <ColdNavbar />

                 <h1>work?</h1>
       
    
            </main>
        );
    }
    
    interface HomeProps { }
    
    export default Home;