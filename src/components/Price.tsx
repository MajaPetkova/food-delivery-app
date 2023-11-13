"use client";
import React from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number };
};
const Price = ({ price, id, options }) => {
  return (
    <div>
      <h2>{price.toFixed(2)}</h2>
      {/* Options Container  */}
      <div>
       { options.map((x) => (<button key={x.title}>{x.title}</button>))}
      </div>
      {/* Quantity and add Button Container  */}
      <div>
        {/* {Quantity } */}

        <div>
          <span>Quantity</span>  
          <div>
            <button>{"<"}</button>
            <span>1</span>
            <button>{">"}</button>
          </div>
        </div>
        {/* Cart Button  */}
        <button>
        </button>
      </div>
    </div>
  );
};

export default Price;
