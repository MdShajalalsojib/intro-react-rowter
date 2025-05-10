import React from 'react';
import { Link, useNavigate,  } from 'react-router';

const Post = ({post}) => {
    const {id,title} = post;

     const navigate = useNavigate ();
      
            const handleNavigate = () =>{
              navigate('/');
      
            }

     

    return (
        <div className='flex justify-center '>
             <div className='  rounded-2xl p-5 mt-5 border-2 text-center'>
                <h2>{id}</h2>
                <h3>{title}</h3>
                <Link to = {`/posts/${id}`}>
                   <button className='bg-blue-500 text-white font-bold rounded-2xl p-2'>Show Details</button>
                </Link>
                <button onClick={handleNavigate} className='bg-blue-500 text-white font-bold rounded-2xl p-2 ml-4'>Back  </button>
                   
             </div>
        </div>
    );
};

export default Post;