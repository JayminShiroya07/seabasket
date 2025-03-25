import React from "react";
import Title from "./ProductUi/Title";
import Image from "./ProductUi/Image";
import Description from "./ProductUi/Description";
import Quantity from "./ProductUi/Quantity";
import Price from "./ProductUi/Price";
import ActionButton from "./ProductUi/ActionButton";
import Ratings from "./ProductUi/Ratings";


interface ProductDetailProps {
    children?: React.ReactNode;
    className?: string;
}

interface ProductDetailCompound extends React.FC<ProductDetailProps> {
    Title: typeof Title;
    Image: typeof Image;
    Description: typeof Description;
    Qty: typeof Quantity;
    Price: typeof Price;
    Button: typeof ActionButton;
    Ratings : typeof Ratings;
}

const ProductDetail: ProductDetailCompound = ({ children, className }) => {
    return <div className={className}>{children}</div>;
};

ProductDetail.Title = Title;
ProductDetail.Image = Image;
ProductDetail.Description = Description;
ProductDetail.Qty = Quantity;
ProductDetail.Price = Price;
ProductDetail.Button = ActionButton;
ProductDetail.Ratings = Ratings;

export default ProductDetail;