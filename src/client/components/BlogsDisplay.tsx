import * as React from 'react';
import { useState, useEffect } from 'react';
import { IBlog } from '../utils/interfaces';
import apiService from '../utils/api-service';
import ColdNavbar from './ColdStateNavbar';
import moment from 'moment';


const BlogsDisplay: React.FC<BlogsDisplayProps> = ({ blog }) => {



    return (
        // <main className="container">
            

        //     <div className="container my-5">
        //         <div className="jumbotron">
        //             <h1>{blog.title}</h1>     
                  
        //         </div>
               
        //         <p>{blog.content}</p>
        //         <p><i>{moment(blog._created).format("MMM Do YY")}</i></p>
        //         <h6>{blog.author}</h6>


        //     </div>


        // </main>


        <div className="col-md-4 mb-sm-2">

            <div className="card mt-5">



                <div className="card-header bg-info text-white">    {blog.title}</div>
                <div className="card-body bg-success text-white">{blog.author}  </div>
                <div className="card-body bg-success text-white">{blog.content}</div>
                <div className="my-3" onClick={() => history.push(`/details/${book.id}`)}>





            </div >

        </div >





















    );
}

interface BlogsDisplayProps {

    blog: IBlog;
}

export default BlogsDisplay;