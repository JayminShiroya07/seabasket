import { toast } from "react-toastify";
import { useAppDispatch } from "../store/slices";
import { fetchCart, onCartEdit } from "../store/slices/cartSlice";
import ProductItem from "./ProductItem";
import { useNavigate } from "react-router-dom";

const ProductList: React.FC<{ products: any[] }> = ({ products }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function onProductSelect(id: number) {
    navigate(`/products/${id}`);
  }

  function onAddToCart(id: number) {
    const token = localStorage.getItem("AuthToken") || "";

    if (token) {
      dispatch(onCartEdit({ id, method: "POST", token }));
      dispatch(fetchCart(token));
    } else {
      toast.info("Login First");
      navigate("/login");
    }
  }

  return (
    <>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          className="flex flex-col border-2 bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-xl"
        >
          <div className="flex flex-col h-full">
            {/* Image */}
            <div
              className="w-full h-48 flex items-center justify-center shadow-md cursor-pointer"
              onClick={() => onProductSelect(product.id)}
            >
              <ProductItem.Image
                image={"http://127.0.0.1:8000" + product.productUrl}
                className="object-contain h-full p-4"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-wrap justify-between flex-1 p-4">
              {/* Title */}
              <div
                className="cursor-pointer"
                onClick={() => onProductSelect(product.id)}
              >
                <ProductItem.Title className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </ProductItem.Title>

                {/* Price and Ratings */}
                <div className="flex items-center flex-col md:flex-row justify-between mb-4">
                  <ProductItem.Price
                    discount={product.discount}
                    className="text-lg font-bold text-blue-600"
                  >
                    {product.price}
                  </ProductItem.Price>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <ProductItem.Ratings rating={product.rating} />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 flex-wrap">
                {/* Add to Cart Button */}
                <ProductItem.Button
                  type="cart"
                  className="flex-1 h-10 flex items-center justify-center bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  icon="fas fa-shopping-cart"
                  onclick={() => onAddToCart(product.id)}
                />

                {/* Buy Now Button */}
                <ProductItem.Button
                  type="buy"
                  className="flex-1 h-10 flex items-center justify-center border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-100 transition font-semibold"
                >
                  Buy Now
                </ProductItem.Button>

                {/* Wishlist Button */}
                <ProductItem.Button
                  type="wishlist"
                  className="w-10 h-10 flex items-center justify-center text-red-500 rounded-full text-xl border-[1px] transition"
                  icon="fa-regular fa-heart"
                />
              </div>
            </div>
          </div>
        </ProductItem>
      ))}
    </>
  );
};

export default ProductList;
