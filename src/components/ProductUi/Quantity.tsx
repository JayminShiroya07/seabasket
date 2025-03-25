import React from "react";

interface ChildNode {
    children?: React.ReactNode;
}

const Quantity : React.FC<ChildNode> = (props) => {
    return (
        <div>
        <h2>{props.children}</h2>
        <p>product Quantity</p>
        </div>
    );
}

export default Quantity;