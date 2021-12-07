import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";
// import { IMedVideo } from '../utils/interfaces';
import apiService from '../utils/api-service';
import Navbar from '../components/Navbar';
import HomeDisplay from '../components/HomeDisplay';
import { IHome } from '../utils/interfaces';

const Home: React.FC<HomeProps> = (props) => {

    const [quotes, setQuotes] = useState<IHome[]>([]);

    const getData = async () => {
        const quotes = await apiService('/api/quotes');
        setQuotes(quotes);
    };


    useEffect(() => {
        getData();
    }, []);


    return (

        <Background>
            <Navbar />
            <main className="container my-5">
             
            <div className="row">
                
                {quotes.map(quote => (
                    <HomeDisplay key={`display-card-${quote.id}`} home={quote} />

                ))}
             
            </div>

            </main>

         

        </Background>
    );

}


const Background = styled.div`





     
`;





interface HomeProps { }

export default Home;
