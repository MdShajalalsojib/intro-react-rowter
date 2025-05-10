import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const { id,name, email, phone} =user;
    return (
        <div className='flex justify-center '>
              <div className='   border-2  rounded-2xl p-4 mt-5 text-center'>
                <h3>{name}</h3>
                 <p>Email:{email}</p>
                 <p>Phone Number:{phone}</p>
                 <Link to={`/users/${id}`}><button className='bg-blue-500 rounded-2xl p-2 text-white '>Show Details</button></Link>
              </div>
        </div>
    );
};

export default User;