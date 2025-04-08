import { useEffect, useState } from "react";
import { Product, products } from "../../data/products";
import ProductItem from "../ProductItem";

export default function Wishlist() {
    const [fevoriteProducts, setFevoriteProducts] = useState<Product[]>([]);

    useEffect(() => {
        setFevoriteProducts(products.slice(4, 18));
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-white shadow-lg rounded-b">
                {fevoriteProducts.map((item) => (
                    <div
                        key={item.id}
                        className="w-full h-fit overflow-hidden flex flex-col relative"
                    >
                        <div
                            className="h-8 w-8 absolute z-10 top-2 right-2 bg-gray-400 flex justify-center items-center rounded-full cursor-pointer"
                            onClick={() => alert(item.title)}
                        >
                            <i className="fas fa-times text-white"></i>
                        </div>
                        <ProductItem className="w-full h-full flex flex-col overflow-hidden border-[0.5px] rounded-sm">
                            <div className="w-full h-fit overflow-hidden border-b-1">
                                <ProductItem.Image image={item.images[0]} className="w-full" />
                            </div>
                            <div className="w-full p-2 flex items-center flex-col gap-1 sm:gap-2 md:gap-3">
                                <ProductItem.Title className="font-bold text-sm sm:text-base md:text-lg">{item.title}</ProductItem.Title>
                                <ProductItem.Price className="font-bold text-sm sm:text-base md:text-lg">{item.price}</ProductItem.Price>
                                <ProductItem.Button className="w-full p-2 sm:p-3 md:p-4 border-2 rounded-md" type="buy">Buy now</ProductItem.Button>
                            </div>
                        </ProductItem>
                    </div>
                ))}
            </div>
        </>
    );
}
