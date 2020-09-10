import * as React from 'react';
import { useState, useEffect } from 'react';
import { IAffirmVideo } from '../utils/interfaces';
import AffirmationDisplay from '../components/AffirmationDisplay';
import apiService from '../utils/api-service';
import Navbar from '../components/Navbar';

 
    const Affirmation: React.FC<AffirmationProps> = (props) => {

        const [affirm_videos, setAffirmVideos] = useState<IAffirmVideo[]>([]);
        
    
        const getData = async () => {
    
            const affirm_videos = await apiService('/api/affirm_videos');
            setAffirmVideos(affirm_videos);
        
        };
    
        useEffect(() => {
            getData();
            
        }, []);

    
        return (
            <main className="container">
                 <Navbar />
       
                <div className="row">
                
                
                    {affirm_videos.map(affirm_video => (
                        <AffirmationDisplay key={`display-card-${affirm_video.id}`} affirm_video={affirm_video} />
    
                    ))}
                 
                </div>
    
            </main>
        );
    }
    
    interface AffirmationProps { }
    
    export default Affirmation;