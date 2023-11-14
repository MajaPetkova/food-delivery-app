"use client";
import React, { useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number };
};
const Price = ({ price, id, options }) => {
  const [totalPrice, setTotalPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{totalPrice.toFixed(2)}</h2>
      {/* Options Container  */}
      <div className="flex gap-4">
        {options.map((x, index) => (
          <button
            key={x.title}
            className="ring-1 ring-red-400 rounded-md p-2 min-w-[6rem]"
            style={{
              background: selectedItem === index ? "rgb(248 113 113" : "white",
              color: selectedItem === index ? "white" : "red",
            }}
            onClick={() => setSelectedItem(index)}
          >
            {x.title}
          </button>
        ))}
      </div>
      {/* Quantity and add Button Container  */}
      <div className="flex justify-between items-center">
        {/* {Quantity } */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-400 ">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev <= 1 ?  1 : prev - 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((prev) => prev + 1)}>
              {">"}
            </button>
          </div>
        </div>
        {/* Cart Button  */}
        <button className="uppercase bg-red-500 w-56 text-white p-3 ring-1 ring-red-400">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
