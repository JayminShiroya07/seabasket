import React from "react";

const OrderStatus: React.FC<{ Status: string }> = ({ Status }) => {

    const isStatusActive = "bg-dark-green text-white";
    const isStatusInActive = "bg-gray-400 text-black";
    const isStatusCancelled = "bg-red-500 text-black";

  return (
    <>
      <div className="bg-red h-full w-full flex justify-center items-center flex-col">
        {/* 1 */}
        <div className="flex w-full h-fit box-border gap-2  items-center justify-center">
          <div className="h-full w-1/4 flex flex-col items-center ">
            <h1
              className={`h-12 w-12 rounded-full flex justify-center items-center ${
            Status === "cancelled" ? isStatusCancelled : isStatusActive
              }`}
            >
              <i className="fas fa-check"></i>
            </h1>
            <div
              className={`w-[5px] h-12 box-border ${
            Status === "cancelled" ? "bg-red-500" : "bg-dark-green"
              }`}
            ></div>
          </div>
          <div className="h-full w-full flex gap-2 items-start text-black text-3xl px-2">
            <i className="fas fa-clipboard-list"></i>
            <h3 className="text-xl">Order {Status === "cancelled" ? "Cancelled" : "Processed"}</h3>
          </div>
        </div>

        {/* 2 */}
        <div className="flex w-full box-border gap-2  items-center justify-center">
          <div className="h-full w-1/4 flex flex-col items-center ">
            <div
              className={`w-[5px] h-12 box-border ${
            Status === "shipped" || Status === "delivered" ? "bg-dark-green" : "bg-gray-400"
              }`}
            ></div>
            <h1
              className={`h-12 w-12 rounded-full flex justify-center items-center ${
            Status === "shipped" || Status === "delivered" ? isStatusActive : isStatusInActive
              }`}
            >
              <i className="fas fa-check"></i>
            </h1>
            <div
              className={`w-[5px] h-12 box-border ${
                Status === "shipped" || Status === "delivered" ? "bg-dark-green" : "bg-gray-400"
              }`}
            ></div>
          </div>
          <div className="h-full w-full flex gap-2 items-center  text-black text-3xl px-2">
            <i className="fas fa-shipping-fast"></i>
            <h3 className="text-xl">Order Shipped</h3>
          </div>
        </div>

        {/* 3 */}
        <div className="flex w-full box-border gap-2  items-center justify-center">
          <div className="h-full w-1/4 flex flex-col items-center ">
            <div
              className={`w-[5px] h-12 box-border ${
            Status === "delivered" ? "bg-dark-green" : "bg-gray-400"
              }`}
            ></div>
            <h1
              className={`h-12 w-12 rounded-full flex justify-center items-center ${
            Status === "delivered" ? isStatusActive : isStatusInActive
              }`}
            >
              <i className="fas fa-check"></i>
            </h1>
          </div>
          <div className="h-full w-full flex gap-2 items-end  text-black text-3xl px-2">
            <i className="fas fa-home"></i>
            <h3 className="text-xl">Order Delivered</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderStatus;
