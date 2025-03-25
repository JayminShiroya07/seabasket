import React from "react";

interface ChildNode {
    children?: React.ReactNode;
    className?: string;
}

const Price : React.FC<ChildNode> = (props) => {
    return (
        <h2 className={props.className}>₹{props.children}</h2>
    );
}

export default Price;