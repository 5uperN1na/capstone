import * as React from 'react';
import { useState, useEffect } from 'react';
import { IBlog } from '../utils/interfaces';
import apiService from '../utils/api-service';
import Navbar from '../components/Navbar';
import BlogsDisplay from '../components/BlogsDisplay';

    const Blogs: React.FC<BlogsProps> = (props) => {

        const [blogs, setBlogs] = useState<IBlog[]>([]);

    
        const getData = async () => {
    
            const blogs = await apiService('/api/blogs');
            setBlogs(blogs);
      
        };

    
        useEffect(() => {
            getData();
        }, []);

    
        return (
            <main className="container">
                 <Navbar />

                 <h1>work?</h1>
       
                <div className="row">
                
                
                    {blogs.map(blog => (
                        <BlogsDisplay key={`display-card-${blog.id}`} blog={blog} />
    
                    ))}
                 
                </div>
    
            </main>
        );
    }
    
    interface BlogsProps { }
    
    export default Blogs;