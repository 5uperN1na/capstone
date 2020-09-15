import * as React from 'react';
import { useState, useEffect } from 'react';
 import Navbar from '../components/Navbar';
import apiService from '../utils/api-service';
import { IRegister } from '../utils/interfaces';


const RegisterDisplay: React.FC<RegisterDisplayProps> = (props) => {
 

    return (
        <main className="container">
        
            <div className="row">
                
                    <RegisterDisplay  />
        
            </div>
        </main>
    );
}

interface RegisterDisplayProps {
 
}


export default RegisterDisplay;