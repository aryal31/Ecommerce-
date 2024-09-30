
import Contactpage from '../Pages/Contactpage'
import Errorpage from '../Pages/Errorpage'
import Homepage from '../Pages/Homepage'
import Layout from '../Pages/Layout'
import Loginpage from '../Pages/Loginpage'
import Signuppage from '../Pages/Signuppage'
import { createBrowserRouter } from 'react-router-dom'


  const router = createBrowserRouter([{
    path: '/', element : <Layout/>,
    errorElement: <Errorpage/>,
    children: [{index: true, element:<Homepage/>},
      {path: "login",element: <Loginpage/>},
      {path: "signup",element: <Signuppage/>},
      {path: 'contact', element: <Contactpage/>},       
      {path: ''}
    ]
  }])


export default router