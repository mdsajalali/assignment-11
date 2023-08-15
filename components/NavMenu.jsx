import Link from "next/link";
import React from "react";

const NavMenu = () => {
  return (
    <nav className="text-center">
      <ul>
        <li className="space-x-2 my-5 " >
          <Link className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" href="/">Home</Link>
          <Link className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" href="/blogs">Blogs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
