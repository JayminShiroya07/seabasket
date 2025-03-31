import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import HomePage from './components/HomePage'
import Profile from './components/userdashboard/Profile'
import ContactUs from './components/ContactUs'
import Login from './components/Login'
import ProductLayout from './layouts/ProducLayout'
import Signup from './components/Signup'
import ProfileLayout from './layouts/ProfileLayout'
import Cart from './components/userdashboard/Cart'
import Orders from './components/userdashboard/Orders'
import Wishlist from './components/userdashboard/Wishlist'


function App() {

  const router = createBrowserRouter([
    {
      path: '/', 
      element: <MainLayout />,
      children:[
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'products',
          element: <ProductLayout/>
        },
        {
          path: 'my',
          element: <ProfileLayout/>,
          children:[
            {
              path: 'profile',
              element:<Profile/>
            },
            {
              path: 'cart',
              element: <Cart/>
            },
            {
              path:'order',
              element:<Orders/>
            },
            {
              path:'wishlist',
              element:<Wishlist/>
            }

          ]
        },
        {
          path: 'contact-us',
          element: <ContactUs/>
        },
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: 'signup',
          element: <Signup/>
        },
      ]
    },

  ])

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
