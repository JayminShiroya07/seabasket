import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { categories, Category } from "../data/category";
import ProductItem from "./ProductItem";
import { images as categoryImage, productImages } from "../data/images";

export default function HomePage() {
  const images = categoryImage;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fatchedCategories, setFatchedCategories] = useState<Category[]>([]);
  const [trandingProducts, setTrandingProducts] = useState<String[]>([]);

  function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  useEffect(() => {
    setFatchedCategories(categories);
    const interval = setInterval(() => {
      setTrandingProducts(shuffleArray(productImages).slice(0, 5));
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="home w-full md:h-[calc(100vh-400px)] flex flex-col p-10 md:flex-row-reverse">
        <div className="md:w-1/2 w-full p-3 min-h-2/4 flex justify-center items-center">
          <div className="w-full h-full flex justify-center gap-2 p-5">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                initial={{
                  opacity: 0,
                  rotate: 20,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 20,
                  scale: 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                src={categoryImage[currentImageIndex]}
                alt=""
                className="drop-shadow-2xl bg-cover"
              />
            </AnimatePresence>
          </div>
        </div>
        <div className=" flex flex-col w-full md:w-1/2 justify-center items-end h-full">
          <div className="home-content w-full text-center">
            <h1 className="text-2xl md:text-5xl font-bold">New Collection</h1>
            <p className="md:text-2xl mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
              quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Unde eos illo provident esse voluptatibus possimus, iure ducimus
              consequatur explicabo quaerat!
            </p>
            <button className="btn-primary mt-4">Shop Now</button>
          </div>
        </div>
      </section>

      {/* category section */}
      <h2 className="text-center p-3 text-4xl font-bold">Categories</h2>
      <section className="w-full p-6 overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
        >
          {[...fatchedCategories, ...fatchedCategories].map(
            (category, index) => (
              <div
                key={index}
                className="bg-white shadow-lg border-2 rounded-xl overflow-hidden min-w-[250px] max-w-[300px] transform transition duration-300 hover:scale-105"
              >
                <div className="w-full h-48 flex items-center justify-center">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="p-4 bg-primary text-white text-center">
                  <h2 className="text-lg font-semibold">{category.title}</h2>
                </div>
              </div>
            )
          )}
        </motion.div>
      </section>

      {/* tranding section */}
      <h2 className="text-center p-3 mt-12 text-4xl font-bold">
        Trending Products
      </h2>
      <section className="w-full mb-30 p-5">
        <div className="flex md:flex-row flex-col gap-5">
          {trandingProducts.map((img, index) => (
            <ProductItem
              key={index}
              className="rounded-md border-2 w-full min-h-fit overflow-hidden md:w-1/4"
            >
              <div className="h-1/6 w-full  bg-primary items-center p-2 flex justify-between">
                <ProductItem.Title className="text-2xl text-center text-secondary font-bold">
                  Title
                </ProductItem.Title>
                <ProductItem.Button
                  className="w-12 h-12 flex items-center justify-center text-white text-2xl rounded-full hover:bg-red-600 hover:text-white transition"
                  icon="fas fa-heart"
                />
              </div>
              <div className="h-5/6 w-full overflow-hidden flex justify-center items-center">
                <ProductItem.Image
                    image={img.toString()}
                    className="h-fit w-full object-contain"
                    />
              </div>
              <div className="h-1/6 border-t-2 px-3 py-1 flex justify-between items-center">
                <ProductItem.Price className="font-bold text-2xl">
                  123
                </ProductItem.Price>
                <ProductItem.Button
                  className="p-2 rounded outline-1 outline-blue-400 hover:bg-[#1E40AF] hover:text-white"
                  type="buy"
                >
                  But Now
                </ProductItem.Button>
              </div>
            </ProductItem>
          ))}
        </div>
      </section>
    </>
  );
}
