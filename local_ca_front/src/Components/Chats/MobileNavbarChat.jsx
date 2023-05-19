import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

import DisplayImage from "./DisplayImage";

const MobileNavbarChat = () => {
  return (
    <div className="bg-gray-800 text-gray-100 flex justify-between px-2 py-3 md:hidden">
      {/* Mobile SideBar */}
      <DisplayImage />

      <button className="focus:bg-gray-700 px-2">
        <ChatBubbleLeftRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default MobileNavbarChat;
