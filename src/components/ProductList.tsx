import { useEffect, useState } from "react";
import { products as initialProducts, Product } from "../data/products";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts]);

  return (
    <div className="overflow-auto">
      <div className="flex w-full flex-wrap p-2 justify-evenly">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            className="w-full sm:w-1/2 md:w-1/3 p-2 flex overflow-hidden bg-transparent transition-shadow"
          >
            <div className="border hover:shadow-xl bg-transparent rounded-md md:flex gap-2 w-full overflow-hidden shadow-gray-200">
              <ProductItem.Image
                image={product.image}
                className=" w-full h-60 md:h-auto md:w-auto rounded-r-md rounded-bl-none cursor-pointer"
              />
              <div className="flex flex-col justify-between p-4 w-full">
                {/* Title */}
                <ProductItem.Title className="text-xl font-bold text-gray-900">
                  {product.title}
                </ProductItem.Title>

                {/* Description, Price, and Rating */}
                <div className="flex flex-col gap-2">
                  <ProductItem.Description className="text-gray-600 text-sm">
                    {product.description}
                  </ProductItem.Description>
                  <ProductItem.Price className="text-lg font-semibold text-gray-900">
                    {product.price}
                  </ProductItem.Price>

                  {/* Ratings */}
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <ProductItem.Ratings rating={product.rating} />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 w-full mt-4">
                  {/* Add to Cart Button */}
                  <ProductItem.Button
                    type="cart"
                    className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    icon="fas fa-shopping-cart"
                  />

                  {/* Buy Now Button */}
                  <ProductItem.Button
                    type="buy"
                    className="flex-1 h-12 text-blue-600 border-2 border-blue-600 bg-white rounded-lg hover:bg-blue-100 transition flex items-center justify-center font-semibold"
                  >
                    Buy Now
                  </ProductItem.Button>

                  {/* Wishlist Button */}
                  <ProductItem.Button
                    type="wishlist"
                    className="w-12 h-12 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 transition"
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
