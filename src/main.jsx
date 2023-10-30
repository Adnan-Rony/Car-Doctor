import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {RouterProvider,} from "react-router-dom";

import createroute from './Route/Route.jsx';
import AuthProvider from './Auntication/Authentication'








ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>



    <AuthProvider>
    <RouterProvider router={createroute} />
    </AuthProvider>
   


  </React.StrictMode>,
)
