import * as React from 'react';
import { useState, useEffect } from 'react';
import { IAffirmVideo } from '../utils/interfaces';
import AffirmationDisplay from '../components/AffirmationDisplay';
import apiService from '../utils/api-service';
import Navbar2 from '../components/Navbar2';
import styled from "styled-components";

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
        <Background>
            <main className="container">
                <Navbar2 />

                <div className="row">
                    {affirm_videos.map(affirm_video => (
                        <AffirmationDisplay key={`display-card-${affirm_video.id}`} affirm_video={affirm_video} />

                    ))}

                </div>

            </main>
        </Background>
    );


}


const Background = styled.div`


.container{
    margin-top: 80px;
}


     
`;

interface AffirmationProps { }

export default Affirmation;