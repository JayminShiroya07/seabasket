import React from "react";

interface ChildNode {
    children?: React.ReactNode;
    className?: string;
}

const Description : React.FC<ChildNode> = (props) => {
    return (
        <p className={props.className}>{props.children}</p>
    );
}

export default Description;