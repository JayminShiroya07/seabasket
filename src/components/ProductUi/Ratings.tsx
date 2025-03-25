import React from "react";

interface ChildNode {
    rating: number;
    children?: React.ReactNode;
}

const Ratings : React.FC<ChildNode> = (props) => {
    return (
        <>
            {(() => {
                const rating = props.rating ?? 0;
                const fullStars = Math.floor(rating);
                const halfStar = rating - fullStars >= 0.5;
                const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

                return (
                    <>
                        {Array.from({ length: fullStars }, (_, i) => (
                            <span key={`full-${i}`} style={{ color: "gold", fontSize: "1.2em" }}>★</span>
                        ))}
                        {halfStar && (
                            <span key="half" style={{ color: "gold", fontSize: "1.2em" }}>☆</span>
                        )}
                        {Array.from({ length: emptyStars }, (_, i) => (
                            <span key={`empty-${i}`} style={{ color: "lightgray", fontSize: "1.2em" }}>★</span>
                        ))}
                    </>
                );
            })()}
        </>
    );
}

export default Ratings;