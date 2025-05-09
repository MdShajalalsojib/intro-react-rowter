import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  Form,
  RouterProvider,
} from "react-router";
import Root from './components/Root/Root.jsx'
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Home from './components/Home/Home.jsx';
import Laptops from './components/Laptops/Laptops.jsx';
import Users from './components/Users/Users.jsx';
import Users2 from './components/Users2/Users2.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/Header/Posts/Posts.jsx';
import PostsDates from './components/PostsDates/PostsDates.jsx';

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());

const router = createBrowserRouter([

   {
     path: '/',
     Component: Root,
     children : [
      {index: true, Component:Home},
      {path: 'mobiles',Component:Mobiles},
      {path: 'laptops',Component:Laptops},
      {
        path:'users',
        loader : () => fetch ('https://jsonplaceholder.typicode.com/users'),
        Component:Users,
      },
      {
        path:'users2',
          element : <Suspense fallback={<span>Loading......</span>}>
            <Users2 usersPromise={usersPromise}></Users2>
          </Suspense>
         
      },
      {
        path:'users/:userId',
        loader: ({params}) =>  fetch( `https://jsonplaceholder.typicode.com/users/${params.userId }`),
        
        Component:UserDetails
      },
      {
        path:'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component:Posts
      },
      {
        path:'posts/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component:PostsDates

      }

     ]
   },

  {
    path: "/",
    element: <div>Hello World</div>,
  },
   
  {
    path: 'blogs',
    element: <div>all my blogs are here</div>
  }, 
  {
    path: 'app',
    Component: App
  },
  {
    path:'app2',
    Component: App
  },
  {
    path : '*',
    element:  
    <div className='flex justify-center '>
      <h2 className='font-bold text-2xl rounded-4xl p-30  text-cyan-500'>Data is Not Found: 404 Status</h2>
    </div>

  }
]);


  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
