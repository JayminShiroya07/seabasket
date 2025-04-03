import { useEffect, useState } from "react";
import OrderItems from "./OrderItem";
import { order, orders } from "../../data/modals/order";

export default function Orders() {
  const [fetchedOrders,setFetchedOrders] = useState<order[]>();

  useEffect(()=>{
    setFetchedOrders(orders);
  },[])

  return (
    <>
      <div className="h-full p-1 gap-3 flex flex-col">
        {!fetchedOrders && <p>No OrderFound...</p>}
        {fetchedOrders?.map((order) => (
          <OrderItems orderDetails={order}/>
        ))}
      </div>
    </>
  );
}
