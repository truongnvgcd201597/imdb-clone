import React from "react";
import MenuItems from "./MenuItems";
import { AiFillHome } from "react-icons/ai";
import { FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 bg-black">
      <div className="flex justify-between items-center max-w-6xl text-white p-4 mx-auto">
        <div className="flex justify-between">
          <ul className="flex space-x-4">
            <MenuItems title="home" path="/" Icon={AiFillHome} />
            <MenuItems title="about" path="/about" Icon={FaInfoCircle} />
          </ul>
        </div>
        <div className="flex items-center justify-around">
          <ModeToggle />
          <Link href={"/"}>
            <span className="text-red-500 font-bold bg-white p-2 rounded-lg mr-2">
              IMDb
            </span>
            <span className="hidden sm:inline">Clone</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
