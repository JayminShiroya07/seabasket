import { useEffect, useState } from "react";
import { products as initialProducts, Product } from "../data/products";
import ProductItem from "./ProductItem";
import { prod } from "@tensorflow/tfjs";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts]);

  return (
    <div className="overflow-auto">
      <div className="flex w-full  flex-wrap p-3">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            className="w-full sm:w-1/2 md:w-1/3 p-2"
          >
            <div className="border rounded-md md:flex gap-2 w-full overflow-hidden">
              <ProductItem.Image
                image={product.image}
                className="bg-red-400 w-full md:w-auto rounded-r-md rounded-bl-none cursor-pointer"
              />
              <div className="flex flex-col justify-between p-2 w-full">
                <ProductItem.Title>{product.title}</ProductItem.Title>
                <ProductItem.Description>
                  {product.description}
                </ProductItem.Description>
                <ProductItem.Price>{product.price}</ProductItem.Price>
                <div>
                  <ProductItem.Ratings rating={product.rating} />
                </div>
                <div className="flex gap-2 w-full justify-between">
                  <ProductItem.Button
                    type="cart"
                    className="w-1/5 h-12 cursor-pointer text-primary bg-cyan-800 rounded"
                    icon="fas fa-shopping-cart"
                  />
                  <ProductItem.Button
                    type="buy"
                    className="w-3/5 h-12 cursor-pointer text-white bg-cyan-800 rounded"
                  >
                    Buy now
                  </ProductItem.Button>
                  <ProductItem.Button
                    type="wishlist"
                    className="w-1/5 h-12 cursor-pointer text-white bg-cyan-800 rounded"
                    icon="fas fa-heart"
                  />
                </div>
              </div>
            </div>
          </ProductItem>
        ))}
      </div>
    </div>
  );
}
