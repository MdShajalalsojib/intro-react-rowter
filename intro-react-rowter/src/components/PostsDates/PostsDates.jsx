import React from 'react';
import { useLoaderData } from 'react-router';

const PostsDates = () => {
     const post = useLoaderData();
    return (
        <div className='flex justify-center'>
              <div className='text-white bg-blue-600 rounded-2xl text-center p-4 w-5xl'>
                <h2>{post.title}</h2>
                <h2>{post.body}</h2>
              </div>
        </div>
    );
};

export default PostsDates;