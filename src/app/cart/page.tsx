import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500">
      {/* Products Container  */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll">
        {/* Single Item Container  */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      
      {/* Payment Container  */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center">
        <div className="flex justify-between">
          <span>Subtotal (3items)</span>
          <span>$81.70</span>
        </div>
        <div className="flex justify-between">
          <span>Subtotal (3items)</span>
          <span>$81.70</span>
        </div>
        <div className="flex justify-between">
          <span>Subtotal (3items)</span>
          <span>$81.70</span>
        </div>
        <hr />
        <button className="bg-red-500 rounded-md text-white p-3 w-1/2">Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
