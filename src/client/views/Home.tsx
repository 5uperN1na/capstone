import * as React from 'react';
import { useState, useEffect } from 'react';
import { IMedVideo } from '../utils/interfaces';
import apiService from '../utils/api-service';
import ColdStateNavbar from '../components/ColdStateNavbar';

 
    const Home: React.FC<HomeProps> = (props) => {

    
    
        return (
            <main className="container">
                 <ColdStateNavbar />

                 <h1>Home</h1>
       
    
            </main>
        );
    }
    
    interface HomeProps { }
    
    export default Home;