import { useEffect, useState } from "react";
import { Product, products } from "../../data/products";
import ProductItem from "../ProductItem";
import ProductList from "../ProductList";

export default function Wishlist() {
  const [fevoriteProducts, setFevoriteProducts] = useState<Product[]>([]);

  useEffect(() => {
    setFevoriteProducts(products.slice(4, 18));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-white shadow-lg rounded-b">
        <ProductList products={fevoriteProducts} />
      </div>
    </>
  );
}
