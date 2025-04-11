import { useEffect } from "react";
import CartItem from "./CartItems";
import Button from "../../UI/Button";
import { useAppDispatch } from "../../store/slices";
import { useSelector } from "react-redux";
import { fetchCart } from "../../store/slices/cartSlice";

export default function Cart() {

  const dispatch = useAppDispatch();
  const {cart_data} = useSelector((state:any) => state?.cart);
  

  useEffect(() => {
    const token = localStorage.getItem("AuthToken") || "";
    dispatch(fetchCart(token));

  }, [dispatch]);

  return (
    <div className="h-full p-4">
      {/* Responsive layout */}
      <div className="flex flex-col md:flex-row gap-4 p-1 h-full flex-wrap">
        {/* Main content: cart items */}
        <main className="flex-1 grid grid-cols-1 gap-4 max-h-full md:px-6 md:py-12 overflow-scroll [&::-webkit-scrollbar]:hidden">
          {cart_data.cart_item.map((item:any) => (
            <CartItem cart={item} key={item.id} />
          ))}
        </main>
        {/* Sidebar: cart details */}
        <aside className="border-2 border-black p-4 rounded-md shadow-2xl md:w-1/3 flex flex-col gap-3">
          <h2 className="text-lg font-bold mb-2 border-b-2">Cart Details</h2>
          <div className="w-full flex-1">
            <table className="w-full text-sm sm:text-base">
              <tbody>
                <tr>
                  <th className="text-start">Total Product Price</th>
                  <td className="text-end">+ {cart_data.total_amount}</td>
                </tr>
               
              </tbody>
            </table>
          </div>
          <h2 className="text-lg font-bold border-t-2 pt-3 flex justify-between">
            <span>Order Total</span>
            <span>{cart_data.total_amount}</span>
          </h2>
          <div className="w-full p-2 flex justify-end">
              <Button icon="fa fas-cart" name="Proceed to Buy" className="bg-red-500 text-white px-4 py-2 rounded-md"></Button>
          </div>
        </aside>
      </div>
    </div>
  );
}