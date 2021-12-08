import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";
import apiService from '../utils/api-service';
import Navbar from '../components/Navbar';
import HomeDisplay from '../components/HomeDisplay';
import { IQuote } from '../utils/interfaces';

const Home: React.FC<HomeProps> = (props) => {

    // const [med_videos, setMedVideos] = useState<IMedVideo[]>([]);
    const [quotes, setQuotes] = useState<IQuote[]>([]);

    const getData = async () => {

        const quotes = await apiService('/api/quotes');
        console.log(quotes);
        // const med_videos = await apiService('/api/med_videos');
        // console.log(med_videos);
        // setMedVideos(med_videos);
        setQuotes(quotes);
    };


    useEffect(() => {
        getData();
    }, []);


    return (

        <main className="container my-5">
             <Navbar />
            <div className="row">
            
                {quotes.map(quote => (
                    <HomeDisplay key={`display-card-${quote.id}`} quote={quote} />

                ))}
             
            </div>

        </main>
    );
}




interface HomeProps { }

export default Home;
