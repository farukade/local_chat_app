import React from "react";

const AlertError = () => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 mb-2 rounded relative text-center" role="alert">
      <span className="block sm:inline font-mono font-bold">Session Expired</span>
    </div>
  );
};

export default AlertError;
