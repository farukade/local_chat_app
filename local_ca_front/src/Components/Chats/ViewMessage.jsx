import React from "react";

const ViewMessage = () => {
  return (
    <div>
      <div className="p-4">
        <div className={`animate-pulse bg-gray-500`}></div>
        <hr />
      </div>
      <div className="chats"></div>
    </div>
  );
};

export default ViewMessage;
