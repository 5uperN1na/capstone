import React from 'react'
import { useState, useEffect } from 'react';
import { IAffirmVideo } from '../utils/interfaces';
import apiService from '../utils/api-service';
import Navbar from '../components/Navbar';


const Affirmation: React.FC <AffirmationProps> = (affirm_video) => {

   
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
           <div className="col-md-4 mb-sm-2">



               
               </div>
           </div>
      </main>
    );
}

    
interface AffirmationProps { 
    affirm_video: IAffirmVideo
}
    
export default Affirmation;