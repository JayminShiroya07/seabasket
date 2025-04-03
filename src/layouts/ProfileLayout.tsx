import { useState, useEffect } from "react";
import { profileDetails } from "../data/modals/profileDetails";
import { products } from "../data/products";
import { NavLink, Outlet } from "react-router-dom";
import { motion } from "motion/react";

const MotionNavLink = motion(NavLink);

const DETAILS: Array<profileDetails> = [
  {
    title: "Profile",
    items: [],
  },
  {
    title: "Cart",
    items: products.slice(0, 4),
  },
  {
    title: "Order",
    items: products.slice(3, 9),
  },
  {
    title: "Wishlist",
    items: products.slice(2, 6),
  },
];

const ICONS = {
  Profile: "fas fa-user",
  Cart: "fas fa-shopping-cart",
  Order: "fas fa-receipt",
  Wishlist: "fas fa-heart",
};

export default function ProfileLayout() {
  const [selectedDetails, setSelectedDetails] = useState<profileDetails>(DETAILS[0]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Determine screen size to adjust layout and animations.
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  function listChangeHandler(title: string = "cart") {
    const newDetail = DETAILS.find((detail) => detail.title === title);
    if (newDetail) {
      setSelectedDetails(newDetail);
    }
  }

  return (
    // Stack vertically on mobile, side-by-side on md+
    <div className="flex flex-col md:flex-row gap-3 h-[calc(100vh-3.5rem)] md:h-[calc(100vh-3.78rem)]">
      <motion.div
        className="card rounded-md"
        // On mobile always full width; on desktop animate width when collapsed.
        animate={{ width: isMobile ? "100%" : isCollapsed ? 80 : 300 }}
        transition={{ duration: 0.3 }}
      >
        <div className="border-r-0 md:border-r-2 h-full flex flex-col">
          <div
            className={`flex ${isCollapsed ? "justify-center" : "md:justify-between"} p-3 md:flex items-center`}
          >
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
            className="flex flex-row md:flex-col p-3 gap-4 h-full overflow-auto"
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
            <h1 className="p-4 py-4 cursor-pointer capitalize bg-red-500 rounded-xl text-center text-white font-bold text-xl border-2">
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
        <div className="h-full w-full border-2 rounded-xl overflow-hidden flex flex-col">
          <h1 className="bg-dark-green flex justify-center items-center text-white p-4 text-center md:text-2xl font-medium shadow-xl">
            {selectedDetails.title}
          </h1>
          <div className="w-full flex-1 p-4 border-t-4 overflow-auto  [&::-webkit-scrollbar]:hidden">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
