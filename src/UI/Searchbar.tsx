import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../store/slices";
import { searchProducts, setLoading } from "../store/slices/productSlice";

const sortingArray = [
  { id: 1, title: "Newest", value: "new", field: "createdAt" },
  { id: 2, title: "Price: Low to High", value: "ascending", field: "price" },
  { id: 3, title: "Price: High to Low", value: "descending", field: "price" },
];

const discountArray = [
  { id: 1, dis: "10" },
  { id: 2, dis: "30" },
  { id: 3, dis: "50" },
  { id: 4, dis: "70" },
  { id: 5, dis: "90" },
];

const Searchbar: React.FC = () => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [price_min, setMinPrice] = useState("");
  const [price_max, setMaxPrice] = useState("");
  const [rating, setRating] = useState("");
  const [discount, setDiscount] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [queryString, setQueryString] = useState("");

  const [category, setCategory] = useState<
    { id: number; title: string; value: string; field: string }[]
  >([]);

  useEffect(() => {
    setCategory(sortingArray);
  }, []);

  useEffect(() => {
    const queryParts: string[] = [];

    if (name) {
      queryParts.push(`product_name=${name}`);
    }
    if (price_min) {
      queryParts.push(`price_min=${price_min}`);
    }
    if (price_max) {
      queryParts.push(`price_max=${price_max}`);
    }
    if (rating) {
      queryParts.push(`rating=${rating}`);
    }
    if (discount) {
      queryParts.push(`discount=${discount}`);
    }
    if (sortBy) {
      queryParts.push(`sort_by=${sortBy}`);
    }
    if (sortOrder) {
      queryParts.push(`sort_order=${sortOrder}`);
    }

    const query = queryParts.join("&");
    setQueryString(query);

    dispatch(setLoading());
    const timeout = setTimeout(() => {
      dispatch(searchProducts(query));
    }, 400);


    return () => {
      clearTimeout(timeout)
    }

  }, [name, price_min, price_max, rating, discount, sortBy, sortOrder]);

  function onSortProduct(val: string) {
    const selected = sortingArray.find((s) => s.value === val);
    if (!selected) return;

    setSortBy(selected.field);
    setSortOrder(val);
    dispatch(searchProducts(queryString));
  }

  return (
    <div className="h-fit py-4 bg-white fixed w-full md:mt-0 bg-secondary shadow-xl z-20 text-white flex flex-wrap items-center justify-between px-4 gap-3">
      <select
        onChange={(e) => onSortProduct(e.target.value)}
        className="bg-white border text-gray-800 border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
        value={sortOrder}
      >
        <option value="">Sort by</option>
        {category.map((cat) => (
          <option key={cat.id} value={cat.value}>
            {cat.title}
          </option>
        ))}
      </select>

      <select
        onChange={(e) => setDiscount(e.target.value)}
        className="bg-white border text-gray-800 border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
        value={discount}
      >
        <option value="">Discount</option>
        {discountArray.map((disc) => (
          <option value={disc.dis} key={disc.id}>
            {disc.dis}%
          </option>
        ))}
      </select>

      <select
        onChange={(e) => setRating(e.target.value)}
        className="bg-white border text-gray-800 border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
        value={rating}
      >
        <option value="">Rating</option>
        <option value="5">5 ★</option>
        <option value="4">4 ★ & up</option>
        <option value="3">3 ★ & up</option>
        <option value="2">2 ★ & up</option>
        <option value="1">1 ★ & up</option>
      </select>

      <input
        type="number"
        placeholder="Min Price"
        value={price_min}
        onChange={(e) => setMinPrice(e.target.value)}
        className="bg-white text-black border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        placeholder="Max Price"
        value={price_max}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="bg-white text-black border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
      />

      {/* <input
        type="text"
        placeholder="Search products..."
        value={name}
        onChange={(e) => setName(e.target.value || '')}
        className="bg-white text-black border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
      /> */}
    </div>
  );
};

export default Searchbar;
