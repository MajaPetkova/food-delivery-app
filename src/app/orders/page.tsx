import React from "react";

const Orders = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3 ">
        <thead>
          <tr className="text-left">
          <td className="hidden md:block">OrderId</td>
          <td>Date</td>
          <td>Price</td>
          <td className="hidden md:block">Products</td>
          <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base odd:bg-red-50">
            <td className="hidden md:block px-1 py-6">546256326320</td>
            <td className="px-1 py-6">25.02.2023</td>
            <td className="px-1 py-6">85.60</td>
            <td className="hidden md:block px-1 py-6">Big Burger Menu (2), Veggie Pizza  (2), Coca Cola 1L (2)</td>
            <td className="px-1 py-6">On the way (approx. 10min)</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-200">
            <td className="hidden md:block px-1 py-6">546256326320</td>
            <td className="px-1 py-6">25.02.2023</td>
            <td className="px-1 py-6">85.60</td>
            <td className="hidden md:block px-1 py-6">Big Burger Menu (2), Veggie Pizza  (2), Coca Cola 1L (2)</td>
            <td className="px-1 py-6">On the way (approx. 10min)</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-200">
            <td className="hidden md:block px-1 py-6">546256326320</td>
            <td className="px-1 py-6">25.02.2023</td>
            <td className="px-1 py-6">85.60</td>
            <td className="hidden md:block px-1 py-6">Big Burger Menu (2), Veggie Pizza  (2), Coca Cola 1L (2)</td>
            <td className="px-1 py-6">On the way (approx. 10min)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
