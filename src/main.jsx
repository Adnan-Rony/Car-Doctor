import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
 
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Auntication/Login/Login.jsx';
import CheckOut from './Pages/CheckOut/CheckOut.jsx';


const Routee = createBrowserRouter([
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
            path:"/checkout/:id",
            element:<CheckOut></CheckOut>,
            loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
          }
         
      ]
  }
])





ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  
     <RouterProvider router={Routee} />
   
     
  </React.StrictMode>
)
