import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/slices";
import { logout } from "../store/slices/userSlice";
import { emptyCart } from "../store/slices/cartSlice";
import { changeSelectedOption } from "../store/slices/uiSlice";

const linkActive =
  "bg-primary een text-2xl font-semibold py-1 px-6 rounded shadow-xl btn-primary transition-all duration-300 ease-in-out hover:scale-105";
const unActive =
  "hover:bg-teal bg-teal text-secondary rounded text-2xl py-1 px-6 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/Products" },
  { name: "Profile", path: "/my/profile" },
  { name: "Contact Us", path: "/contact-us" },
];

export default function Header() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isLoggedIn = useSelector((state: any) => state?.user.isLoggedIn);
  const { profile } = useSelector((state: any) => state.user);
  const { cart_data } = useSelector((state: any) => state?.cart);
  const dispatch = useAppDispatch();

  function onLogout() {
    const Comfirm = confirm("Are you sure..?");
    isLoggedIn;

    if (Comfirm) {
      if (isLoggedIn) {
        dispatch(emptyCart());
        dispatch(logout());
      }
    }
  }

  function onOptionChange(option: string) {
    dispatch(changeSelectedOption(option));
    switch (option) {
      case "profile":
        navigate("/my/profile");
        break;
      case "cart":
        navigate("/my/cart");
        break;
      case "orders":
        navigate("/my/order");
        break;
      case "login":
        isLoggedIn ? onLogout() : navigate("/login");
        break;
    }
  }

  return (
    <>
      <header className="bg-dark-green text-white hidden lg:flex justify-between gap-1 items-center px-14 w-full fixed top-0 z-40 shadow-2xl">
        <NavLink to="" className="flex items-center cursor-pointer">
          <img
            src={logo}
            alt="Logo of the site, a simple geometric shape"
            className="h-15 w-15 mr-2"
          />
          <span className="text-2xl font-bold text-white">Seabasket</span>
        </NavLink>

        <div className="flex items-center space-x-4">
          <div className="bg-white flex border-[1px] border-black rounded overflow-hidden">
            <label className="" htmlFor="searchBox">
              <i className="fas fa-search text-black p-3 border-r-[0.5px] bg-gray-400"></i>
            </label>
            <input
              type="text"
              id="searchBox"
              className="px-3 outline-none py-2 text-black bg-white rounded-md"
              placeholder="Search Products"
            ></input>
          </div>

          <div className="relative text-black">
            <button
              className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("userDropdown")
                  ?.classList.toggle("hidden")
              }
            >
              <img
                src={
                  isLoggedIn
                    ? profile.profilePic
                    : "https://ui-avatars.com/api/?name=Guest&background=0D8ABC&color=fff"
                }
                alt="Profile"
                className="h-8 w-8 rounded-full border-2 border-teal object-cover"
              />
              <span className="text-lg font-semibold">
                {isLoggedIn ? `${profile?.name}` : "Guest"}
              </span>
              <i className="fas fa-chevron-down"></i>
            </button>

            <div
              id="userDropdown"
              className="hidden absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50"
            >
              {isLoggedIn && (
                <>
                  <button
                    onClick={() => {
                      document
                        .getElementById("userDropdown")
                        ?.classList.add("hidden");
                      onOptionChange("profile");
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-all duration-200 rounded-t-lg"
                  >
                    <i className="fas fa-user mr-2"></i> Profile
                  </button>
                  <button
                    onClick={() => {
                      document
                        .getElementById("userDropdown")
                        ?.classList.add("hidden");
                      onOptionChange("cart");
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-all duration-200"
                  >
                    <i className="fas fa-shopping-cart mr-2"></i> Cart
                  </button>
                  <button
                    onClick={() => {
                      document
                        .getElementById("userDropdown")
                        ?.classList.add("hidden");
                      onOptionChange("orders");
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-all duration-200"
                  >
                    <i className="fas fa-box mr-2"></i> Orders
                  </button>
                </>
              )}
              <button
                onClick={() => {
                  document
                    .getElementById("userDropdown")
                    ?.classList.add("hidden");
                  onOptionChange("login");
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-all duration-200 rounded-b-lg text-red-600"
              >
                <i
                  className={`fas ${
                    isLoggedIn ? "fa-sign-out-alt" : "fa-sign-in-alt"
                  } mr-2`}
                ></i>
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </div>
          </div>

          <NavLink
            to="my/Cart"
            className={({ isActive }) =>
              `relative rounded cursor-pointer text-2xl py-1 px-3 ${
                isActive ? "bg-primary text-white bg-secondary " : "bg-none"
              }`
            }
          >
            <i className="fas fa-shopping-cart"></i>
            {cart_data.cart_item.length ? (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center">
                {cart_data.cart_item.length}
              </span>
            ) : null}
          </NavLink>
        </div>
      </header>

      <div className="lg:hidden">
        <header className="fixed top-0 left-0 right-0 z-50 bg-dark-green text-white p-4 flex justify-between items-center">
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
              to="my/Cart"
              className={({ isActive }) =>
                `relative rounded cursor-pointer text-2xl py-1 px-3 text-white ${
                  isActive ? "bg-dark-green text-secondary " : "bg-none"
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
            className="bg-dark-green w-64 h-full p-4"
          >
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-black bg-secondary shadow-md border-2 px-3 py-2 bg-se rounded-md text-2xl focus:outline-none mb-4"
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
                onClick={() => {
                  setSidebarOpen(false);
                  {
                    isLoggedIn ? dispatch(logout()) : "";
                  }
                }}
                className={({ isActive }) => (isActive ? linkActive : unActive)}
              >
                {!isLoggedIn ? "Logout" : "Logout"}
              </NavLink>
            </nav>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
