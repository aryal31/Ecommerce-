import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import router from './routes/routes.jsx'

import App from './App.jsx'
import './index.css'
import Loginpage from './Pages/Loginpage.jsx'
import Signuppage from './Pages/Signuppage.jsx'

import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
