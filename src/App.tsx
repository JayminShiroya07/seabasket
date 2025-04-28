import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./components/HomePage";
import Profile from "./components/userdashboard/Profile";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import ProductLayout from "./layouts/ProducLayout";
import Signup from "./components/Signup";
import ProfileLayout from "./layouts/ProfileLayout";
import Cart from "./components/userdashboard/Cart";
import Orders from "./components/userdashboard/Orders";
import Wishlist from "./components/userdashboard/Wishlist";
import Product from "./components/Product";
import { Provider } from "react-redux";
import store, { persistor } from "./store/slices";
import ChangePassword from "./components/ChangePassword";
import ForgotPassword from "./components/FotgotPasword";
import ResetMail from "./components/ResetMail";

import { PersistGate } from "redux-persist/integration/react";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <></>,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "products",
          element: <ProductLayout />,
        },
        {
          path: "my",
          element: (
              <ProfileLayout />
          ),
          children: [
            {
              path: "profile",
              element: (
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              ),
            },
            {
              path: "cart",
              element: <Cart />,
            },
            {
              path: "order",
              element: <Orders />,
            },
            {
              path: "wishlist",
              element: <Wishlist />,
            },
          ],
        },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "products/:id",
          element: <Product />,
        },
        {
          path: "ChangePassword",
          element: (
            <ProtectedRoute>
              <ChangePassword />,
            </ProtectedRoute>
          ),
        },
        {
          path: "reset-password",
          children: [
            {
              index: true,
              element: <ResetMail />,
            },
            {
              path: ":token",
              element: <ForgotPassword />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
