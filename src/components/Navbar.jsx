import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex mx-auto justify-center items-center space-x-8 border-b-2 dark:border-gray-700 border-gray-300 py-2">
      <NavbarItem title="Trending" params="fetchTrending" />
      <NavbarItem title="Top Rated" params="fetchTopRated" />
    </div>
  );
}
