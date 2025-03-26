import shoes from "../assets/homePageImage/shoes.png";
import watch from "../assets/homePageImage/watch.png";
import laptop from "../assets/homePageImage/laptop.png";
import mobile from "../assets/homePageImage/mobile.png";
import woman from "../assets/homePageImage/woman-clothes.png";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { categories, Category } from "../data/category";

export default function HomePage() {
  const images = [shoes, watch, laptop, mobile, woman];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fatchedCategories, setFatchedCategories] = useState<Category[]>([]);

  useEffect(() => {
    setFatchedCategories(categories);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="home w-full md:h-[calc(100vh-400px)] flex flex-col p-10 md:flex-row-reverse">
        <div className="md:w-1/2 w-full p-3 min-h-2/4 flex justify-center items-center">
          <div className="w-full h-full flex justify-start gap-2 p-5">
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
                src={images[currentImageIndex]}
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
              quidem?
            </p>
            <button className="btn-primary mt-4">Shop Now</button>
          </div>
        </div>
      </section>

      {/* category section */}
      <h2 className="text-center p-3 text-4xl font-bold">Our Categories</h2>
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
    </>
  );
}
