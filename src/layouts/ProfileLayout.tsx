import { useState } from "react";
import { profileDetails } from "../data/modals/profileDetails";
import { products } from "../data/products";
import { NavLink, Outlet } from "react-router-dom";
import { motion } from "motion/react";

const MotionNavLink = motion(NavLink);

const DETAILS: Array<profileDetails> = [
  {
    title: "profile",
    items: [],
  },
  {
    title: "cart",
    items: products.slice(0, 4),
  },
  {
    title: "order",
    items: products.slice(3, 9),
  },
  {
    title: "wishlist",
    items: products.slice(2, 6),
  },
];

const ICONS = {
  profile: "fas fa-user",
  cart: "fas fa-shopping-cart",
  order: "fas fa-receipt",
  wishlist: "fas fa-heart",
};

export default function ProfileLayout() {
  const [selectedDetails, setSelectedDetails] = useState<profileDetails>(
    DETAILS[0]
  );
  const [isCollapsed, setIsCollapsed] = useState(false);

  function listChangeHandler(title: string = "cart") {
    const newDetail = DETAILS.find((detail) => detail.title === title);
    if (newDetail) {
      setSelectedDetails(newDetail);
    }
  }

  return (
    <div className="md:h-[calc(100vh-3.8rem)] flex flex-col md:flex-row gap-3 text-dark-green">
      <div className="text-black w-full flex md:hidden p-3">
        <h1 className="border-2 px-3 py-2 rounded ">
          <i className="fas fa-bars"></i>
        </h1>
      </div>
      <motion.div
        className="hidden md:block card rounded-md h-full"
        animate={{ width: isCollapsed ? 80 : 300 }} 
        transition={{ duration: 0.3 }}
      >
        <div className="border-2 h-full flex flex-col">
          <div className={`${isCollapsed ? 'justify-center' : 'justify-between'} p-3 border-b-2 flex items-center`}>
            {!isCollapsed && (
              <div>
                <h1 className="font-bold text-xl">Dashboard</h1>
                <p>Jaymeen Shiroya</p>
              </div>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="focus:outline-none border-2 px-3 py-2 rounded-md text-dark-green"
            >
              {isCollapsed ? (
                <i className="fas fa-bars"></i>
              ) : (
                <i className="fas fa-times"></i>
              )}
            </button>
          </div>
          <motion.ul
            className="flex flex-col p-3 gap-4 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {DETAILS.map((listItem) => (
              <MotionNavLink
                to={listItem.title}
                key={listItem.title}
                onClick={() => listChangeHandler(listItem.title)}
                whileHover={{ scale: 1.05 }}
                className="relative cursor-pointer px-5 py-4 flex items-center justify-center text-center text-2xl text-black shadow-lg rounded-lg transition"
              >
                {isCollapsed ? (
                  <i className={ICONS[listItem.title]}></i>
                ) : (
                  <span>{listItem.title}</span>
                )}
                {selectedDetails.title === listItem.title && (
                  <motion.div
                    className="absolute border-l-7 border-teal top-0 left-0 h-full bg-dark-green rounded-lg z-[-1]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </MotionNavLink>
            ))}
          </motion.ul>
          <div className="w-full self-end p-3">
            <h1 className="p-4 py-5 first-letter:capitalize bg-red-500 rounded-xl text-center text-white font-bold text-xl border-2">
              {isCollapsed ? (
                <i className="fas fa-sign-out-alt"></i>
              ) : (
                "Sign out"
              )}
            </h1>
          </div>
        </div>
      </motion.div>
      <div className="flex-1 p-2">
        <div className="h-full w-full border-2 rounded-xl">
          <h1 className="bg-dark-green text-white h-1/15 p-4 text-center text-2xl font-medium shadow-xl rounded-t-xl">
            {selectedDetails.title}
          </h1>
          <div className="w-full min-h-14/15 rounded-b-xl border-t-4 border-primary">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
