import React, { useState } from "react";
import { VideoCameraIcon, HomeIcon, ArrowLeftCircleIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

//import react pro sidebar components
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import DisplayImage from "./DisplayImage";
import ThemeToggler from "../../utils/ThemeToggler";
import ViewMessage from "./ViewMessage";

//import our custom css

const ShowContacts = () => {
  return (
    <div id="showContacts">
      <Sidebar className="pro-sidebar dark:bg-slate-900">
        <Menu className="dark:bg-slate-900 dark:hover:bg-opacity-90">
          <div className="m-l-20 flex flex-row gap-5 p-5 items-center">
            <DisplayImage />
            <VideoCameraIcon className="Top-Icon w-5 h-5" />
            <HomeIcon className="Top-Icon w-5 h-5" />
            <ChatBubbleLeftRightIcon className="Top-Icon w-5 h-5" />
            <ThemeToggler />
          </div>
          <hr />
        </Menu>
        {/* <Menu>
          <MenuItem prefix={<ArrowLeftCircleIcon className="w-5 h-5" />}>
            <input type="text" />
          </MenuItem>
        </Menu> */}
        <Menu className="dark:text-slate-900">
          <MenuItem active={true} icon={<DisplayImage />}>
            Adekunle Faruk
          </MenuItem>
          <MenuItem icon={<DisplayImage />}> Momoh Taiwo </MenuItem>
          <MenuItem icon={<DisplayImage />}> Momoh Taiwo </MenuItem>
          <MenuItem icon={<DisplayImage />}> Momoh Taiwo </MenuItem>
          <MenuItem icon={<DisplayImage />}> Momoh Taiwo </MenuItem>
          <MenuItem icon={<DisplayImage />}> Momoh Taiwo </MenuItem>
          <MenuItem icon={<DisplayImage />}> Momoh Taiwo </MenuItem>
          <MenuItem icon={<DisplayImage />}> Momoh Taiwo </MenuItem>
          <MenuItem icon={<DisplayImage />}> Momoh Taiwo </MenuItem>
          <MenuItem icon={<DisplayImage />}> Momoh Taiwo </MenuItem>
          <MenuItem icon={<DisplayImage />}> Momoh Taiwo </MenuItem>
          <MenuItem icon={<DisplayImage />}> Momoh Taiwo </MenuItem>
          <MenuItem icon={<DisplayImage />}> Momoh Taiwo </MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <ViewMessage />
      </main>
    </div>
  );
};

export default ShowContacts;
