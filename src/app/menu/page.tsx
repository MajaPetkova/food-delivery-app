import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((x) => (
        <Link href={`/menu/${x.slug}`} key={x.id} className="w-full h-1/3 bg-cover p-8 md:h-1/2" style={{backgroundImage:`url(${x.img})`}}>
          <div className={`text-${x.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{x.title}</h1>
            <p className="text-small my-6">{x.desc}</p>
            <button className={`hidden 2xl:block bg-${x.color} text-${x.color === "black" ? "white": "red-500"} py-2 px-4 rounded`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
