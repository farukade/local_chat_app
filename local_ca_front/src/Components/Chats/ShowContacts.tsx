import { Fragment, useState } from "react";
import { VideoCameraIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

import DisplayImage from "./DisplayImage";
import ThemeToggler from "../../utils/ThemeToggler";
import MobileNavbarChat from "./MobileNavbarChat";

const ShowContacts = () => {
  return (
    <Fragment>
      <MobileNavbarChat />

      {/* SideBar */}
      <div className="bg-slate-300 text-slate-900 dark:bg-slate-800 dark:text-blue-100  w-64 space-y-4 py-2 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <DisplayImage />
          <div className="flex flex-row gap-4 px-8">
            <VideoCameraIcon className="Top-Icon w-5 h-5" />
            <ChatBubbleLeftRightIcon className="Top-Icon w-5 h-5" />
            <ThemeToggler />
          </div>
        </div>

        {/* Nav */}
        <nav>
          <a href="#" className="block py-2.5 px-4 rounded hoverEffect">
            Faruk Adekunle
          </a>
          <a href="#" className="block py-2.5 px-4 rounded hoverEffect">
            Umar Faruk
          </a>
          <a href="#" className="block py-2.5 px-4 rounded hoverEffect">
            Tylerjusfly
          </a>
          <a href="#" className="block py-2.5 px-4 rounded hoverEffect">
            Momoh Tyler
          </a>
          <a href="#" className="block py-2.5 px-4 rounded hoverEffect">
            K.Wilson
          </a>
          <a href="#" className="block py-2.5 px-4 rounded hoverEffect">
            {" "}
            The Rich Kid
          </a>
        </nav>
      </div>
    </Fragment>
  );
};

export default ShowContacts;
