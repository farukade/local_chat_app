import React, { useState } from "react";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, HomeIcon, BookmarkIcon } from "@heroicons/react/24/solid";

//import react pro sidebar components
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";

//import our custom css

import "./Header.css";

const Header = () => {
  // initial menuCollapse state
  const { collapseSidebar } = useProSidebar();

  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    if (menuCollapse) {
      setMenuCollapse(false);
      collapseSidebar(false);
    } else {
      setMenuCollapse(true);
      collapseSidebar(true);
    }
  };

  return (
    <div id="header">
      <Sidebar className="pro-sidebar">
        <Menu>
          {menuCollapse ? (
            <MenuItem icon={<ArrowRightCircleIcon className="w-7 h-7" />} onClick={menuIconClick}></MenuItem>
          ) : (
            <MenuItem suffix={<ArrowLeftCircleIcon className="w-7 h-7" />} onClick={menuIconClick}>
              <div
                style={{
                  padding: "9px",
                  // textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: 14,
                  letterSpacing: "1px",
                }}
              >
                YOUR LOGO!..
              </div>
            </MenuItem>
          )}
          <hr />
        </Menu>
        <Menu>
          <MenuItem active={true} icon={<HomeIcon className="w-4 h-4" />}>
            Home
          </MenuItem>
          {/* <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu> */}
          <MenuItem icon={<BookmarkIcon className="w-4 h-4" />}> Documentation </MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <h1>Hello world</h1>
      </main>
    </div>
  );
};

export default Header;

// docs for sidebar
/* https://codesandbox.io/s/react-dashboard-pnm6fh?file=/src/pages/global/sidebar/MyProSidebar.jsx:3303-3321
https://codesandbox.io/s/sidebar-y1js2?file=/src/Components/Header/Header.js:1877-1907
https://www.npmjs.com/package/react-pro-sidebar
https://azouaoui-med.github.io/react-pro-sidebar/?path=/docs/sidebar--basic

*/
