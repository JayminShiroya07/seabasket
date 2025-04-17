import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductList from "../components/ProductList";
import FilterSidenav from "../UI/FilterSidenav";
import Searchbar from "../UI/Searchbar";
import { useAppDispatch } from "../store/slices";
import { fetchProducts, resetCategory } from "../store/slices/productSlice";
import { useSelector } from "react-redux";

export default function ProductLayout() {
  const dispatch = useAppDispatch();

  const {products,selectedCategory} = useSelector((state:any) => state?.product)

  useEffect(() => {
    dispatch(fetchProducts({categoryId: selectedCategory}));

    return () => {
      dispatch(resetCategory());
    }

  }, [dispatch])
  

  return (
    <div className="w-full md:mt-0 h-[calc(100vh-3.8rem)]">
      <Searchbar/>
      <div className="flex w-full flex-wrap bg-gray-20s0">
        <div className="w-full mt-16 flex gap-1">
          <div 
            className="w-full [&::-webkit-scrollbar]:hidden overflow-x-scroll max-h-[calc(100vh-7.9rem)]">
              <div className="overflow-auto">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
                  <ProductList products={products} />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
