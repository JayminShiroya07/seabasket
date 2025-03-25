import React from "react";

interface ChildNode {
    children?: React.ReactNode;
}

const Price : React.FC<ChildNode> = (props) => {
    return (
        <h2>₹{props.children}</h2>
    );
}

export default Price;