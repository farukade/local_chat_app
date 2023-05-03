import React, { useState } from "react";
import FullpageLoader from "../../Components/Common/FullpageLoader";

const ChatList = () => {
  const [loading, setLoading] = useState(true);
  return loading ? (
    <FullpageLoader />
  ) : (
    <div>
      <h1>Chat list</h1>
    </div>
  );
};

export default ChatList;
