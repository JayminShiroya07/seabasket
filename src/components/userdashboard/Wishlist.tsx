import ProductList from "../ProductList";
import { useSelector } from "react-redux";

export default function Wishlist() {
  
  const {products} = useSelector((state:any) => state.product)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-white shadow-lg rounded-b">
        <ProductList products={products.slices(0,2)} />
      </div>
    </>
  );
}
