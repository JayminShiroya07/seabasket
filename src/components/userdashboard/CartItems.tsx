import { useState } from "react";
import { Product } from "../../data/products";
import ProductItem from "../ProductItem";

const CartItem: React.FC<{ product: Product }> = ({ product }) => {
    const [cartQuantity, setCartQuantity] = useState<number>(Math.floor(Math.random() * 9));

    return (
        <>
            <ProductItem className="border-2 border-black rounded-md">
                <div className="w-full bg-dark-green text-center p-3 rounded-t">
                    <ProductItem.Title className="text-white font-extrabold font-stretch-125%">
                        {product.title}
                    </ProductItem.Title>
                </div>
                <div className="w-full flex flex-col max md:flex-row gap-4 overflow-hidden">
                    <div className="md:w-1/3 w-full">
                        <ProductItem.Image className="w-full h-auto object-cover" image={product.images[0]} />
                    </div>
                    <div className="md:w-2/3 w-full flex flex-col justify-evenly p-4 text-black">
                        <ProductItem.Price className="text-lg font-bold">{product.price}</ProductItem.Price>
                        <ProductItem.Description className="text-md md:text-base">
                            {product.description}
                        </ProductItem.Description>
                        <ProductItem.Ratings rating={product.rating} />
                        <div className="flex flex-col sm:flex-row gap-5 justify-start items-center">
                            <div className="flex w-full md:w-1/3 border-2 border-black rounded-xl overflow-hidden">
                                <ProductItem.Button
                                    icon="fas fa-plus"
                                    className="text-white w-1/3 p-2 border-r-2 bg-gray-500"
                                    onclick={() => setCartQuantity(cartQuantity + 1)}
                                ></ProductItem.Button>
                                <div className="bg-transparent text-center w-2/3 p-1 text-black text-xl font-medium outline-none">
                                    {cartQuantity}
                                </div>
                                <ProductItem.Button
                                    icon="fas fa-minus"
                                    className="text-white w-1/3 p-2 border-l-2 bg-gray-500"
                                    onclick={() => setCartQuantity(cartQuantity - 1)}
                                ></ProductItem.Button>
                            </div>
                            <ProductItem.Button
                                icon="fas fa-trash"
                                className="text-red-600 w-full sm:w-auto px-4 py-3 text-2xl rounded"
                            ></ProductItem.Button>
                        </div>
                    </div>
                </div>
            </ProductItem>
        </>
    );
};

export default CartItem;
