import React, { useState } from "react";
import FullpageLoader from "../../Components/Common/FullpageLoader";
import ShowContacts from "../../Components/Chats/ShowContacts";
import SidebarChats from "../../Components/Chats/SidebarChats";

const ChatList = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="flex">
      <ShowContacts />
    </div>
  );
};

export default ChatList;
