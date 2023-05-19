import React, { useState } from "react";
import FullpageLoader from "../../Components/Common/FullpageLoader";
import ShowContacts from "../../Components/Chats/ShowContacts";

const ChatList = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="relative min-h-screen md:flex">
      <ShowContacts />

      {/* Content */}

      {/* since the full width is 100 and nav takes width 64 , flex 1 means just take the rest of the space*/}
      <div className="flex-1 text-2xl font-bold p-10">content goes here</div>
    </div>
  );
};

export default ChatList;
