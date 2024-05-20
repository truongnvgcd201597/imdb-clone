"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, params }) {
  const searchParams = useSearchParams();

  const search = searchParams.get("genre");
  return (
    <div className="flex items-center cursor-pointer space-x-1 border-b-1 border-transparent hover:text-red-500 hover:border-red-500">
      <Link
        className={`font-semibold  ${
          search === params
            ? "font-bold text-red-500 border-b-2 border-red-500"
            : ""
        }`}
        href={`/?genre=${params}`}
      >
        {title}
      </Link>
    </div>
  );
}
