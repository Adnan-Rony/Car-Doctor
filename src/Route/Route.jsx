import React from 'react';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Auntication/Login/Login';
import Registation from '../Auntication/Registation/Registation';
import CheckOut from '../Pages/CheckOut/CheckOut';
import Bookings from '../Pages/Bookings/Bookings';
import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


const createroute = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
              path:"/login",
              element:<Login></Login>
            },
            {
              path:"registation",
              element:<Registation></Registation>
            },
            {
              path:"/checkout/:id",
              element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
              loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
  
            {
              path:'bookings',
              element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
            }
           
        ]
    }
  ])

export default createroute;