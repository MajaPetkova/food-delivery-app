"use client";
import React from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number };
};
const Price = ({ price, id, options }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{price.toFixed(2)}</h2>
      {/* Options Container  */}
      <div className="flex gap-4">
       { options.map((x) => (<button key={x.title} className="ring-1 ring-red-400 rounded-md p-2">{x.title}</button>))}
      </div>
      {/* Quantity and add Button Container  */}
      <div className="flex justify-between items-center">
        {/* {Quantity } */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-400 ">
          <span>Quantity</span>  
          <div className="flex gap-4 items-center">
            <button>{"<"}</button>
            <span>1</span>
            <button>{">"}</button>
          </div>
        </div>
        {/* Cart Button  */}
        <button className="uppercase bg-red-500 w-56 text-white p-3 ring-1 ring-red-400">Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
