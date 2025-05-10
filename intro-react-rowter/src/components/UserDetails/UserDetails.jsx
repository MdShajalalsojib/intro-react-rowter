import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
     const {website, name} = user;
    return (
        <div className='flex justify-center'>
             <div  className='text-white bg-blue-600 rounded-2xl text-center p-4 w-5xl'>
                <h4>This is User Details</h4>
               <h4>Name:{name}</h4>
               <p>Website:{website}</p>
             </div>
        </div>
    );
};

export default UserDetails;