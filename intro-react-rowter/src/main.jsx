import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path:"about",
    element: <div>About my </div>
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
  }
]);


  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
