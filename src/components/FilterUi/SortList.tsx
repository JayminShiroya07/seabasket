import { useEffect, useState } from "react";

const sortingArray = [
  { id: 1, title: "Newest" },
  { id: 2, title: "Price: Low to High" },
  { id: 3, title: "Price: High to Low" },
  { id: 4, title: "Best Selling" },
];

export default function SortList() {
  const [category, setCategory] = useState<{ id: number; title: string }[]>([]);
  useEffect(() => {
    setCategory(sortingArray);
  }, [sortingArray]);
  return (
    <div className="w-full flex gap-3">
      <div className="relative">
        <select
          name="category"
          id="category"
          className="block w-full appearance-none bg-white border border-gray-300 px-4 py-3 pr-10 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
        >
          {category.map((cat) => (
            <option
              key={cat.id}
              value={cat.id}
              className="bg-white text-gray-800"
            >
              {cat.title}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
          <i className="fas fa-angle-down"></i>
        </div>
      </div>
    </div>
  );
}
