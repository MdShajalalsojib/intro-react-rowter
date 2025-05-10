import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostsDates = () => {

      const navigate = useNavigate ();
      
            const handleNavigate = () =>{
              navigate('/posts');
      
            }


     const post = useLoaderData();
    return (
        <div className='flex justify-center'>
              <div className='text-white bg-blue-600 rounded-2xl text-center p-4 w-5xl'>
                <h2>{post.title}</h2>
                <h2>{post.body}</h2>
                <button onClick={handleNavigate} className='bg-emerald-400 text-white rounded-2xl p-2 w-full '>Back</button>
              </div>
        </div>
    );
};

export default PostsDates;