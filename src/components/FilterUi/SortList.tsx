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
    <div className="w-full">
      <label className="text-gray-800 font-bold">Sort</label>
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
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
