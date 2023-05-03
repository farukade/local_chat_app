import React from "react";
import { FallingLines } from "react-loader-spinner";

const FullpageLoader = () => {
  return (
    <div className="modal-overlay">
      <FallingLines color="#ba3be7" width="100" visible={true} />
    </div>
  );
};

export default FullpageLoader;
