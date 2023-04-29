import React, { Fragment, useState } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { CSSTransition } from "react-transition-group";

type DeleteProps = {
  show: boolean;
  onDeleteClick: () => void;
  onCloseClick: () => void;
};

const DeleteModal = ({ show, onDeleteClick, onCloseClick }: DeleteProps) => {
  return (
    <Fragment>
      {show && (
        <div className="modal-overlay">
          <div className={`modal ${show ? "slide-in-left" : "slide-out-left"}`}>
            <button
              className="modal-close text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onCloseClick}
            >
              &#10005; {/* HTML code for a multiplication sign */}
            </button>
            <TrashIcon className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" />

            <p className="mb-4 text-gray-500 dark:text-gray-300 font-semibold">Are you sure you want to delete this item?</p>

            <div className="flex justify-center items-center space-x-4">
              <button
                type="button"
                onClick={onCloseClick}
                className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                No, cancel
              </button>
              <button
                type="submit"
                onClick={onDeleteClick}
                className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                Yes, I'm sure
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default DeleteModal;
