import React from "react";
import Title from "./ProductUi/Title";
import Image from "./ProductUi/Image";
import Description from "./ProductUi/Description";
import Quantity from "./ProductUi/Quantity";
import Price from "./ProductUi/Price";
import ActionButton from "./ProductUi/ActionButton";
import Ratings from "./ProductUi/Ratings";


interface ProductItemProps {
    children?: React.ReactNode;
    className?: string;
}

interface ProductItemCompound extends React.FC<ProductItemProps> {
    Title: typeof Title;
    Image: typeof Image;
    Description: typeof Description;
    Qty: typeof Quantity;
    Price: typeof Price;
    Button: typeof ActionButton;
    Ratings : typeof Ratings;
}

const ProductItem: ProductItemCompound = ({ children, className }) => {
    return <div className={className}>{children}</div>;
};

ProductItem.Title = Title;
ProductItem.Image = Image;
ProductItem.Description = Description;
ProductItem.Qty = Quantity;
ProductItem.Price = Price;
ProductItem.Button = ActionButton;
ProductItem.Ratings = Ratings;

export default ProductItem;