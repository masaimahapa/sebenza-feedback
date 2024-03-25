import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";

export default function NavigationBar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-10">
        <li>
          <a href="/" className="hover:text-gray-300">Home</a>
        </li>
        <li>
          <a href="/add-feedback" className="hover:text-gray-300 flex" >Add Feedback
          <IoIosAddCircleOutline  className='ml-2 w-6 h-6'/>
          </a>
        </li>
      </ul>
    </nav>
  );
}
