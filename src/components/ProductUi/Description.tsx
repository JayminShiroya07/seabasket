import React from "react";

type ChildNode = {
    children?: React.ReactNode;
    className?: string;
}

const Description : React.FC<ChildNode> = (props) => {
    return (
        <p className={props.className}>{props.children}</p>
    );
}

export default Description;