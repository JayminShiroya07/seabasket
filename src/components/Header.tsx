import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/Products" },
  { name: "Profile", path: "/profile" },
  { name: "Contact Us", path: "/contact-us" },
];

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const linkActive =
    "hover:text-gray-400 hover:bg-[#00C896] text-2xl text-black font-semibold py-1 px-6 rounded shadow-xl btn-primary transition-all duration-300 ease-in-out hover:scale-105";
  const unActive =
    "hover:bg-[#00C896] rounded text-2xl py-1 px-6 transition-all duration-300 ease-in-out transform hover:scale-105";

  return (
    <>
      {/* Desktop header (visible on large screens) */}
      <header className="bg-cyan-800 text-white hidden lg:flex justify-between gap-1 items-center px-14 w-full fixed top-0 z-50 shadow-2xl">
        <NavLink to="" className="flex items-center cursor-pointer">
          <img
            src={logo}
            alt="Logo of the site, a simple geometric shape"
            className="h-15 w-15 mr-2"
          />
          <span className="text-xl font-bold text-primary">Seabasket</span>
        </NavLink>
        <nav className="flex justify-between items-center gap-1 space-x-4">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) => (isActive ? linkActive : unActive)}
            >
              {name}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          {/* <NavLink to='cart' className="relative rounded cursor-pointer text-2xl py-1 px-3 bg-primary" > */}
          <NavLink
            to="cart"
            className={({ isActive }) =>
              `relative rounded cursor-pointer text-2xl py-1 px-3 ${
                isActive ? "bg-primary" : "bg-none"
              }`
            }
          >
            <i className="fas fa-shopping-cart"></i>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center">
              10
            </span>
          </NavLink>
          <NavLink
            to="login"
            className={({ isActive }) => (isActive ? linkActive : unActive)}
          >
            Login
          </NavLink>
        </div>
      </header>

      {/* Mobile/Tablet header (visible on screens smaller than lg) */}
      <div className="lg:hidden">
        <header className="bg-cyan-800 text-white p-4 flex justify-between items-center">
          <NavLink to="" className="flex items-center cursor-pointer">
            <img
              src={logo}   
              alt="Logo of the site, a simple geometric shape"
              className="h-11 w-11 mr-2"
            />
            <span className="text-xl font-bold">Seabasket</span>
          </NavLink>
          <div className="flex items-center space-x-4">
            <NavLink
              to="cart"
              className={({ isActive }) =>
                `relative rounded cursor-pointer text-2xl py-1 px-3 ${
                  isActive ? "bg-primary" : "bg-none"
                }`
              }
            >
              <i className="fas fa-shopping-cart"></i>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center">
                10
              </span>
            </NavLink>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white focus:outline-none"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </header>

        {/* Animated mobile sidebar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: sidebarOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50"
          style={{ pointerEvents: sidebarOpen ? "auto" : "none" }}
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: sidebarOpen ? 0 : "-100%" }}
            transition={{ duration: 0.3 }}
            className="bg-white w-64 h-full p-4"
          >
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-black border-cyan-800 border-2 px-3 py-2 bg-cyan-200 rounded-md text-2xl focus:outline-none mb-4"
            >
              <i className="fas fa-arrow-left"></i>
            </button>
            <nav className="flex flex-col space-y-4">
              {navItems.map(({ name, path }) => (
                <NavLink
                  key={name}
                  to={path}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    isActive ? linkActive : unActive
                  }
                >
                  {name}
                </NavLink>
              ))}
              <NavLink
                to="login"
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) => (isActive ? linkActive : unActive)}
              >
                Login
              </NavLink>
            </nav>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
