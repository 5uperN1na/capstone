import * as React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { Link, useHistory } from 'react-router-dom';
import { IMedVideo } from '../utils/interfaces';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from '../components/Navbar'


const HomeDisplay: React.FC<HomeDisplayProps> = ({ med_video }) => {

    const history = useHistory();


    return (

        <main className="container bg-primary">

        <div className="col-md-5 mb-sm-5">
       
         
            {/* <div className="col-md-12 mb-sm-7"> */}
            <section className="row justify-content-center">
                {/* <section className="row justify-content-center col-md-3"> */}

                <div className="card" style={{ width: ' 18rem' }}>


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
                            frameBorder="2"
                        />
                    </div>

                    <div className="card-header bg-info">    {med_video.title}</div>
                    <div className="card-body">{med_video.author}</div>

                </div >

            </section>


        </div >
       

        </main>
    );



}

interface HomeDisplayProps {
    med_video: IMedVideo
}

export default HomeDisplay;