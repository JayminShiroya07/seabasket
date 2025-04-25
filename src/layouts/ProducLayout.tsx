import { useEffect } from "react";
import ProductList from "../components/ProductList";
import Searchbar from "../UI/Searchbar";
import { useAppDispatch } from "../store/slices";
import { fetchProducts, resetCategory } from "../store/slices/productSlice";
import { useSelector } from "react-redux";
import SkeletonLoader from "../UI/SkeletonLoader";
import ProductNotFound from "../UI/ProductNotFound";

export default function ProductLayout() {
  const dispatch = useAppDispatch();
  const { isProductLoading } = useSelector((state: any) => state.product);

  const { products, selectedCategory } = useSelector(
    (state: any) => state?.product
  );

  useEffect(() => {
    dispatch(fetchProducts({ categoryId: selectedCategory }));

    return () => {
      dispatch(resetCategory());
    };
  }, [dispatch]);

  return (
    <div className="w-full md:mt-0 h-[calc(100vh-3.8rem)]">
      <Searchbar />
      <div className="flex w-full flex-wrap bg-gray-20s0">
        <div className="w-full mt-16 flex gap-1">
          <div className="w-full [&::-webkit-scrollbar]:hidden overflow-x-scroll max-h-[calc(100vh-7.9rem)]">
            <div className="overflow-auto">
              {products.length === 0 ? (
                <div className="w-full bg-green-100 p-10">
                  <ProductNotFound />
                </div>
              ) : (
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
                  {isProductLoading ? <SkeletonLoader /> : null}
                  {!isProductLoading && <ProductList products={products} />}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
