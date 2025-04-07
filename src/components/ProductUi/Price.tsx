import React from "react";

interface PriceProps {
  children: number | string | String; // Ensure children is a number or string that can be converted to a number
  className?: string;
  discount?: number; // Discount is optional
}

const Price: React.FC<PriceProps> = ({ children, className, discount = 0 }) => {
  const originalPrice = Number(children);
  const discountedPrice = discount
    ? (originalPrice - (originalPrice * discount) / 100).toFixed(2)
    : originalPrice.toFixed(2);

return (
    <div className={className}>
        {discount > 0 ? (
            <div className="flex gap-3 items-center">
                <del className="text-sm text-gray-500">₹{originalPrice.toFixed(2)}</del>
                <span className="text-xl font-extrabold ">₹{discountedPrice}</span>
                <span className="text-green-500 text-sm">({discount}% off)</span>
            </div>
        ) : (
            <span className="text-lg font-semibold">₹{discountedPrice}</span>
        )}
    </div>
);
};

export default Price;
