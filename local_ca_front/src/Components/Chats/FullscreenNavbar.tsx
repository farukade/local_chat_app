import { VideoCameraIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

import DisplayImage from "./DisplayImage";
import ThemeToggler from "../../utils/ThemeToggler";

const FullscreenNavbar = () => {
  return (
    <div className="flex items-center space-x-2">
      <DisplayImage />
      <div className="flex flex-row gap-4 px-8">
        <VideoCameraIcon className="Top-Icon w-5 h-5" />
        <ChatBubbleLeftRightIcon className="Top-Icon w-5 h-5" />
        <ThemeToggler />
      </div>
    </div>
  );
};

export default FullscreenNavbar;
