import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoute from './Router/Route'
import AuthProvider from './Provider/AuthProvider'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
 <RouterProvider router={myCreatedRoute}/>
    </AuthProvider>
  </React.StrictMode>,
)
