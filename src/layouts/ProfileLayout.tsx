import { useState } from "react";
import { profileDetails } from "../data/modals/profileDetails";
import { products } from "../data/products";
import { Outlet } from "react-router-dom";

const DETAILS: Array<profileDetails> = [
  {
    title : "profile",
    items: []
  },
  {
    title: "cart",
    items: products.slice(0, 4),
  },
  {
    title: "order",
    items: products.slice(3, 9),
  },
  {
    title: "wishlist",
    items: products.slice(2, 6),
  },
];

export default function ProfileLayout() {
  const [selectedDetails, setSelectedDetails] = useState<profileDetails>(
    DETAILS[0]
  );

  function listChangeHandler(title: string = "cart") {
    const newDetail = DETAILS.find((detail) => detail.title === title);
    if (newDetail) {
      setSelectedDetails(newDetail);
    }
  }

  // const textCss: string = "p-4 py-5 first-letter:capitalize bg-dark-green text-center text-white font-bold text-xl border-2 border-primary";
  const textCss: string = "p-4 text-2xl flex items-center justify-center  text-black shadow-lg rounded-lg transition bg-dark-green text-white";
  const buttonCss: string =
    "p-4 flex items-center text-2xl justify-center  text-black shadow-lg rounded-lg transition";

  return (
    <div className="md:h-[calc(100vh-3.8rem)] flex flex-col md:flex-row gap-3 text-dark-green">
      <div className="md:w-1/5 card rounded-md h-full">
        <div className="border-2 h-full flex flex-col">
          <div className="p-3">
            <h1 className="font-bold text-xl">Account</h1>
            <p>Jaymeen Shiroya</p>
          </div>
          <ul className="flex flex-col p-3 gap-1 h-full">
            {DETAILS.map((listItem) => (
              <li className={selectedDetails.title === listItem.title ? textCss : buttonCss} onClick={() => listChangeHandler(listItem.title)}>{listItem.title}</li>
            ))}
          </ul>
          <div className="w-full self-end p-3">
            <h1 className="p-4 py-5 first-letter:capitalize bg-red-500 rounded-xl text-center text-white font-bold text-xl border-2 border-primary">
              <i className="fas fa-sign-out-alt"></i> Logout</h1>
          </div>
        </div>
      </div>
        <div className="w-4/5 p-2">
            <div className="h-full w-full border-2 rounded-xl">
              <h1 className="bg-dark-green text-white h-1/15 p-4 text-center text-2xl font-medium font-stretch-100% shadow-xl rounded-t-xl">{selectedDetails.title}</h1>
              <div className="w-full min-h-14/15 rounded-b-xl border-t-4 border-primary p-3">
                <Outlet/>
              </div>
            </div>
        </div>
    </div>
  );
}
