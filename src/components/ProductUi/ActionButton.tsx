import React from "react";
import { motion as m} from "framer-motion";


interface ChildNode {
  children?: React.ReactNode;
  type?: "cart" | "buy" | "wishlist";
  className?: string;
  icon?: string;
  text?: string;
}

const ActionButton: React.FC<ChildNode> = (props) => {

  return (
    <m.button 
        className={props.className}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.98, transition: { type: "spring", stiffness: 300, damping: 10 } }}
        {...(props.type === "wishlist" && {
            animate: { scale: [1, 1.2, 1], fill: "#F00" },
            transition: { duration: 0.5 }
        })}
    >
      <i className={props.icon}></i>
      {props.children}
    </m.button>
  );
};

export default ActionButton;
