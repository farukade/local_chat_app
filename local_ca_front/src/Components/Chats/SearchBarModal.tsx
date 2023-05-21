import React from "react";
import "../../assets/stylesheet/modaltop.css";
import { NewspaperIcon } from "@heroicons/react/24/solid";

const SearchBarModal = () => {
  return (
    <div className="modal-overlay">
      <div className={`modal-top`}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-gray-200  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            placeholder="Search For User..."
            required
          />
          <button
            type="button"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-0 focus:ring-offset-0"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBarModal;
