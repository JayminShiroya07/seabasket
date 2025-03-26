import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductList from "../components/ProductList";
import FilterSidenav from "../UI/FilterSidenav";
import Searchbar from "../UI/Searchbar";

export default function ProductLayout() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleFilter() {
    setIsVisible(!isVisible);
  }

  // Animations for the filter sidebar
  const filterVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="w-full md:mt-0 h-[calc(100vh-3.8rem)]">
      <Searchbar onToggle={toggleFilter} />
      <div className="flex w-full flex-wrap bg-gray-20s0">
        <div className="w-full mt-16 flex gap-1">
          <AnimatePresence>
            {isVisible && (
              <motion.div
                className="w-3/5 md:w-1/5 md:relative fixed h-full [&::-webkit-scrollbar]:hidden"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={filterVariants}
                transition={{ duration: 0.3 }}
              >
                <FilterSidenav />
              </motion.div>
            )}
          </AnimatePresence>
          <div 
            className={`${isVisible ? "md:w-4/5" : "w-full"} [&::-webkit-scrollbar]:hidden overflow-x-scroll max-h-[calc(100vh-7.9rem)]`}>
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}
