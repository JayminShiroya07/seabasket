import React from "react";
import { motion } from "motion/react";


interface ChildNode {
  children?: React.ReactNode;
  className?: string;
  type?: 'submit' | 'button' | 'reset';
  name?: string;
  icon?: string;
  animation?: boolean;
}

const Button: React.FC<ChildNode> = (props) => {
return (
    <motion.button 
        whileHover={{
            scale: 1.1,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.7)",
            transition: { duration: 0.1 }  // Faster hover transition
        }}
        whileTap={{
            scale: 0.99,
            boxShadow: "0 2px 15px rgba(0, 0, 0, 0.7)",
            transition: { duration: 0.05 }  // Faster tap transition
        }}
        type={props.type} 
        className={props.className} 
        name={props.name}
    >
        {props.icon && <i className={props.icon}></i>}&nbsp;
        {props.name}
    </motion.button>
);
};

export default Button;
