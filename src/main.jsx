import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import Loginpage from './Pages/Loginpage.jsx'
import Signuppage from './Pages/Signuppage.jsx'

const router = createBrowserRouter([{
  path: '/', element : <App/>},
  {path: '/login', element: <Loginpage/>},
  {
    path:'/signup', element: <Signuppage/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
