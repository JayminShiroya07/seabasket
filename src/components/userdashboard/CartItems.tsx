import { useEffect, useState } from "react";
import ProductItem from "../ProductItem";

const CartItem: React.FC<{ cart: any }> = ({ cart }) => {
    const [cartQuantity, setCartQuantity] = useState<number>(Math.floor(Math.random() * 9));
    const [product, setProduct] = useState<any>({});

    useEffect(()=>{
        async function fetchProduct(){
            console.log("function called")
            const response = await fetch("http://127.0.0.1:8000/products/"+cart.product_id);

            if(!response.ok){
                throw Error("somthing were wrong");
            }

            const data = await response.json();
            console.log(data.images)
            setProduct(data);
        }

        fetchProduct();
    },[cart]);
    return (
        <>
            <ProductItem className="border-2 border-black rounded-md">
                <div className="w-full bg-dark-green text-center p-3 rounded-t">
                    <ProductItem.Title className="text-white font-extrabold font-stretch-125%">
                        {cart.product_name}
                    </ProductItem.Title>
                </div>
                <div className="w-full flex flex-col max md:flex-row gap-4 overflow-hidden">
                    <div className="md:w-1/3 w-full">
                        <ProductItem.Image className="w-full h-auto object-cover" image={"http://127.0.0.1:8000" + product.productUrl} />
                    </div>
                    <div className="md:w-2/3 w-full flex flex-col justify-evenly p-4 text-black">
                        <ProductItem.Price className="text-lg font-bold">{product.price}</ProductItem.Price>
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
