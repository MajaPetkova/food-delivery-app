import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((x) => (
        <Link className="w-full h-[60vh] border-r-2 border-b-2 group border-red-500 flex flex-col justify-between sm:w-1/2 lg:w-1/3 p-4 even:bg-fuchsia-50" href={`/product/${x.id}`} key={x.id}>
          {/* Image Container  */}
          {x.img && (
            <div className="relative h-[80%]">
              <Image src={x.img} alt="img" fill className="object-contain"></Image>
            </div>
          )}
          {/* Text Container  */}
            <div className="flex justify-between items-center font-bold">
              <h1 className="text-2xl uppercase p-2">
                {x.title}
              </h1>
              <h2 className="group-hover:hidden text-xl">${x.price}</h2>
              <button className=" hidden uppercase group-hover:block bg-red-500 text-white rounded p-2">Add to Cart</button>
            </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
