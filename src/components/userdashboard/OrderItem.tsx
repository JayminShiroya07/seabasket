import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { order } from "../../data/modals/order";
import ProductItem from "../ProductItem";
import { Product } from "../../data/products";

const OrderItems: React.FC<{ orderDetails: order }> = ({ orderDetails }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    orderDetails.item[0]
  );

  function onOpenHandler() {
    setIsOpened((prevState) => !prevState);
  }

  function onItemSelect(id: number) {
    const selectedItem = orderDetails.item.find((item) => item.id === id);
    if (selectedItem) {
      setSelectedProduct(selectedItem);
    }
  }
  const formattedDate = new Date(orderDetails.date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const formattedDeliveryDate = new Date(
    orderDetails.deliveryDate
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full h-fit shadow-md rounded-md border-2 border-black">
      <div className="text-black font-medium p-4 flex items-start md:justify-between md:items-center h-fit">
        <div className="flex flex-col md:flex-row w-6/7 items-start justify-center item-center">
          {/* order id */}
          <h1 className="w-full md:w-2/4 p-2 flex flex-wrap">Order Id : {orderDetails.id}</h1>

          {/* status indicator */}
          <div className="w-full md:w-1/4">
            <div className=" p-2 flex gap-2 items-center">
              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center ${
                  orderDetails.status === "Completed"
                    ? "bg-green-200"
                    : orderDetails.status === "Pending"
                    ? "bg-yellow-300"
                    : "bg-red-300"
                }`}
              >
                <div
                  className={`w-1/2 h-1/2 rounded-full ${
                    orderDetails.status === "Completed"
                      ? "bg-green-700"
                      : orderDetails.status === "Pending"
                      ? "bg-yellow-700"
                      : "bg-red-700"
                  }`}
                ></div>
              </div>
              {orderDetails.status}
            </div>
          </div>

          {/* Date */}
          <div className="w-full flex gap-6 md:w-1/4 items-center p-2">
            <h1>{formattedDate}</h1>
          </div>
        </div>

        <div className="w-1/7 h-full flex justify-end items-center">
          <div
            className="border-[.3px] text-[15px] font-bold flex items-center justify-center w-8 h-8 rounded-full"
            onClick={onOpenHandler}
          >
            <motion.i
              animate={{
                rotate: isOpened ? 90 : 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="fas fa-greater-than"
            ></motion.i>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpened && (
          <motion.div
            key="orderDetails"
            initial={{ opacity: 0, height: 0, rotateX: -90 }}
            animate={{ opacity: 1, height: "auto", rotateX: 0 }}
            exit={{ opacity: 0, height: 0, rotateX: -90 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.8, 0.25, 1],
            }}
            className="p-4 h-fit text-black border-t-2 overflow-hidden"
            style={{ transformOrigin: "top center" }}
          >
            <motion.div
              initial={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
              className="flex flex-col md:flex-row w-full h-fit gap-4"
            >
              <div className="w-full md:w-1/3">
                {orderDetails.item.map((itm) => (
                  <motion.div
                    key={itm.title}
                    className={`${
                      itm.id === selectedProduct.id
                        ? "bg-gray-300"
                        : "hover:bg-gray-800"
                    } border-b-[1px] cursor-pointer border-2 rounded-md mb-2 border-black text-gray-900 font-medium shadow-md p-4 flex flex-col md:flex-row justify-between`}
                    onClick={() => onItemSelect(itm.id)}
                    animate={{
                      backgroundColor:
                        itm.id === selectedProduct.id ? "#D1D5DB" : "#FFFFFF",
                    }}
                    whileHover={{
                      scale: 1.059,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ProductItem>
                      <ProductItem.Title className="text-black">
                        <span className="text-lg md:text-xl font-bold">
                          {itm.title}{" "}
                        </span>
                        <span> x 2</span>
                      </ProductItem.Title>
                      <ProductItem.Price className="text-sm md:text-base">
                        {itm.price}
                      </ProductItem.Price>
                    </ProductItem>
                  </motion.div>
                ))}
              </div>
              <div className="w-full md:w-1/3 max-h-fit bg-gray-100 rounded-md shadow-md p-4">
                <ProductItem className="flex flex-col md:flex-row items-center gap-4 p-2">
                  <div className="flex justify-center items-center w-full md:w-auto">
                    <ProductItem.Image
                      image={selectedProduct.image}
                      className="w-full md:w-72 h-72 object-cover rounded-md mb-4 md:mb-0"
                    />
                  </div>
                  <div className="flex flex-col self-start w-full gap-3">
                    <ProductItem.Title className="text-2xl font-bold text-black mb-2 text-center md:text-left">
                      {selectedProduct.title}
                    </ProductItem.Title>
                    <ProductItem.Description className="text-md font-medium text-gray-600 mb-2 text-center md:text-left">
                      {selectedProduct.description}
                    </ProductItem.Description>
                    <ProductItem.Price className="text-md font-semibold text-black text-center md:text-left">
                      {selectedProduct.price}
                    </ProductItem.Price>
                  </div>
                </ProductItem>
              </div>
              <div className="w-full md:w-1/3 p-3">
                <div className="mb-2">
                  <b className="md:text-xl text-md">Delivery Date</b>:{" "}
                  <span className="md:text-xl text-sm text-gray-700">
                    {formattedDeliveryDate}
                  </span>
                </div>
                <div className="mb-2 text-md md:text-base">
                  <b className="md:text-xl text-md">Address</b>:{" "}
                  <span className="md:text-xl text-sm text-gray-700">
                    93, raj mandir soc. mansarovar road
                  </span>
                </div>
                <div className="text-sm md:text-base">
                  <b className="md:text-xl text-md">Total</b>:{" "}
                  <span className="md:text-xl text-sm text-gray-700">
                    1,200
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrderItems;
