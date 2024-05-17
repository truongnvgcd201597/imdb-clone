import Link from "next/link";
import React from "react";

export default function MenuItems({ title, path, Icon }) {
  return (
    <Link href={path} className="uppercase hover:text-red-500">
      <Icon className="text-xl sm:hidden" />
      <p className="hidden md:inline">{title}</p>
    </Link>
  );
}
