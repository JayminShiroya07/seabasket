import { motion } from "motion/react";

export default function Loader() {
  return (
    <>
    <div className="fixed z-50 inset-0 bg-[#000000bf] flex justify-center items-center">
      <div className="absolute h-40 w-40 box-border bg-red-0 flex gap-2 p-2 ">
        <motion.div
          className="h-20 w-5 bg-teal rounded-full"
          animate={{ scaleY: [1, 2, 1] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="h-20 w-5 bg-dark-green rounded-full"
          animate={{ scaleY: [1, 2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.1 }}
        ></motion.div>
        <motion.div
          className="h-20 w-5 bg-teal rounded-full"
          animate={{ scaleY: [1, 2, 1] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", delay: 0.2 }}
        ></motion.div>
        <motion.div
          className="h-20 w-5 bg-dark-green rounded-full"
          animate={{ scaleY: [1, 2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.3 }}
        ></motion.div>
        <motion.div
          className="h-20 w-5 bg-teal rounded-full"
          animate={{ scaleY: [1, 2, 1] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", delay: 0.4 }}
        ></motion.div>
      </div>
    </div>
    </>
  );
}
