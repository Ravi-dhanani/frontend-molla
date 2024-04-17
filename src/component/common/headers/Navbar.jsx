import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="hidden gap-12 lg:flex 2xl:ml-16">
        <a href="#" className="text-lg font-semibold text-indigo-500">
          Home
        </a>
        <a
          href="#"
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
        >
          Collections
        </a>
        <a
          href="#"
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
        >
          Sale
        </a>
        <a
          href="#"
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
        >
          About
        </a>
      </nav>
    </div>
  );
}
