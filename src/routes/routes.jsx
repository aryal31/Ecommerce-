
import Contactpage from '../Pages/Contactpage'
import Errorpage from '../Pages/Errorpage'
import Homepage from '../Pages/Homepage'
import Layout from '../Pages/Layout'
import Loginpage from '../Pages/Loginpage'
import Signuppage from '../Pages/Signuppage'
import CartPage from '../Pages/CartPage'
import Wishlistpage from '../Pages/Wishlistpage'
import Aboutpage from '../Pages/Aboutpage'
import { createBrowserRouter } from 'react-router-dom'
import CheckOutPage from '../Pages/CheckOutPage'
import Myaccount from '../Pages/Myaccount'


  const router = createBrowserRouter([{
    path: '/', element : <Layout/>,
    errorElement: <Errorpage/>,
    children: [{index: true, element:<Homepage/>},
      {path: "login",element: <Loginpage/>},
      {path: "signup",element: <Signuppage/>},
      {path: 'contact', element: <Contactpage/>},       
      {path: 'cart', element: <CartPage/>},
      {path: 'wishlist', element: <Wishlistpage/>},
      {path: 'about', element: <Aboutpage/>},
      {path: 'checkout', element: <CheckOutPage/>},
      {path: 'account', element:<Myaccount/>}
    ]
  }])


export default router