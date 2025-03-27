import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import HomePage from './components/HomePage'
import Profile from './components/Profile'
import ContactUs from './components/ContactUs'
import Login from './components/Login'
import CartList from './components/CartList'
import ProductLayout from './layouts/ProducLayout'
import Signup from './components/Signup'


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
          path: 'profile',
          element: <Profile/>
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
        {
          path: 'cart',
          element: <CartList/>
        }
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
