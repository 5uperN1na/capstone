import * as React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { Link, useHistory } from 'react-router-dom';
import { IAffirmVideo } from '../utils/interfaces';
import Navbar from '../components/Navbar'
import styled from 'styled-components';


const AffirmationDisplay: React.FC<AffirmationDisplayProps> = ({ affirm_video }) => {

    const history = useHistory();


    return (
    

            <div className="col-md-4 mb-sm-2">

                <div className="card" style={{ width: '75%', height: '75%' }}>

                    <div className="embed-responsive embed-responsive-16by9" >

                        <iframe className="embed-responsive-item"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%"
                            }}
                            src={`https://www.youtube.com/embed/${affirm_video.video_url}`}
                            frameBorder="1"
                        />
                    </div>

                    <div className="card-header bg-info text-white" style={{font: 'xx-small'}}> {affirm_video.title}</div>
                    <div className="card-body bg-success text-white">{affirm_video.author}  <span className="float-right badge badge-pill badge-warning">{affirm_video.name}</span>
                    </div>

                </div >

            </div >
       
    );





}


const Background = styled.div`
 


`;


interface AffirmationDisplayProps {
    affirm_video: IAffirmVideo
}

export default AffirmationDisplay;