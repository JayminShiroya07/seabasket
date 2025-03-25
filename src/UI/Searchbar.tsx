import React, { useEffect, useState } from "react";
import { categories, Category } from "../data/category";

const Searchbar : React.FC<{onToggle:()=>void}> = (props) => {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    setCategory(categories);
  }, [categories]);

  return (
    <div className="h-20 fixed w-full md:mt-0 bg-cyan-900 text-white flex items-center justify-between px-2 gap-1">
        <div className="flex items-center gap-4">
            <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={props.onToggle}>
                <i className="fas fa-filter"></i>
            </button>
        </div>
      <div className=" hidden md:flex items-center gap-4">

      </div>
      <div className="flex justify-end gap-2">
        <select
          name="category"
          id="category"
          className="bg-gray-700 text-white border border-gray-600 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {category.map((cat) => (
            <option
              key={cat.id}
              value={cat.id}
              className="bg-gray-700 text-white"
            >
              {cat.title}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search products..."
          className="bg-cyan-800 md:w-55 w-1/2 text-white border border-cyan-5 00 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        />
        <button className="bg-blue-500 text-white px-3 py-1 rounded" >
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}


export default Searchbar;