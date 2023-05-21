import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

import DisplayImage from "./DisplayImage";
import { useState } from "react";
import DeleteModal from "../Common/DeleteModal";
import SearchBarModal from "./SearchBarModal";

const MobileNavbarChat = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const openSearchBar = (val: boolean) => {
    console.log("openSearchBar", val);
    setOpenSearch(val);
  };

  return (
    <div className="bg-gray-800 text-gray-100 flex justify-between px-2 py-3 md:hidden">
      {/* Mobile SideBar */}
      <DisplayImage />

      <button className="focus:bg-gray-700 px-2 rounded">
        <ChatBubbleLeftRightIcon className="h-5 w-5" onClick={() => openSearchBar(!openSearch)} />
      </button>

      {openSearch && <SearchBarModal />}
    </div>
  );
};

export default MobileNavbarChat;
