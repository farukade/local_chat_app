import React, { useState } from "react";
import { VideoCameraIcon, HomeIcon, ArrowLeftCircleIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

//import react pro sidebar components
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import DisplayImage from "./DisplayImage";
import ThemeToggler from "../../services/ThemeToggler";

//import our custom css

const ShowContacts = () => {
  return (
    <div id="showContacts">
      <Sidebar className="pro-sidebar">
        <Menu>
          <MenuItem prefix={<DisplayImage />}>
            <div className="ml-20 flex flex-row gap-5">
              <VideoCameraIcon className="w-5 h-5" />
              <HomeIcon className="w-5 h-5" />
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              <ThemeToggler />
            </div>
          </MenuItem>
          <hr />
        </Menu>
        {/* <Menu>
          <MenuItem prefix={<ArrowLeftCircleIcon className="w-5 h-5" />}>
            <input type="text" />
          </MenuItem>
        </Menu> */}
        <Menu>
          <MenuItem active={true} icon={<DisplayImage />}>
            Adekunle Faruk
          </MenuItem>
          <MenuItem icon={<DisplayImage />}> Momoh Taiwo </MenuItem>
        </Menu>
      </Sidebar>
      {/* <main>
        <h1>Hello world</h1>
      </main> */}
    </div>
  );
};

export default ShowContacts;
