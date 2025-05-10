import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>This is header</h2>
                        <nav>
                             <div className='flex justify-between m-10 bg-blue-400 p-4 rounded-2xl text-white'>
                                <div>
                                   <h3 className='font-bold text-2xl  ' >Shajalal</h3>
                                </div>
                             <div className='text-2xl flex gap-4 font-bold text-deco  '>
                             <NavLink  to= "/" 
                                  className={({ isActive }) =>
                                    isActive ? "text-blue-600 underline" : " hover:underline"}
                             >Home</ NavLink>
                            < NavLink to= "/mobiles" 
                              className={({ isActive }) =>
                                 isActive ? "text-blue-600 underline" : " hover:underline"}
                            >Mobiles</ NavLink>
                            < NavLink to= "/laptops"
                               className={({ isActive }) =>
                                isActive ? "text-blue-600 underline" : " hover:underline"}
                            
                            >Laptops</ NavLink>
                            < NavLink to= "/users"  
                                   className={({ isActive }) =>
                                    isActive ? "text-blue-600 underline" : " hover:underline"}
                            >Users</ NavLink>

                          < NavLink to= "/users2"  
                                   className={({ isActive }) =>
                                    isActive ? "text-blue-600 underline" : " hover:underline"}
                            >Users2</ NavLink>

                            < NavLink to= "/posts"  
                                   className={({ isActive }) =>
                                    isActive ? "text-blue-600 underline" : " hover:underline"}
                            >Posts</ NavLink>

                             </div>
                             <div className='w-10 h-10  '>
                                <img  className='rounded-[100%]' src="https://i.ibb.co.com/MkT8G4CM/1745646133822.jpg" alt="" />
                             </div>
                             </div>
                        </nav> 
        </div>
    );
};

export default Header;