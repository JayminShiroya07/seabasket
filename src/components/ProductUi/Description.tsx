import React from "react";

interface ChildNode {
    children?: React.ReactNode;
}

const Description : React.FC<ChildNode> = (props) => {
    return (
        <h2 className="font-light text-gray-800">{props.children}</h2>
    );
}

export default Description;