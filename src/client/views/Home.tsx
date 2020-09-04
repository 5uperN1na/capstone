import * as React from 'react';
import { useState, useEffect } from 'react';
import { IMedVideo } from '../utils/interfaces';
import HomeDisplay from '../components/HomeDisplay';
import apiService from '../utils/api-service';

 
    const Home: React.FC<HomeProps> = (props) => {

        const [med_videos, setMedVideos] = useState<IMedVideo[]>([]);
        // const [categories, setCategories] = useState<ICategory[]>([]);
    
        const getData = async () => {
    
            // const categories = await apiService('/api/categories');
            const med_videos = await apiService('/api/med_videos');
            setMedVideos(med_videos);
            // setCategories(categories);
        };
    
        useEffect(() => {
            getData();
        }, []);
    
        // const getBooks = async () => {
        //     const books = await apiService('/api/books');
        //     setBooks(books);
        // };
    
        // useEffect(() => {
        //     getBooks();
        // }, []);
    
    
        return (
            <main className="container">
       
                <section className="row justify-content-center mt-5">
                
                    {med_videos.map(med_video => (
                        <HomeDisplay key={`display-card-${med_video.id}`} med_video={med_video} />
    
                    ))}
                 
                </section>
    
            </main>
        );
    }
    
    interface HomeProps { }
    
    export default Home;