import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";
import apiService from '../utils/api-service';
import Navbar from '../components/Navbar';
import HomeDisplay from '../components/HomeDisplay';
import { IQuote } from '../utils/interfaces';

const Home: React.FC<HomeProps> = (props) => {

    const [quotes, setQuotes] = useState<IQuote[]>([]);
    // const [results, setResults] = useState<IQuote[]>([]);
    // const [randomQuotes, setRandomQuotes] = useState<IQuote[]>([]);

    const getData = async () => {

        const results = await apiService('/api/quotes');
        // let dataQuotes = quotes;
        // let randomNum = Math.floor(Math.random() * dataQuotes.length);
        // let x = dataQuotes[randomNum];
        // setQuotes(quotes);
        // setRandomQuotes(x);

        let quotes = results.filter((result: { id: number; }) => result.id === 2).map((result: { title: any; }) => result.title);
        console.log(quotes);
        setQuotes(quotes);

        // let result = quotes.filter((quote: { id: number; }) => quote.id === 1).map((quote: { title: any; }) => quote.title);
        // console.log(result);

    };




    useEffect(() => {
        getData();

    }, []);




    return (
        <main className="container my-5">
            <Navbar />

            <div className="row">
                {/*        
           {randomQuotes.map(randomQuote => (
               <HomeDisplay key={`display-card-${randomQuote.id}`} quote={randomQuote} />

           ))} */}

     
          

                <h1>{quotes}</h1>




            </div>


            {/* <div className="row">
       
           {quotes.map(quote => (
               <HomeDisplay key={`display-card-${quote.id}`} quote={quote} />

           ))}
        
       </div> */}

        </main>
    );
}




interface HomeProps { }

export default Home;
