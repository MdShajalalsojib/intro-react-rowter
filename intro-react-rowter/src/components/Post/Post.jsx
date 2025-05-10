import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {id,title} = post;
    return (
        <div className='flex justify-center '>
             <div className='  rounded-2xl p-5 mt-5 border-2 text-center'>
                <h2>{id}</h2>
                <h3>{title}</h3>
                <Link to = {`/posts/${id}`}>
                   <button className='bg-blue-500 text-white font-bold rounded-2xl p-3'>Show Details</button>
                </Link>
             </div>
        </div>
    );
};

export default Post;