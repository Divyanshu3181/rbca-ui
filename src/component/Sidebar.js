import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div>
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-700 text-white p-1 text-sm rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <span>&#10005;</span>
        ) : (
          <span>&#9776;</span>
        )}
      </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-40 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 md:translate-x-0 md:w-1/3 lg:w-1/6`}
      >
        <h2 className="text-xl  md:text-2xl font-bold text-center py-4">
          <Link to="/" onClick={() => setIsOpen(false)}>Admin Panel</Link>
        </h2>
        <nav>
          <ul className="text-center pr-1 md:space-y-2 space-y-1">
            <li>
              <Link
                to="/users"
                className="block py-1 px-2 rounded hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                User Management
              </Link>
            </li>
            <li>
              <Link
                to="/roles"
                className="block py-1 px-2 rounded hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Role Management
              </Link>
            </li>
            <li>
              <Link
                to="/permissions"
                className="block py-1 px-2 rounded hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Permission Management
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
