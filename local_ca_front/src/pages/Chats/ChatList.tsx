import React, { useState } from "react";
import FullpageLoader from "../../Components/Common/FullpageLoader";
import ShowContacts from "../../Components/Chats/ShowContacts";

const ChatList = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <ShowContacts />
    </div>
  );
};

export default ChatList;
