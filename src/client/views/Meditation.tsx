import * as React from 'react';
import { useState, useEffect } from 'react';
import { IMedVideo } from '../utils/interfaces';
import MeditationDisplay from '../components/MeditationDisplay';
import apiService from '../utils/api-service';
import HotStateNavbar from '../components/HotStateNavbar';

 
    const Meditation: React.FC<MeditationProps> = (props) => {

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

    
        return (
            <main className="container">
                 <HotStateNavbar />

                 <h1>work?</h1>
       
                <div className="row">
                
                
                    {med_videos.map(med_video => (
                        <MeditationDisplay key={`display-card-${med_video.id}`} med_video={med_video} />
    
                    ))}
                 
                </div>
    
            </main>
        );
    }
    
    interface MeditationProps { }
    
    export default Meditation;