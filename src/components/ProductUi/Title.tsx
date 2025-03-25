import React from "react";

interface ChildNode {
    children?: React.ReactNode;
}

const Title : React.FC<ChildNode> = (props) => {
    return (
        <h2 className="text-2xl font-bold text-gray-900">{props.children}</h2>
    );
}

export default Title;