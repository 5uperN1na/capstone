import * as React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { Link, useHistory } from 'react-router-dom';
import { IMedVideo } from '../utils/interfaces';


const MeditationDisplay: React.FC<MeditationDisplayProps> = ({ med_video }) => {

    const history = useHistory();


    return (

      
        <div className="col-md-4 mb-sm-2">

            <div className="card mt-5">

                <div className="embed-responsive embed-responsive-16by9" >

                    <iframe className="embed-responsive-item"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }}
                        src={`https://www.youtube.com/embed/${med_video.video_url}`}
                        frameBorder="3"
                    />
                </div>

                <div className="card-header bg-info text-white">    {med_video.title}</div>
                <div className="card-body bg-success text-white">{med_video.author}  <span className="float-right badge badge-pill badge-warning">{med_video.name}</span>
                </div>
              
                


            </div >

        </div >
    );



}

interface MeditationDisplayProps {
    med_video: IMedVideo
}

export default MeditationDisplay;