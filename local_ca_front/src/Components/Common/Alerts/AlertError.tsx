import React from "react";

type alertProps = {
  message: string;
};

const AlertError = ({ message }: alertProps) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 mb-2 rounded relative text-center" role="alert">
      <span className="block sm:inline font-mono font-bold">{message}</span>
    </div>
  );
};

export default AlertError;
