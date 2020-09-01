import * as React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { Link, useHistory } from 'react-router-dom';
import { IMedVideo } from '../utils/interfaces';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';


const HomeDisplay: React.FC<HomeDisplayProps> = ({ med_video }) => {

    const history = useHistory();


    return (

        <div className="col-md-5 mb-sm-5">

            <div className="card" style={{ width: ' 18rem' }}>
                {/* <img className="card-img-top" src="https://fitathletic.com/wp-content/uploads/2019/12/Are-fitness-classes-better-than-gym.jpg" alt="Card image cap" /> */}

                {/* <img className="card-img-top" src="https://www.youtube.com/watch?v=cjkFG6bHGNc" alt="Card image cap" />

 */}


                {/* <div className="embed-responsive embed-responsive-21by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/watch?v=cjkFG6bHGNc"></iframe>
                </div> */}




                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                </div>





                {/* <img className="card-img-top embed-responsive-item" src={med_video.video_url} /> */}

                <div className="card-header bg-info text-white">{med_video.title}</div>
                <div className="card-body">
                    <p className="card-text ">{med_video.author}</p>
                </div>
                <div className="card-footer bg-primary d-flex justify-content-between align-items-center">
                    <p><i>{moment(med_video._created).format("MMM Do YY")}</i></p>
                    {/* <Link to={`/details/${blog.id}`} className="btn btn-success btn-sm">Continue</Link> */}

                </div>
            </div>

        </div>


        // <section className="row justify-content-center col-mx-3">
        //     <div className="my-3" onClick={() => history.push(`/details/${med_video.id}`)}>
        //         <div className="mx-2"> {med_video.title}</div>
        //         <div>
        //             <div className="mx-2">
        //                 <h6>{med_video.author}</h6>
        //             </div>
        //             <div className="mx-2">
        //                 <h6>{med_video.video_url}</h6>
        //             </div>
        //             <div className="mx-2">
        //                 <h6>${med_video._created}</h6>
        //             </div>
        //         </div>
        //     </div>
        // </section>

    );
}

interface HomeDisplayProps {
    med_video: IMedVideo
}

export default HomeDisplay;