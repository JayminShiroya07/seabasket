import React from "react";
import { motion } from "framer-motion";

const Image : React.FC<{image : string, className : string }> = (props) => {
    return (
        
            <motion.img 
                whileHover={{ scale: 1.1 }} 
                src={props.image} 
                alt="product" 
                className={props.className} />
    );
}

export default Image;