"use client"
import Banner from '../Components/Banner';
import './home_style.scss';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const HomeContent = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:4000/home/blogs')
            .then(res => setBlogs(res.data));
    }, [])

  return (
    <section>
        <Banner></Banner>
        
        <div className='recommended-blogs'>
        { blogs && blogs.map(blog => (
            <div className="blog-card">
                <div className='blog-image'><img src={blog.image} alt="" /></div>
                <div className='author-image'><img src="" alt="" /></div>
                <div className='overview'>{blog.snippet}</div>
                <div className='impressions'>
                    <div className='hearts'><img src="empty_heart.png" alt="" />{blog.likes.length}</div>
                    <div className='number-comments'><img src="comments.png" alt="" />6</div>
                    <div className='views'><img src="impressions.png" alt="" />{blog.views.length}</div>
                </div>
            </div>))}
        </div>
    </section>
  )
}

export default HomeContent
