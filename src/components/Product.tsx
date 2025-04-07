import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { motion } from "framer-motion";
import { type Product, products } from "../data/products";
import { useParams } from "react-router-dom";
import ProductList from "./ProductList";

export default function Product() {
  const [activeImage, setActiveImage] = useState(1);
  const [fetchedproduct, setFetchedProduct] = useState<Product>(products[0]);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const selectedProduct = products.find((prod) => prod.id === Number(id));
    if (selectedProduct) {
      setFetchedProduct(selectedProduct);
    }
  }, [id, products]);

  function handleImageClick(index: number) {
    setActiveImage(index);
  }


  return (
    <>
      <div className="flex h-fit flex-col gap-3 p-3 w-full ">
        <div className="rounded-lg p-6 h-full md:px-20">
          <ProductItem className="relative flex flex-col md:flex-row items-center w-full bg-rd-600 h-[70%]">
            <div className="md:w-2/3 h-full flex justify-center flex-col-reverse items-center gap-2">
              <div className="flex w-full gap-2 p-4 justify-center">
                {fetchedproduct.images.map((image, index) => (
                  <div
                    key={index}
                    className={`${
                      activeImage === index ? "border-3" : "border-[.5px]"
                    } cursor-pointer w-16 h-16 sm:w-20 sm:h-20 md:w-16 md:h-16 object-cover rounded-lg p-1 md:p-2 flex`}
                  >
                    <motion.img
                      onClick={() => handleImageClick(index)}
                      src={image}
                      alt={`Product Image ${index + 1}`}
                      className={`w-full h-full object-cover rounded-lg ${
                        activeImage === index ? "scale-110" : "scale-100"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </div>
                ))}
              </div>
                <div className="relative md:w-2/4 w-full h-full flex justify-center items-center">
                  <div className="w-full max-w-full">
                    <motion.img
                      src={fetchedproduct.images[activeImage]}
                      alt={fetchedproduct.title}
                      className="w-full h-auto object-cover rounded-lg"
                      key={activeImage} // Key ensures re-render for animation
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </div>
                </div>

            </div>
            <div className="md:w-2/3">
              <div className="w-full py-2 flex justify-between items-center  mb-2">
                <ProductItem.Title className="md:text-xl font-bold text-sm">
                  {fetchedproduct.title}
                </ProductItem.Title>
                <ProductItem.Button
                  icon="fa-regular fa-heart"
                  className="p-2 px-3 bg-white border-[1px]  text-red-500 rounded-full text-2xl"
                ></ProductItem.Button>
              </div>
              <ProductItem.Description className="text-gray-600 mb-4 text-sm line-clamp-4">
                {fetchedproduct.description}
              </ProductItem.Description>
              {fetchedproduct.available_qty > 0 ? (
                <div className="w-full flex items-center justify-between">
                  <ProductItem.Price
                    discount={fetchedproduct.discount}
                    className="text-xl font-bold"
                  >
                    {fetchedproduct.price}
                  </ProductItem.Price>
                  <ProductItem.Ratings
                    rating={fetchedproduct.rating}
                  ></ProductItem.Ratings>
                </div>
              ) : (
                <p>Out of Stock</p>
              )}
              {fetchedproduct.specifications.size?.length > 0 && (
                <>
                  <div className="self-start mt-2 capitalize">size</div>
                  <div className="w-full p-2 flex gap-2 items-center">
                    {fetchedproduct.specifications.size.map((sizes, index) => (
                      <div
                        key={index}
                        className="bg-gray-200 w-12 h-12 rounded-full border-[0.5px] border-black text-center flex justify-center items-center"
                      >
                        {sizes}
                      </div>
                    ))}
                  </div>
                </>
              )}
              {fetchedproduct.specifications.colors?.length > 0 && (
                <>
                  <div className="self-start mt-2 capitalize">colors</div>
                  <div className="w-full p-2 flex gap-2 items-center">
                    {fetchedproduct.specifications.colors.map(
                      (color, index) => (
                        <div
                          key={index}
                          style={{ backgroundColor: color }}
                          className="w-12 h-12 rounded-full border-[0.5px] border-black text-center flex justify-center items-center"
                        ></div>
                      )
                    )}
                  </div>
                </>
              )}

              <div className="w-full p-2 flex gap-3">
                <ProductItem.Button
                  type="buy"
                  className="w-full h-12 bg-transparent border-[2px] border-dark-green rounded-md text-xl"
                >
                  Buy Now
                </ProductItem.Button>
                <ProductItem.Button
                  type="cart"
                  className="w-full h-12 bg-teal border-[2px] bg- border-dark-green rounded-md text-xl text-white"
                  icon="fas fa-shopping-cart"
                >
                  Add to cart
                </ProductItem.Button>
              </div>
            </div>
          </ProductItem>
        </div>
        <div className="w-full border-[.5px] rounded-md overflow-hidden">
          <div className=" relative bg-teal h-12 text-center flex justify-center items-center text-2xl">
            Similar Products
          </div>
          <div className="md:overflow-scroll max-h-[calc(100%-3rem)] overflow-hidden border-[0.5px] [&::-webkit-scrollbar]:hidden">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-4">
              <ProductList products={products} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
