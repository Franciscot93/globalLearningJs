import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './routes/root'
import ErrorPage from './error-page'
import User from './routes/user'
import { useConectionZustand } from './store/conectionZustand'



const router= createBrowserRouter([
  { 
    path:'/',
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/user/:id',
        element:<User/>,
       
      },
      {
        path:'user/:userId',
        element:<User/>,
        
      }
    ]
  },
  
  
]
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
