import { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import { useAppDispatch } from "../../store/slices";
import { fetchCart, onCartEdit } from "../../store/slices/cartSlice";
import { useSelector } from "react-redux";

const CartItem: React.FC<{ cart: any }> = ({ cart }) => {
  const [product, setProduct] = useState<any>({});

  const dispatch = useAppDispatch();
  const { isQuantityChanged } = useSelector((state: any) => state?.cart);

  useEffect(() => {
    async function fetchProduct() {
      console.log("function called");
      const response = await fetch(
        "http://127.0.0.1:8000/products/" + cart.product_id
      );

      if (!response.ok) {
        throw Error("somthing were wrong");
      }

      const data = await response.json();
      setProduct(data);
    }

    fetchProduct();
  }, [cart.product_id]);

  useEffect(() => {
    const token = localStorage.getItem("AuthToken") || "";

    dispatch(fetchCart(token));
  }, [isQuantityChanged]);

  function onEditCart(id: number, method: string) {
    const token = localStorage.getItem("AuthToken") || "";

    dispatch(onCartEdit({ id, method, token }));
  }

  return (
    <>
      <ProductItem className="border-2 border-black rounded-xl">
        <div className="w-full bg-dark-green text-center p-3 rounded-t-xl">
          <ProductItem.Title className="text-white font-extrabold font-stretch-125%">
            {cart.product_name}
          </ProductItem.Title>
        </div>
        <div className="w-full flex flex-col max md:flex-row gap-4 rounded-b-xl overflow-hidden">
          <div className="md:w-1/3 w-full">
            <ProductItem.Image
              className="w-full h-auto object-cover"
              image={"http://127.0.0.1:8000" + product.productUrl}
            />
          </div>
          <div className="md:w-2/3 w-full flex flex-col justify-evenly p-4 text-black">
            <ProductItem.Price
              className="text-lg font-bold"
              discount={product.discount}
            >
              {product.price}
            </ProductItem.Price>
            <ProductItem.Description className="text-md md:text-base">
              {product.description}
            </ProductItem.Description>
            <div className="flex flex-col sm:flex-row gap-5 justify-start items-center">
              <div className="flex w-full md:w-1/3 border-2 border-black rounded-xl overflow-hidden">
                <ProductItem.Button
                  icon="fas fa-plus"
                  className="text-white w-1/3 p-2 border-r-2 bg-gray-500"
                  onclick={() => onEditCart(product.id, "POST")}
                ></ProductItem.Button>
                <div className="bg-transparent text-center w-2/3 p-1 text-black text-xl font-medium outline-none">
                  {cart.quantity}
                </div>
                <ProductItem.Button
                  icon="fas fa-minus"
                  className="text-white w-1/3 p-2 border-l-2 bg-gray-500"
                  onclick={() => onEditCart(cart.id, "PUT")}
                ></ProductItem.Button>
              </div>
              <ProductItem.Button
                icon="fas fa-trash"
                className="text-red-600 w-full sm:w-auto px-4 py-3 text-2xl rounded"
                onclick={() => onEditCart(cart.id, "DELETE")}
              ></ProductItem.Button>
            </div>
          </div>
        </div>
      </ProductItem>
    </>
  );
};

export default CartItem;
