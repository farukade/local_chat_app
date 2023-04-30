import React from "react";
import chats from "../../assets/svgs/sos.svg";
import { Link } from "react-router-dom";

const AuthSlider = () => {
  return (
    <div className="auth-one-bg h-full lg:px-20 p-4 bg-white w-1/2">
      <div className="bg-overlay"></div>
      <div className="relative h-full flex flex-col items-center justify-center">
        <div className="mb-4">
          <Link to="#" className="block">
            <img src={chats} alt="" height={100} style={{ width: "100%" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthSlider;
