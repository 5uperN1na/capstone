import * as React from 'react';
import { useState, useEffect } from 'react';
import { IBlog } from '../utils/interfaces';
import apiService from '../utils/api-service';
import ColdNavbar from '../components/ColdNavbar';


const BlogsDisplay: React.FC<BlogsDisplayProps> = ({ blog }) => {



    return (
        // <main className="container">
        //     <ColdNavbar />

        //     <div className="container">
        //         <div className="jumbotron">
        //             <h1>Bootstrap Tutorial</h1>
        //             <p>{blog.title}</p>
        //         </div>
        //         <p>This is some text.</p>

        //         <p>This is another text.</p>
        //     </div>


        // </main>


        <div className="col-md-4 mb-sm-2">

            <div className="card mt-5">



                <div className="card-header bg-info text-white">    {blog.title}</div>
                <div className="card-body bg-success text-white">{blog.author}  </div>
                <div className="card-body bg-success text-white">{blog.content}</div>





            </div >

        </div >





















    );
}

interface BlogsDisplayProps {

    blog: IBlog;
}

export default BlogsDisplay;