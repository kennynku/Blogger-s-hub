"use client"
import { useEffect } from 'react';
import './blog_style.scss';
import axios from 'axios';
import { useState } from 'react';
import imageProcesser from '../../Helpers/imageProcess';

const page = ({params}) => {
    const [blogData, setBlogData] = useState(null);
    
    useEffect(() => {
        const id = params.id;
        const queryParams = {
            params: {
                blogId: id
            }
        };
        axios.get('http://localhost:4000/blogs/view', queryParams)
            .then(res => {
                console.log('Response data: ', res.data)
                setBlogData(res.data);
            })
    }, [])

  return (
    <main >
        <div className='blog_body'>
            {blogData && (
            <>
                <section className='blog'>
                    <div className='image_container'><img src={blogData.blog.image} alt="" /></div>
                    <h1>{blogData.blog.title}</h1>
                    <p className='blog_content'>{blogData.blog.content}</p>
                </section>
                <section className='comments-section'>
                    <ul>
                    {blogData.comments.map(comment => (<li>
                            <p className='user-name'><b>{comment.userId.userName}</b></p>
                            <p>{comment.comment}</p>
                        </li>))}
                    </ul>
                </section>
            </>)}

        </div>
    </main>
  )
}

export default page
