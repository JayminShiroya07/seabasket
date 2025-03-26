import shoes from "../assets/homePageImage/shoes.png";
import watch from "../assets/homePageImage/watch.png";
import laptop from "../assets/homePageImage/laptop.png";
import mobile from "../assets/homePageImage/mobile.png";
import woman from "../assets/homePageImage/woman-clothes.png";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HomePage() {
  const images = [shoes, watch, laptop, mobile, woman];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* home section */}
      <section className="home w-full h-[calc(100vh-100px)] flex flex-col p-10 md:flex-row-reverse">
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
            {/* // <img src={images[currentImageIndex-1]}  alt="" className='absolute opacity-5'/>
                // <img src={images[currentImageIndex]}  alt="" className='relative bg-amber-200' />
                // <img src={images[currentImageIndex+1]}  alt="" className='absolute opacity-5'/> */}
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
      <section className="w-full bg-amber-50">
        <div>hello</div>
      </section>
    </>
  );
}
