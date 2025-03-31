import { useEffect, useState } from "react";
import { Product, products as initialProducts } from "../../data/products";
import ProductItem from "../ProductItem";

export default function Cart() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(initialProducts);
  }, []);

  return (
    <div className="h-full p-4">
      {/* For mobile: stacked layout; for md and above: side-by-side */}
      <div className="flex flex-col md:flex-row gap-4 p-1 h-full">
        <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto [&::-webkit-scrollbar]:hidden    ">
          {cartItems.map((item, index) => (
            <ProductItem
              key={index}
              className="border-2 border-black rounded-md"
            >
              <div className="w-full bg-dark-green text-center p-2 rounded-t ">
                <ProductItem.Title className="text-black">
                  {item.title}
                </ProductItem.Title>
              </div>
              <div className="w-full flex flex-col sm:flex-row gap-2 overflow-hidden">
                <div className="sm:w-1/3">
                  <ProductItem.Image
                    className="w-full h-auto"
                    image={item.image}
                  />
                </div>
                <div className="sm:w-2/3 flex justify-between p-2 flex-col">
                  <ProductItem.Price>{item.price}</ProductItem.Price>
                  <div className="py-2 flex gap-2">
                    <ProductItem.Button
                      icon="fas fa-plus"
                      className="text-black w-1/3 p-2 border-black border-2 rounded "
                    ></ProductItem.Button>
                    <div className="bg-transparent text-center w-2/3 p-1 outline-none">
                      3
                    </div>
                    <ProductItem.Button
                      icon="fas fa-minus"
                      className="text-black w-1/3 p-2 border-black border-2 rounded "
                    ></ProductItem.Button>
                    <ProductItem.Button
                      icon="fas fa-trash"
                      className="text-red-600 w-1/3 p-2 border-red-500 border-2 rounded "
                    ></ProductItem.Button>
                  </div>
                </div>
              </div>
            </ProductItem>
          ))}
        </main>
        <aside className="bg-amber-200 p-4 rounded-md shadow-2xl md:w-1/3 flex justify-between flex-col gap-3">
          <h2 className="text-lg font-bold mb-2 border-b-2">Cart Details</h2>
          <div className="w-full h-full">
            <table className="w-full">
               
                <tr>
                    <th className="text-start">Total Product Price</th>
                    <td className="text-end">+ 1,200</td>
                </tr>
                <tr>
                    <th className="text-start">Total Discount</th>
                    <td className="text-end">- 1,200</td>
                </tr>
                <h1 className="bg-teal">

                </h1>
            </table>
          </div>
          <h2 className="text-lg font-bold mb-2 border-t-2 py-3 flex justify-between">
            <p>Order Total</p>
            <h1>1,200</h1>
          </h2>
        </aside>
      </div>
    </div>
  );
}
