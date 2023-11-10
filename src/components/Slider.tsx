import Image from "next/image";
import React from "react";
const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.png",
  },
];

const Slider = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
      {/* Text Container  */}
      <div className="h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:text-6xl xl:text-7xl">
        TEST
        </h1>
        <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
      </div>
      {/* Image Container  */}
      <div className="w-full h-1/2 relative">
        <Image src="/slide1.png" alt="img" className="object-cover" fill />
      </div>
    </div>
  );
};

export default Slider;